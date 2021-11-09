import React from 'react';
import {View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchHeader from './components/screens/search';
import searchView from './components/screens/FlightResults';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Search"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Search"
          component={SearchHeader}
          options={{
            title: 'Search',
          }}
        />
        <Stack.Screen
          name="FlightResults"
          component={searchView}
          options={{
            title: 'Flight Results',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
