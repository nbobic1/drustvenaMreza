import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, UIManager } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import LogInScreen from './src/screens/LogInScreen';
import FeedScreen from './src/screens/FeedScreen';
import CreateScreen from './src/screens/CreateScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { C } from './src/utils/Consts';

//dragable list

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
//dfas


export default function App () {
  //https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native
  const Tab = createBottomTabNavigator();
  return (

    <NavigationContainer >
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            // You can return any component that you like here!
            var t = C.primary;
            if (!focused)
              t = "black";
            if (route.name === "LogIn") {
              return <Ionicons name="person-circle-outline" size={24} color={t} />;
            }
            else if (route.name === "Feed") {
              return <MaterialIcons name="grid-on" size={24} color={t} />;
            }
            else if (route.name === "Create") {
              return (<Ionicons name="create" size={24} color={t} />);
            }
            else {
              return (<Ionicons name="heart" size={24} color={t} />);
            }
          },
          tabBarLabel: () => { return null },
          header: ({ navigation, route, options }) => {
            return (null);
          }
        })}
      >
        <Tab.Screen
          name="Feed"
          component={FeedScreen}
          options={{ title: 'Feed' }}
          initialParams={{}}

        />
        <Tab.Screen
          name="Favourite"
          component={FavouriteScreen}
          options={{ title: 'LogIn' }}
          initialParams={{}}
        />
        <Tab.Screen
          name="Create"
          component={CreateScreen}
          options={{ title: 'Details' }}
          initialParams={{}}
        />
        <Tab.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ title: 'LogIn' }}
          initialParams={{}}
        />
      </Tab.Navigator>

    </NavigationContainer>
  );
}
