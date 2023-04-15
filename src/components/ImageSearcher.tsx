//console.log("slikeeeeeeeeeeeeeeeee=", getPexelImages('dog'))

import React, { useState, useRef } from 'react'
import { Pressable, FlatList, TextInput, View, Text, StyleSheet, Button, KeyboardAvoidingView, Modal } from 'react-native'
import { getGiffs, getPexelImages, searchForIcons } from '../utils/ApiCalls';
import FastImage from 'react-native-fast-image'
import InputV1 from './BasicComponents/InputV1';
import ButtonV1 from './BasicComponents/ButtonV1';
import { C, S } from '../utils/Consts';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
import Row from './BasicComponents/Row';

type Props = {
  visible: boolean;
  setVisibile: (ard: boolean) => void;
  setImgSrc: (a: string) => void;
};

const ImageSearcher = ({ visible, setVisibile, setImgSrc }: Props) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  console.log("image=====", images)
  const [btn, setBtn] = useState("Image");

  return (
    <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-200} >
      <Modal visible={visible}  >
        <View style={{ width: '100%', height: '100%', backgroundColor: C.popS, justifyContent: 'center' }}>
          <View style={styles.modalView}>
            <View style={{
              flexDirection: 'column',
              height: '100%',
            }}>
              <View style={{ flexGrow: 0, flexShrink: 0, }}>
                <Text style={{ fontSize: S.l, textAlign: 'center' }}>Search and pick an image</Text>
                <InputV1 f={-1} onChangeText={text => setQuery(text)} search={() => {
                  console.log('searcham', query, btn)
                  if (btn == 'Image') getPexelImages(query, setImages);
                  else if (btn == 'Icon') { searchForIcons(query).then(a => setImages(a)) }
                  else if (btn == 'Giff') { getGiffs(query).then(a => setImages(a)) }
                }} ph="Search..." />
                <Row g={3}>
                  <ButtonV1 bg={btn != 'Image' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                    setBtn('Image');
                  }} title="Image"></ButtonV1>
                  <ButtonV1 bg={btn != 'Icon' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                    setBtn('Icon');
                  }} title="Icon" ></ButtonV1>
                  <ButtonV1 bg={btn != 'Video' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                    setBtn('Video');
                  }} title="Video" ></ButtonV1>
                  <ButtonV1 bg={btn != 'Giff' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                    setBtn('Giff');
                  }} title="Giff" ></ButtonV1>
                </Row></View>
              <View style={{ flexGrow: 1, flexShrink: 1, }}>
                <FlatList
                  //   keyExtracotr={(key)=>{return key}}
                  style={{
                    backgroundColor: C.bg,
                    marginVertical: S.m,
                  }}
                  numColumns={2}
                  data={images}
                  renderItem={({ item }) => {
                    return (
                      <Pressable onPress={() => { setImgSrc(item); setVisibile(false) }} >
                        {btn == 'Image' || btn == 'Icon' ? <FastImage

                          style={styles.image}
                          source={{
                            uri: item,
                            priority: FastImage.priority.normal,
                          }}
                          resizeMode={FastImage.resizeMode.contain}
                        />
                          :
                          <Video
                            source={{
                              uri: item,
                            }}
                            style={styles.image}
                            resizeMode={ResizeMode.CONTAIN}
                            isLooping={true}
                            shouldPlay={true}
                          />
                        }
                      </Pressable>
                    )
                  }}
                /></View>
              <View style={{ flexGrow: 0, flexShrink: 0 }}>
                <ButtonV1 f={-1} w={'50%'} onPress={() => { setVisibile(false) }} title="Close"></ButtonV1>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView >
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },

  modalView: {//popup
    width: '90%',
    height: '80%'
    , backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignSelf: 'center',
    elevation: 5,
  },
});

export default ImageSearcher;