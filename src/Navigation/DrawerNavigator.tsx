import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Main from '../Screens/Home/Main';
import CustomDrawer from '../Components/CUSTOMS/CustomDrawer';
import LoginScreen from '../Screens/LoginScreen';
import {ScreenName} from '../Constant/ScreenConstant';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={ScreenName.MYMAIN_SCREEN}
        component={Main}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name={ScreenName.MYLOGIN_SCREEN}
        component={LoginScreen}
        options={{
          headerShown: true,
          headerTitle: 'Login Page',
          headerStyle: {
            backgroundColor: '#c5cae9',
          },
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
