import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button 
        title="Create League" 
        onPress={() => navigation.navigate('CreateLeague')} 
      />
      <Button 
        title="View Existing Leagues" 
        onPress={() => navigation.navigate('ViewLeagues')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

