import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Time from '../screens/Time';
import Something from '../screens/Something';
import Exercises from '../screens/Exercises';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
      <Tab.Navigator >
        <Tab.Screen name="Time" component={Time} />
        <Tab.Screen name="Exercises" component={Exercises} />
      </Tab.Navigator>
    );
  }

export default MyTabs;