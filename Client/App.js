import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Home from './screens/Home';
import Something from './screens/Something';
import Login from './screens/Login';
import MyTabs from './components/bottomNavigator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: false, headerShown:false}} >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Something" component={MyTabs} options={{headerleft:null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

  

