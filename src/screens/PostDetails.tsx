

import React, { useState } from 'react';

import {Modal,Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import Post from '../components/post';
import { useNavigation } from '@react-navigation/native';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
const PostDetailsScreen = ()=> {   
    
  const [visible, setVisible] = useState(false);
  const video = React.useRef(null);
    return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        
        <ScrollView style={styles.scroll1}> 
           
            <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
                <Text style={styles.title}>Slike</Text>
            <Post text="Upis u fakultet" imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi3Abbe2fwYkv8Zl82dQUhkdgJsF0hesF1Q&usqp=CAU'></Post>
            <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
            <Post  text="Prvi dan fakulteta" imgSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7d2NLNOA9NhEWYGGkqtUJjdQOzg_eOCjIg&usqp=CAU'></Post>
            <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
            <Post text="Amfiteatar" imgSrc='data:image/jpeg;base64,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'></Post>
            <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
            
            <Text style={styles.title}>Video</Text>
            <Video
            ref={video}
                source={{
                uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                resizeMode={ResizeMode.CONTAIN}
                onTouchEndCapture={()=>{ video.current.playAsync()}}
                isLooping
                style={styles.video}
            />
        </ScrollView>
      </View>
      
    </View>
  );      
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      },
    scroll1: {
      height:445,
    },
    video:{
        width:'100%',
        height:200,
    },
    feedView:{
      backgroundColor:'#f0ff41',
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
    
    title:{
        textAlign: 'center',
        fontSize:40
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
  export default PostDetailsScreen;