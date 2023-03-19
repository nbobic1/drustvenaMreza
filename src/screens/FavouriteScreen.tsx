

import React, { useState } from 'react';

import {Modal,Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import Post from '../components/post';
import { useNavigation } from '@react-navigation/native';
const FavouriteScreen = ()=> {   
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
  });
  export default FavouriteScreen;