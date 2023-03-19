import React, { useState } from 'react';
import { Modal, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
import FastImage from 'react-native-fast-image'
import {dty} from "../utils/DataTypes"

type Props = {
  height: number;
  item:dty[];
};
const PostDetailsScreen: React.FC<Props> = ({ height,item }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: height,
    },
    scroll1: {
      height: 300,
    },
    video: {
      width: '100%',
      height: 200,
      marginBottom: 30
    },
    feedView: {
      backgroundColor: '#f0ff41',
      height: '100%',
      width: '100%'
    },
    image: {
      width: '100%',
      height: 200,
      flexDirection: 'column-reverse',
      borderRadius: 20,
    },
    title: {
      textAlign: 'center',
      fontSize: 40
    },

  });
  
  const video = React.useRef(null);
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>

        <ScrollView style={styles.scroll1} 
    //nestedScrollEnabled={true}  
    >

          <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
          <Text style={styles.title}>Slike</Text>
          <View style={{ width: '100%', padding: 10, }}>
            <FastImage
              style={styles.image}
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi3Abbe2fwYkv8Zl82dQUhkdgJsF0hesF1Q&usqp=CAU',
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.stretch}
            />
          </View>
          <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
          <Text style={styles.title}>Slike</Text>
          <FastImage
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi3Abbe2fwYkv8Zl82dQUhkdgJsF0hesF1Q&usqp=CAU',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
          <Text style={styles.title}>Slike</Text>
          <FastImage
            style={styles.image}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAi3Abbe2fwYkv8Zl82dQUhkdgJsF0hesF1Q&usqp=CAU',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text>Fakultet je ustvar i isto sto i srednja skola samo malo drukcije koncipiran. lkdsjagldjgaljdglajglajglkjgdlagjdklakjgldajgljglgjlajgagjčalgjaglgjalčgjalčgjalgjalgjalgjagjčgjačgjagjačgjag</Text>
          <Text style={styles.title}>Video</Text>
          <Video
            ref={video}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            resizeMode={ResizeMode.CONTAIN}
            onTouchEndCapture={() => { video.current.playAsync() }}
            isLooping
            style={styles.video}
          />
        </ScrollView>
      </View>

    </View>
  );
};

export default PostDetailsScreen;