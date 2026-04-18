import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from './components/Main-Screen/index';
import Agendamento from './components/Add-Activity-Screen/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Agendamento" component={Agendamento} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
