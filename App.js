import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';
import HowToScreen from './components/HowToScreen';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Tic-Tac-Toe" component={HomeScreen} 
        options={({ navigation }) => ({
            headerStyle: {backgroundColor: "#CDE555"},
            headerTitleStyle: { alignSelf: 'center' },
            })}/>
        <Stack.Screen name="Play" component={PlayScreen}
        options={({ navigation }) => ({
            headerStyle: {backgroundColor: "#CDE555"},
            })} />
        <Stack.Screen name="How To Play?" component={HowToScreen} 
        options={({ navigation }) => ({
            headerStyle: {backgroundColor: "#CDE555"}, 
            })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
