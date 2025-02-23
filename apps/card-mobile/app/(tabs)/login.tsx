import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useSystem } from '@/library/powersync/system';
import { Button } from '@rneui/themed';

export default function LoginScreen() {
  const { supabaseConnector } = useSystem();
  const router = useRouter();

  useEffect(() => {
    supabaseConnector.client.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        router.replace('/(tabs)');
      }
    });
  }, []);

  const signInWithGoogle = async () => {
    await supabaseConnector.loginWithGoogle();
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Welcome</ThemedText>
      <ThemedText style={styles.subtitle}>Please sign in to continue</ThemedText>
      <Button 
        onPress={signInWithGoogle}
        style={styles.button}
      >
        Sign in with Google
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    minWidth: 200,
  },
});
