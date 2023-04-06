import React from 'react';
import { Button, FlatList, Text, StyleSheet, View, ImageBackground, TouchableOpacity, Pressable } from 'react-native';
import { useState } from 'react';
import PostDetailsScreen from './PostDetails/PostDetails';
import Kraj from '../KrajBtn';
import FastImage from 'react-native-fast-image'
import { PostData } from '../../utils/DataTypes';
import { C, S } from '../../utils/Consts';

type postProps = {
  data: PostData;
  setScrollE: (a: boolean) => void;
  refi: (a: number) => void;
  index: number;
  cols: number;
  flatListHeight: number;
};

const Post: React.FC<postProps> = ({ data, setScrollE, refi, index, flatListHeight, cols }) => {
  const [hgh, setHgh] = useState(200)
  const [details, setDetails] = useState([0])
  const styles = StyleSheet.create({
    root: {
      width: cols == 1 ? '95%' : '48%',
      marginLeft: cols == 1 ? '2.5%' : '1%',
      marginVertical: S.m,
      backgroundColor: 'red',
    },
    description: {
      textAlign: 'center',
      backgroundColor: C.white,
      fontSize: 25,
      height: 30,
    },
    image: {
      width: '100%',
      height: 200,
      flexDirection: 'column-reverse',
      alignSelf: 'center'
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
    },
  });
  return (
    <View style={styles.root} >
      <Pressable onPress={() => {
        if (refi != undefined && index >= 0)
          refi(index);
        if (hgh == 400) {
          setHgh(200);
          setDetails([0]);
          setScrollE(true);
        } else {
          setHgh(400);
          setDetails([1]);
          setScrollE(false)
        };
      }} >
        <FastImage
          style={styles.image}
          source={{
            uri: data.imgSrc,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.stretch}
        />
        <Text style={styles.description} >{data.text}</Text>
      </Pressable>
      {details[0] != 0 ? <PostDetailsScreen hgh={hgh} setDetails={setDetails} setHgh={setHgh} setScrollE={setScrollE} items={data.items} height={flatListHeight - 230 - S.m}></PostDetailsScreen> : <View></View> /*200 je slika, 30 text ispod nje, 30 back button*/}

    </View>

  );
};

export default Post;