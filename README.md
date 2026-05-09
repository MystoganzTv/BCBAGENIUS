<<<<<<< HEAD
# BCBAGenius

BCBAGenius es una app de estudio para ABA construida con Expo Router, React Native y Supabase.
=======
# BCBA Genius

BCBA Genius es una app de estudio para ABA construida con Expo Router, React Native y Supabase.
>>>>>>> 187c0096 (create boiler and mockup)

## Stack

- Expo / React Native
- Expo Router
- Zustand
- Supabase
- Vercel para despliegue web

## Requisitos

- Node.js 18+
- npm
- Proyecto de Supabase

## Instalacion

```bash
npm install
cp .env.example .env
```

Configura estas variables en `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key-aqui
```

## Desarrollo

```bash
npm run start
```

Tambien puedes usar:

```bash
npm run ios
npm run android
npm run web
```

## Base de datos

Ejecuta el schema de [lib/schema.sql](/Users/enrique/Documents/Homework/Coding/MyProjects/BCBAGenius/lib/schema.sql) en el SQL Editor de Supabase.

## Vercel

La app puede desplegarse como sitio web estatico usando Expo web export.

Variables de entorno requeridas en Vercel:

- `EXPO_PUBLIC_SUPABASE_URL`
- `EXPO_PUBLIC_SUPABASE_ANON_KEY`

Build command:

```bash
npm run build:web
```

Output directory:

```bash
dist
```

## Estado actual

- Auth con Supabase conectado
- UI principal de quiz, flashcards y perfil
- Pendiente conectar el guardado de progreso desde quiz/flashcards hacia el dashboard
