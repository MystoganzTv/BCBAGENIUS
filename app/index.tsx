import { Redirect } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';

// Pantalla raíz: redirige según estado de auth
export default function Index() {
  const { session } = useAuth();
  return session ? <Redirect href="/(tabs)" /> : <Redirect href="/(auth)/login" />;
}
