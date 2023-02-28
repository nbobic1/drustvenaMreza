
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {Modal,Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import FeedScreen from './src/screens/feedScreen';
import CreateScreen from './src/screens/CreateScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
export default function App() {
  //https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native
  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer >
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          // You can return any component that you like here!
          return <Text>{route.name}</Text>;
      }})}
      >
          <Tab.Screen 
            name="FeedScreen"
            component={FeedScreen}
            options={{title: 'Feed'}}
          initialParams={{}}
          
          /><Tab.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{title: 'LogIn'}}
        initialParams={{}}
        />
        <Tab.Screen
          name="FavouriteScreen"
          component={FavouriteScreen}
          options={{title: 'LogIn'}}
        initialParams={{}}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Details'}}
        initialParams={{}}
        />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
