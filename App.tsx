import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, UIManager, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogInScreen from './src/screens/LogInScreen';
import FeedScreen from './src/screens/FeedScreen';
import CreateScreen from './src/screens/CreateScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { C, S } from './src/utils/Consts';

import { Image } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import Profile from './src/components/Account/Profile';
//dragable list

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}
//dfas


export default function App () {
  const [logedin, setLogedin] = useState(false)
  //https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native
  const Tab = createBottomTabNavigator();
  useEffect(() => {

    SecureStore.getItemAsync('token').then((item) => {
      if (item && item != '')
        setLogedin(true);
      else
        setLogedin(false);
    })
  }, []);
  /*
          <Tab.Screen
            name="Favourite"
            component={FavouriteScreen}
            options={{ title: 'LogIn' }}
            initialParams={{}}
          />
*/
  return (
    logedin ?
      <NavigationContainer >
        <Tab.Navigator

          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              var t = C.primary;
              if (!focused)
                t = "black";
              if (route.name === "LogIn") {
                return (<View style={{ height: '100%', justifyContent: 'center' }}><Image
                  source={require('./assets/user.png')}
                  fadeDuration={0}
                  style={{ width: S.i, height: S.i }}
                /></View>);
              }
              else if (route.name === "Feed") {
                return (<View style={{ height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={require('./assets/menu.png')}
                    fadeDuration={0}
                    style={{ width: S.i, height: S.i }}
                  /></View>);
              }
              else if (route.name === "Create") {
                return (<View style={{ height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={require('./assets/editing.png')}
                    fadeDuration={0}
                    style={{ width: S.i, height: S.i }}
                  /></View>);
              }
              else {
                return (<View style={{ height: '100%', justifyContent: 'center' }}>
                  <Image
                    source={require('./assets/menu.png')}
                    fadeDuration={0}
                    style={{ width: S.i, height: S.i }}
                  />
                </View>);
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
            name="Create"
            component={CreateScreen}
            options={{ title: 'Details' }}
            initialParams={{}}
          />
          <Tab.Screen
            name="LogIn"
            //component={LogInScreen}
            //children={(rute, navigation) => { <LogInScreen setLogedin={setLogedin}></LogInScreen> }}
            options={{ title: 'LogIn' }}
          >
            {(props) => <Profile setLogedin={setLogedin}></Profile>}
          </Tab.Screen>
        </Tab.Navigator>

      </NavigationContainer>
      :
      <LogInScreen setLogedin={setLogedin}></LogInScreen>
  );
}
