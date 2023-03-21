import React from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import { ImageElement } from '../../../../../utils/DataTypes';
import FastImage from 'react-native-fast-image'


type Props = {
  value:ImageElement;
};


const Image = ({ value}: Props) => {
  return (

    <FastImage
    style={styles.image}
    source={{
      uri: value.url,
      priority: FastImage.priority.normal,
    }}
    resizeMode={FastImage.resizeMode.contain}
  />
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
export default Image