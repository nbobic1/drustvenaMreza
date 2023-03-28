import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import ImageSearcher from '../../../../ImageSearcher';

import FastImage from 'react-native-fast-image'
import { ImageElement } from '../../../../../utils/DataTypes';

type Props = {
  deleteEnabled: boolean;
  id: number;
  removeID: (a: number) => void;
  value: ImageElement;
  reorderEnabled: boolean;
};


const ImagePlaceholder = ({ deleteEnabled, id, removeID, value, reorderEnabled }: Props) => {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");  
  useEffect(() => {
    console.log("useEffect")
    value.url = imgSrc;
  }, [imgSrc]);
  return (
    <View pointerEvents={reorderEnabled ? "none" : "auto"}>
      <Pressable disabled={!deleteEnabled} style={styles.root} onPress={() => { removeID(id) }}>
        <Pressable disabled={deleteEnabled} onPress={() => { setVisible(true) }}>
          {imgSrc == "" ? <Text style={{ alignSelf: 'center', textAlignVertical: "center", height: '100%' }}>Tap to add an image</Text> :
            <FastImage
              style={styles.image}
              source={{
                uri: imgSrc,
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          }
        </Pressable>
        <ImageSearcher visible={visible} setImgSrc={setImgSrc} setVisibile={setVisible}></ImageSearcher>
      </Pressable>
    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    height: 200,
    width: '100%',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});
export default ImagePlaceholder