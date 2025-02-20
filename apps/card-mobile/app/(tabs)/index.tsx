import { Image, StyleSheet, Platform, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useQuery } from '@powersync/react-native';
import { CARD_TABLE, CardRecord } from '@/library/powersync/AppSchema';
import { useCallback, useEffect, useState } from 'react';
import { useSystem } from '@/library/powersync/system';

export default function HomeScreen() {
  const { powersync, supabaseConnector } = useSystem();
  const { data: cardRecords } = useQuery<CardRecord & { total_tasks: number; completed_tasks: number }>(`
    SELECT
      *
    FROM
      Card
  `)
  const [userId, setUserId] = useState<string>()

  function signIn() {
    supabaseConnector.loginWithGoogle()
  }

  function signOut() {
    supabaseConnector.logout()
  }

  useEffect(() => {
    supabaseConnector.client.auth.onAuthStateChange((event, session) => {
      const userId = session?.user.id
      setUserId(userId)
    })
  }, [supabaseConnector])

  const handleClick = useCallback(() => {
    console.log('cardRecords', cardRecords);
  }, [cardRecords])

  useEffect(() => {
    async function process() {
      const result = await powersync.getAll(`SELECT * FROM ${CARD_TABLE}`)
      console.log('result', result)
    }
    process()
  }, [powersync])
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button onPress={handleClick} title='Cilck'/>
        {
          !userId ? (
            <Button onPress={signIn} title='Sign In'/>
          ) : (
            <Button onPress={signOut} title='Sign Out'/>
          )
        }
        {cardRecords?.map(card => (
          <ThemedText key={card.id}>{card.text}</ThemedText>
        ))}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
