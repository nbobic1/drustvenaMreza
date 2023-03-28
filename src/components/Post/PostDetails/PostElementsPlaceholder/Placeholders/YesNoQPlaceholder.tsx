/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet, View, ImageBackground, TouchableOpacity, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { PostElement, YesNoQElement } from '../../../../../utils/DataTypes';
import YesNo from '../../../../YesNo';
import InputV2 from '../../../../BasicComponents/InputV2';

type postProps = {
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id: number;
  value: YesNoQElement;
  removeID: (a: number) => void;
  setVisible: (a: boolean) => void;
};
const YesNoQPlaceholder: React.FC<postProps> = ({ deleteEnabled, id, removeID, reorderEnabled, value, setVisible }) => {

  const styles = StyleSheet.create({

    description: {
      textAlign: 'center',
      backgroundColor: '#00FFFF8f',
      fontSize: 25,
    },
    image: {
      width: '100%',
      height: 200,
      flexDirection: 'column-reverse',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
    },
    root: {
      width: '100%',
    },
    singleRow:
    {
      flexDirection: 'row',
    },

    btn: {
      flex: 1,
      backgroundColor: 'blue',
      color: 'white',
      borderWidth: 3,
      borderColor: 'yellow',
      height: 40,

    },
    btnTxt: {
      verticalAlign: 'middle',
      color: 'white',
      height: '100%',
      textAlign: 'center',
    }
  });
  console.log("sto ne radiiii=", value.answer);
  return (
    <View pointerEvents={reorderEnabled ? 'none' : 'auto'} >
      <Pressable disabled={!deleteEnabled} style={styles.root} onPress={() => { removeID(id) }}>
        <View pointerEvents={deleteEnabled ? 'none' : 'auto'}>
          <InputV2 textS={value.style} setVisible={setVisible} initialValue={value.question} value={value} onChangeText={(text) => { value.question = text }} ph='Enter your question...'></InputV2>
          <YesNo value={value} ></YesNo>

        </View>
      </Pressable>
    </View>
  );
};
export default YesNoQPlaceholder;