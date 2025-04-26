import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '@rneui/themed';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useSystem } from '@/library/powersync/system';
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';

export default function SettingsScreen() {
  const { supabaseConnector } = useSystem();
  const router = useRouter();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const getCurrentUser = async () => {
      const { data: { session } } = await supabaseConnector.client.auth.getSession();
      if (session?.user) {
        setUser(session?.user);
      } else {
        router.replace('/login');
      }
    };
    getCurrentUser();
  }, []);

  const handleSignOut = async () => {
    await supabaseConnector.client.auth.signOut();
    router.replace('/login');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText style={styles.title}>Settings</ThemedText>
        <ThemedText style={styles.subtitle}>
          {user ? `Signed in as ${user.email}` : 'Not signed in'}
        </ThemedText>
      </ThemedView>

      {user && (
        <Button
          onPress={handleSignOut}
          title="Sign Out"
          buttonStyle={styles.button}
        />
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  button: {
    backgroundColor: '#ff4444',
    borderRadius: 8,
    paddingVertical: 12,
  },
});
