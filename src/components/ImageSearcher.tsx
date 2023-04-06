//console.log("slikeeeeeeeeeeeeeeeee=", getPexelImages('dog'))

import React, { useState, useRef } from 'react'
import { Pressable, FlatList, TextInput, View, Text, StyleSheet, Button, KeyboardAvoidingView, Modal } from 'react-native'
import { getPexelImages } from '../utils/ApiCalls';
import FastImage from 'react-native-fast-image'
import InputV1 from './BasicComponents/InputV1';
import ButtonV1 from './BasicComponents/ButtonV1';
import { C, S } from '../utils/Consts';

type Props = {
  visible: boolean;
  setVisibile: (ard: boolean) => void;
  setImgSrc: (a: string) => void;
};

const ImageSearcher = ({ visible, setVisibile, setImgSrc }: Props) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  console.log("image=====", images)

  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-200} >
      <Modal visible={visible}  >
        <View style={{ width: '100%', height: '100%', backgroundColor: C.popS, justifyContent: 'center' }}>
          <View style={styles.modalView}>

            <View style={{
              flexDirection: 'column',
            }}>
              <Text style={{ fontSize: S.l, textAlign: 'center' }}>Search and pick an image</Text>
              <InputV1 f={-1} onChangeText={text => setQuery(text)} search={() => { getPexelImages(query, setImages) }} ph="Search..." />
              <FlatList
                //   keyExtracotr={(key)=>{return key}}
                style={{
                  height: '75%',// width: 300,

                  backgroundColor: C.bg,
                  marginVertical: S.m,
                }}
                numColumns={3}
                data={images}
                renderItem={({ item }) => {
                  return (
                    <Pressable onPress={() => { setImgSrc(item); setVisibile(false) }} >
                      <FastImage
                        style={styles.image}
                        source={{
                          uri: item,
                          priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                      />
                    </Pressable>
                  )
                }}
              />
              <ButtonV1 f={-1} w={'50%'} onPress={() => { setVisibile(false) }} title="Close"></ButtonV1>

            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },

  modalView: {//popup
    width: '80%',
    height: '70%'
    , backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    elevation: 5,
  },
});

export default ImageSearcher;