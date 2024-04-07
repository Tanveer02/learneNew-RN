import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignupScreen from '../Screens/Auth/SignUpScreens/SignUpScreens';
import LoginScreen from '../Screens/Auth/LoginScreen/LoginScreen';

const Stack = createStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
