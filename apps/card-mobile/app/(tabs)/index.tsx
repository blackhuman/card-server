import { Image, StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useQuery } from '@powersync/react-native';
import { CARD_TABLE, CardRecord } from '@/library/powersync/AppSchema';
import { useCallback, useEffect, useId, useState } from 'react';
import { useSystem } from '@/library/powersync/system';
import { Card, Button, Icon } from '@rneui/themed';

export default function HomeScreen() {
  const { powersync, supabaseConnector } = useSystem();
  const { data: cardRecords } = useQuery<CardRecord & { total_tasks: number; completed_tasks: number }>(`
    SELECT
      *
    FROM
      Card
  `)

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
    <View style={styles.container}>
      <Button
        icon={<Icon name="refresh" color="white" style={styles.buttonIcon} />}
        onPress={handleClick}
        title='Refresh'
        buttonStyle={styles.refreshButton}
      />
      <View style={styles.cardList}>
        {cardRecords?.map(card => (
          <Card key={card.id} containerStyle={styles.cardContainer}>
            <View style={styles.cardRow}>
              <View style={styles.textContainer}>
                <ThemedText style={styles.cardText}>{card.text}</ThemedText>
                <ThemedText style={styles.cardTranslation}>{card.textTranslation}</ThemedText>
              </View>
              <Icon
                name="chevron-right"
                type="feather"
                color="#666"
                size={20}
              />
            </View>
          </Card>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 16,
    backgroundColor: 'transparent',
  },
  cardList: {
    paddingHorizontal: 8,
  },
  cardContainer: {
    borderRadius: 12,
    marginHorizontal: 0,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginRight: 16,
  },
  cardText: {
    fontSize: 18,
    marginBottom: 4,
  },
  cardTranslation: {
    fontSize: 16,
    color: '#666',
  },
  refreshButton: {
    marginBottom: 16,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  buttonIcon: {
    marginRight: 8,
  },
});
