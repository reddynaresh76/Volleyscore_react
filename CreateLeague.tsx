// CreateLeague.tsx

import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CreateLeague = ({ navigation }) => {
  const [leagueName, setLeagueName] = useState('');

  const handleCreate = () => {
    navigation.navigate('LeagueDetail', { leagueName });
  };

  return (
    <View>
      <TextInput
        placeholder="League Name"
        onChangeText={setLeagueName}
        value={leagueName}
      />
      <Button title="Create" onPress={handleCreate} />
    </View>
  );
};

export default CreateLeague;

