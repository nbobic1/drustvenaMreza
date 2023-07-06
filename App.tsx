import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, UIManager, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogInScreen from './src/screens/LogInScreen';
import FeedScreen from './src/screens/FeedScreen';
import CreateScreen from './src/screens/CreateScreen';
import FavouriteScreen from './src/screens/FavouriteScreen';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { S } from './src/utils/Consts';

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
  const [refresh, setRefresh] = useState(false);
  const [C, setC] = useState({
    white: '#fff',
    black: '#000',
    primary: '#1C6CCA',//-'#e57239', //'#60BF4D',
    primaryLight: '#39ACE5',
    secundary: '#B8B8B8',
    bg1: '#D8E3EF',
    bg2: '#f3f4f6',
    bg: '#f0f9ff',
    bgV2: '#323F46',
    focusBg: '#B7EFAC',
    //buttons
    btn: '#E1EBF5',
    btnT: '#B7EFAC',
    btnText: '#ffffff',
    //input
    i: '#000',
    iT: '#000',
    iB: '#000',

    //textview
    tv: '#000',
    tvT: '#000',

    //popup
    pop: '#000',
    popS: '#00000080'
  });
  //https://blog.jscrambler.com/getting-started-with-react-navigation-v6-and-typescript-in-react-native
  const Tab = createBottomTabNavigator();
  const recolor = (C1: any) => { SecureStore.setItemAsync('C', JSON.stringify(C1)); setRefresh(!refresh) }
  useEffect(() => {

    SecureStore.getItemAsync('token').then((item) => {
      if (item && item != '')
        setLogedin(true);
      else
        setLogedin(false);
    })
    SecureStore.getItemAsync('C').then((item) => {
      console.log("C=", item)
      if (item && item != '')
        setC(JSON.parse(item))
      else
        SecureStore.setItemAsync('C', JSON.stringify(C))
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
            options={{ title: 'Feed' }}
            initialParams={{}}

          >{(props) => <FeedScreen {...props} {...{ C: C }} />}</Tab.Screen>
          <Tab.Screen
            name="Create"
            options={{ title: 'Details' }}
            initialParams={{}}
          >{(props) => <CreateScreen {...props} {...{ C: C }}></CreateScreen>}</Tab.Screen>
          <Tab.Screen
            name="LogIn"
            //component={LogInScreen}
            //children={(rute, navigation) => { <LogInScreen setLogedin={setLogedin}></LogInScreen> }}
            options={{ title: 'LogIn' }}
          >
            {(props) => <Profile C={C} setRefresh={setRefresh} setLogedin={setLogedin}></Profile>}
          </Tab.Screen>
        </Tab.Navigator>

      </NavigationContainer>
      :
      <LogInScreen C={C} setLogedin={setLogedin}></LogInScreen>
  );
}
