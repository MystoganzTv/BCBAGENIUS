-- ═══════════════════════════════════════════════════════════
--  ABAGenius — Schema SQL para Supabase
--  Ejecutar en: Supabase Dashboard → SQL Editor
-- ═══════════════════════════════════════════════════════════

-- Extensión para UUIDs
create extension if not exists "uuid-ossp";

-- ─── Perfiles de usuario ─────────────────────────────────────
create table public.profiles (
  id           uuid references auth.users on delete cascade primary key,
  email        text not null,
  full_name    text,
  cert_target  text check (cert_target in ('BCBA', 'BCaBA')) default 'BCBA',
  avatar_url   text,
  created_at   timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Trigger: crear perfil automáticamente al registrarse
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── Sesiones de estudio ─────────────────────────────────────
create table public.study_sessions (
  id                  uuid default uuid_generate_v4() primary key,
  user_id             uuid references public.profiles(id) on delete cascade,
  session_type        text check (session_type in ('quiz', 'flashcards')),
  cert_type           text check (cert_type in ('BCBA', 'BCaBA')),
  domain              text,
  questions_attempted int  default 0,
  correct_answers     int  default 0,
  duration_seconds    int  default 0,
  completed_at        timestamptz default now()
);

alter table public.study_sessions enable row level security;

create policy "Users can manage their own sessions"
  on public.study_sessions for all using (auth.uid() = user_id);

-- ─── Progreso por dominio ─────────────────────────────────────
create table public.domain_progress (
  id         uuid default uuid_generate_v4() primary key,
  user_id    uuid references public.profiles(id) on delete cascade,
  cert_type  text check (cert_type in ('BCBA', 'BCaBA')),
  domain     text not null,
  correct    int default 0,
  total      int default 0,
  updated_at timestamptz default now(),
  unique (user_id, cert_type, domain)
);

alter table public.domain_progress enable row level security;

create policy "Users can manage their own progress"
  on public.domain_progress for all using (auth.uid() = user_id);

-- ─── Racha de estudio ─────────────────────────────────────────
create table public.streaks (
  user_id        uuid references public.profiles(id) on delete cascade primary key,
  current_streak int  default 0,
  longest_streak int  default 0,
  last_study_date date,
  updated_at     timestamptz default now()
);

alter table public.streaks enable row level security;

create policy "Users can manage their own streak"
  on public.streaks for all using (auth.uid() = user_id);
