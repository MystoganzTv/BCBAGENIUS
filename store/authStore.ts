import { Session, User } from '@supabase/supabase-js';
import { create } from 'zustand';
import { supabase } from '@/lib/supabase';
import { UserProfile } from '@/lib/types';

let authSubscription: { unsubscribe: () => void } | null = null;

interface AuthStore {
  user:    User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;

  // Acciones
  signIn:   (email: string, password: string) => Promise<{ error: string | null }>;
  signUp:   (email: string, password: string, fullName: string) => Promise<{ error: string | null }>;
  signOut:  () => Promise<void>;
  loadSession: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<{ error: string | null }>;
}

export const useAuthStore = create<AuthStore>((set, get) => ({
  user:    null,
  session: null,
  profile: null,
  loading: true,

  loadSession: async () => {
    set({ loading: true });
    const { data: { session } } = await supabase.auth.getSession();

    if (session?.user) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('id, email, full_name, cert_target, avatar_url, created_at')
        .eq('id', session.user.id)
        .single();

      set({ user: session.user, session, profile, loading: false });
    } else {
      set({ user: null, session: null, profile: null, loading: false });
    }

    // Evita acumular listeners si esta accion se invoca mas de una vez.
    authSubscription?.unsubscribe();

    // Solo re-fetchea el profile cuando el usuario realmente cambia (no en TOKEN_REFRESHED).
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      const currentUserId = get().user?.id;

      if (session?.user) {
        if (event === 'SIGNED_IN' && session.user.id !== currentUserId) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('id, email, full_name, cert_target, avatar_url, created_at')
            .eq('id', session.user.id)
            .single();
          set({ user: session.user, session, profile });
        } else {
          set({ user: session.user, session });
        }
      } else {
        set({ user: null, session: null, profile: null });
      }
    });

    authSubscription = data.subscription;
  },

  signIn: async (email, password) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return { error: error.message };
    return { error: null };
  },

  signUp: async (email, password, fullName) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName } },
    });
    if (error) return { error: error.message };
    return { error: null };
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null, profile: null });
  },

  updateProfile: async (data) => {
    const user = get().user;
    if (!user) return { error: 'No hay sesión activa' };

    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id);

    if (error) return { error: error.message };

    set((state) => ({
      profile: state.profile ? { ...state.profile, ...data } : null,
    }));
    return { error: null };
  },
}));
