import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/components/login/Login';
import Card from './src/components/cards/Card';
import SpendingDashboard from './src/components/SpendingDashboard';
import Splash from './src/components/splash/Splash';
import EditLimit from './src/components/cards/EditLimit';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Card' component={Card} options={{ headerShown: false }} />
        <Stack.Screen name='EditLimit' component={EditLimit} options={{ headerShown: false }} />
        <Stack.Screen name='SpendingDashboard' component={SpendingDashboard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App