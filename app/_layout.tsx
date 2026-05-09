import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useAuth } from '@/hooks/useAuth';
import { useProgressStore } from '@/store/progressStore';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { session, loading, loadSession } = useAuth();
  const loadLocalProgress = useProgressStore((state) => state.loadLocal);

  const [fontsLoaded] = useFonts({
    // Agrega fuentes personalizadas aquí si las necesitas
    // 'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    loadSession();
    loadLocalProgress();
  }, []);

  useEffect(() => {
    if (!loading && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loading, fontsLoaded]);

  if (loading || !fontsLoaded) return null;

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </>
  );
}
