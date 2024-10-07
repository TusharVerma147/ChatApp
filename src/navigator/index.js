import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/splashScreen';
import BottomTab from './bottomtab';
import {ScreenNames} from './screenNames';
import Search from '../screens/searchScreen';
import Chat from '../screens/chatScreen';









const RootNavigator = () => {

const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}>
               
        <Stack.Screen
          component={SplashScreen}
            name={ScreenNames.Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Search}
            name={ScreenNames.Search}
          options={{headerShown: false}}
        />
       <Stack.Screen
          component={Chat}
            name={ScreenNames.Chat}
          options={{headerShown: false}}
        />
     
        <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          />
        
        
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
