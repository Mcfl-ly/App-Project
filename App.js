import React, {Suspense} from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SQLiteProvider } from 'expo-sqlite';

import MainScreen from './components/Main-Screen/index';
import Agendamento from './components/Add-Activity-Screen/index'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Suspense fallback={<View style={{flex: 1, justifyContent: 'center'}}><ActivityIndicator size="large" /></View>}>
          <SQLiteProvider
              databaseName='check.db'
              assetSource={{assetId: require('./assets/db/check.db')}}>
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName="MainScreen">
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="Agendamento" component={Agendamento} />

      </Stack.Navigator>
    </NavigationContainer>
              </SQLiteProvider>
          </Suspense>
  );
}
