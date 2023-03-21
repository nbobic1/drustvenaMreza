import React, { useState,useEffect } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import ImageSearcher from '../../../../ImageSearcher';

import FastImage from 'react-native-fast-image'
import { ImageElement } from '../../../../../utils/DataTypes';

type Props = {
  deleteEnabled: boolean;
  id: number;
  removeID: (a: number) => void;
  value:ImageElement;
};


const ImagePlaceholder = ({ deleteEnabled, id, removeID,value }: Props) => {

  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    console.log("useEffect")
    value.url=imgSrc;
  },[imgSrc]);
  return (
    <Pressable disabled={!deleteEnabled} style={styles.root} onPress={() => { removeID(id) }}>
      <Pressable disabled={deleteEnabled} onPress={() => { setVisible(true)}}>
      <FastImage
            style={styles.image}
            source={{
              uri: imgSrc,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          /></Pressable>
      <ImageSearcher visible={visible}  setImgSrc={setImgSrc} setVisibile={setVisible}></ImageSearcher>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 5
  },
  image:{
    height:150,
    width:150
},
});
export default ImagePlaceholder