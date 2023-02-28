

import React, { useState } from 'react';

import {Modal,Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import Post from '../components/post';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
const FavouriteScreen = ()=> {   
    
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
    return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <ScrollView> 
         <Post  text="moja appp likacijaa" imgSrc='https://images.squarespace-cdn.com/content/v1/58e2c2712e69cfd46ad23073/1626716913782-U3Q04AVTCDVVV553A4QE/lucky+lous.png'></Post>
        </ScrollView>
      </View>
          <Modal transparent={true} visible={visible} >
            <View style={styles.modalView}>
              <Text>This is a popup!</Text>
              <Button title="Close" onPress={() => setVisible(false)} />
            </View>
          </Modal>
      </View>
  );      
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    feedView:{
      backgroundColor:'#f0f',
      height: '93%',
      width: '100%'
    }
    ,navBar:{
      backgroundColor: '#fff',
      height: '7%',
      width: '100%',
      flexDirection: 'row',
     // flex: 1
    },
    navElement:{
  
      flexGrow: 1,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    img:{
        width: '100%',
        height: 200,
    },
    description:{
      textAlign: 'center',
      fontSize:20
    }, 
    modalContainer: {
     width: '30%',
      alignItems: 'center',
      backgroundColor:'#000',
      justifyContent: 'center',
    
    },
    modalView: {
      backgroundColor: '#0f0',
      borderRadius: 10,
      position: 'absolute',
      padding: 20,
      bottom: 100,
      alignSelf: 'center',
      elevation: 5,
    },
    modalView2: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#036',
  
    },
  });
  export default FavouriteScreen;