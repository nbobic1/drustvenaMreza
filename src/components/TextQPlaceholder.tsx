/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from 'react';
import {Button,TextInput,Text,StyleSheet, View, ImageBackground, TouchableOpacity} from 'react-native';
import {useState,useEffect} from 'react';
import PostDetailsScreen from '../screens/PostDetails';
import Kraj from './KrajBtn';
import FastImage from 'react-native-fast-image'

type postProps = {
  text: string;
  deleteEnabled: boolean;
};
const YesNoQPlaceholder:  React.FC<postProps> =({text,deleteEnabled}) => {
  const [first, setFirst] = useState(text)
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    // Update the document title using the browser API
    setFirst(text)
  });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    description:{
      textAlign: 'center',
      backgroundColor: '#00FFFF8f',
      fontSize:25,
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
    root:{
      width:'100%',
      backgroundColor:'white',
      borderWidth:5,
      opacity:visible ? 1:0,
      height: visible ? 'auto' : 0,
        },
  }); 
 
  return (
      <View style={styles.root}>
        <TouchableOpacity disabled={!deleteEnabled} onPress={()=>{setVisible(false); }}>
          <View pointerEvents={deleteEnabled ? 'none':'auto'}>
              <Text>{text}</Text>
              <Text>{first}</Text>
              <TextInput  style={styles.description} placeholder="Your question..." ></TextInput>
              <TextInput placeholder="Your answer..."></TextInput>
              <Button title="Answer" onPress={()=>{console.log("moaj=",deleteEnabled)}}/>
          </View>
         
        </TouchableOpacity>
      </View>
      );
  };

export default YesNoQPlaceholder;