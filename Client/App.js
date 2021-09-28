import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Register from './screens/Register';
import Home from './screens/Home';
import Something from './screens/MainApp';
import Login from './screens/Login';
import MyTabs from './components/bottomNavigator';
import Exercises from './screens/Exercises';
import MainApp from './screens/MainApp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{
        headerShown:false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Exercises" component={Exercises}  />
          <Stack.Screen name="MainApp" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

  

