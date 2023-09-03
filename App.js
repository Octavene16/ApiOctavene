import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  ContentScreen from './screens/ContentScreen'
import  CoverScreen from './screens/CoverScreen'

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cover">
        <Stack.Screen name="Cover" component={CoverScreen}></Stack.Screen>
        <Stack.Screen name="Content" component={ContentScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;