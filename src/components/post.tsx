/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from 'react';
import {Button,FlatList,Text,StyleSheet, View, ImageBackground, TouchableOpacity, Pressable} from 'react-native';
import {useState} from 'react';
import PostDetailsScreen from '../screens/PostDetails';
import Kraj from './KrajBtn';
import FastImage from 'react-native-fast-image'
type postProps = {
  text: string;
  imgSrc: string;
  setScrollE:(a:boolean)=>void;
  refi:(a:number)=>void;
  index:number;
  flatListHeight:number;
};

const Post: React.FC<postProps> =({text,imgSrc,setScrollE,refi,index,flatListHeight}) => {
  const [hgh, setHgh] = useState(200)
  const [details, setDetails] = useState([0])
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
      height:30,
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
  }); 
 
  return (
      <View  >
        <Pressable onPress={()=>{ if(refi!=undefined&&index>=0)
  refi(index);
  if(hgh==400){setHgh(200); setDetails([0]);setScrollE(true);}else{ setHgh(400); setDetails([1]);setScrollE(false)};
  }} > 
    <FastImage
        style={styles.image}
        source={{
            uri: imgSrc,
           priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.stretch}
    />
     <Text style={styles.description} >{text}</Text>
  
      </Pressable>
     {details[0]!=0 ? <PostDetailsScreen height={flatListHeight-260}></PostDetailsScreen> : <View></View> /*200 je slika, 30 text ispod nje, 30 back button*/}
      <Kraj hgh={hgh} setDetails={setDetails} setHgh={setHgh} setScrollE={setScrollE} ></Kraj>
         
</View>

      );
  };

export default Post;