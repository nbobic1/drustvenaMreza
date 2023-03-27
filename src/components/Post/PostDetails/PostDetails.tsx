import React, { useEffect, useState } from 'react';
import { FlatList, TextInput, Modal, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image'
import PostDetailsOptions from './PostDetailsOptions'
import { PostData, PostElement, VideoElement, ImageElement, TextQElement, YesNoQElement, PostElementType } from "../../../utils/DataTypes"
import PostElements from './PostElements/PostElements';
import { C } from '../../../utils/Consts';

type Props = {
  height: number;
  items: PostElement[];
  hgh: any;
  setHgh: (a: any) => void;
  setScrollE: (a: boolean) => void;
  setDetails: (a: any) => void;
};
const PostDetailsScreen: React.FC<Props> = ({ height, items, hgh, setHgh, setScrollE, setDetails }) => {

  const styles = StyleSheet.create({
    container: {
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
      backgroundColor: C.bg,
      height: height,
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


  return (
    <View style={styles.feedView}>
      <ScrollView style={styles.scroll1}>

        <FlatList
          //   style={{backgroundColor:'red'}}
          data={items}
          keyExtractor={(item1) => item1.index.toString()}
          renderItem={({ item }) => { return (<PostElements element={item}></PostElements>) }}
        />
      </ScrollView>

      <PostDetailsOptions hgh={hgh} setDetails={setDetails} setHgh={setHgh} setScrollE={setScrollE} ></PostDetailsOptions>
    </View>
  );
};

export default PostDetailsScreen;
/* 
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
 */