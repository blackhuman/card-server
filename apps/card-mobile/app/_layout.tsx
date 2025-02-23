import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { PowerSyncContext } from '@powersync/react-native';
import { useSystem } from '@/library/powersync/system';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const system = useSystem();
  const router = useRouter();
  const db = useMemo(() => {
    return system.powersync;
  }, []);

  useEffect(() => {
    async function process() {
      const { data: { session } } = await system.supabaseConnector.client.auth.getSession()
      const userId = session?.user.id
      if (userId) {
        system.init()
        router.replace('/(tabs)')
      } else {
        system.destroy()
        router.replace('/login')
      }
    }
    process()
  }, [])

  useEffect(() => {
    system.supabaseConnector.client.auth.onAuthStateChange((event, session) => {
      console.log('onAuthStateChange event', event)
      console.log('onAuthStateChange session', session)
      const userId = session?.user.id
      if (userId) {
        system.init()
        router.replace('/(tabs)')
      } else {
        system.destroy()
        router.replace('/login')
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
        <View style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </SafeAreaView>
        </View>
      </ThemeProvider>
    </PowerSyncContext.Provider>
  );
}
