import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { PowerSyncContext } from '@powersync/react-native';
import { useSystem } from '@/library/powersync/system';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const system = useSystem();
  const db = useMemo(() => {
    return system.powersync;
  }, []);

  useEffect(() => {
    system.supabaseConnector.client.auth.onAuthStateChange((event, session) => {
      console.log('event', event)
      console.log('session', session)
      const userId = session?.user.id
      if (userId) {
        system.init()
      } else {
        system.destroy()
      }
    })
    return () => {
      system.destroy()
    }
  }, [])
  
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <PowerSyncContext.Provider value={db}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PowerSyncContext.Provider>
  );
}
