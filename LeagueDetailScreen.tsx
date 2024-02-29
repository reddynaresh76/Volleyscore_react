// LeagueDetailScreen.tsx

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LeagueDetailScreen = ({ route }) => {
  const { leagueName } = route.params;
  const [teamCount, setTeamCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{leagueName}</Text>
      
      <View style={styles.inputRow}>
        <Icon name="chevron-down" size={30} color="#000" onPress={() => setTeamCount(Math.max(0, teamCount - 1))} />
        <Text>Number of Teams: {teamCount}</Text>
        <Icon name="chevron-up" size={30} color="#000" onPress={() => setTeamCount(teamCount + 1)} />
      </View>
      
      <Button title="No. of Divisions" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default LeagueDetailScreen;

