// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import CreateLeague from './CreateLeague';
import LeagueDetailScreen from './LeagueDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CreateLeague" component={CreateLeague} />
        <Stack.Screen name="LeagueDetail" component={LeagueDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

