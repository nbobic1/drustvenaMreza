import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, UIManager, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogInScreen from './src/screens/LogInScreen';
import FeedScreen from './src/screens/FeedScreen';
import CreateScreen from './src/screens/CreateScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { C, S } from './src/utils/Consts';

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
              return (<View style={{ height: '100%', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}><Ionicons name="person-circle-outline" size={S.i} color={t} /></Text></View>);
            }
            else if (route.name === "Feed") {
              return (<View style={{ height: '100%', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}><MaterialIcons name="grid-on" size={S.i} color={t} /></Text></View>);
            }
            else if (route.name === "Create") {
              return (<View style={{ height: '100%', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}><Ionicons name="create" size={S.i} color={t} /></Text></View>);
            }
            else {
              return (<View style={{ height: '100%', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}><Ionicons name="heart" size={S.i} color={t} /></Text></View>);
            }

          },
          tabBarLabel: () => {
            return null// <View style={{ height: '100%', justifyContent: 'center' }}><Text style={{ textAlign: 'center' }}><MaterialIcons name="grid-on" size={S.i} color={'black'} /></Text></View> 
          },
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
