import React from 'react';
import HomeScreen from '../Screens/BottomTabScreens/HomeScreen/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../Screens/BottomTabScreens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();
export default function BottomTabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
