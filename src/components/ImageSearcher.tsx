//console.log("slikeeeeeeeeeeeeeeeee=", getPexelImages('dog'))

import React, { useState, useRef, useEffect } from 'react'
import { Pressable, FlatList, TextInput, View, Text, StyleSheet, Button, KeyboardAvoidingView, Modal } from 'react-native'
import { getGiffs, getPexelImages, searchForIcons } from '../utils/ApiCalls';
import FastImage from 'react-native-fast-image'
import InputV1 from './BasicComponents/InputV1';
import ButtonV1 from './BasicComponents/ButtonV1';
import { S } from '../utils/Consts';
import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import Row from './BasicComponents/Row';
import MyCamera from './BasicComponents/Camara';

type Props = {
  visible: boolean;
  setVisibile: (ard: boolean) => void;
  setImgSrc: (a: string) => void;
  C: any;
};

const ImageSearcher = ({ visible, setVisibile, C, setImgSrc }: Props) => {
  const [showCamera, setShowCamera] = useState(false);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  console.log("image=====", images)
  const [btn, setBtn] = useState("Image");
  if (showCamera) {
    return (<MyCamera C={C} close={setVisibile} setShowCamera={setShowCamera} showCamera={showCamera} setImg={setImgSrc}></MyCamera>)

  }
  else
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
                  <InputV1 C={C} f={-1} onChangeText={text => setQuery(text)} search={() => {
                    console.log('searcham', query, btn)
                    if (btn == 'Image') getPexelImages(query, setImages);
                    else if (btn == 'Icon') { searchForIcons(query).then(a => setImages(a)) }
                    else if (btn == 'Giff') { getGiffs(query).then(a => setImages(a)) }
                  }} ph="Search..." />
                  <Row C={C} g={3}>
                    <ButtonV1 C={C} bg={btn != 'Image' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                      setBtn('Image');
                    }} title="Image"></ButtonV1>
                    <ButtonV1 C={C} bg={btn != 'Icon' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
                      setBtn('Icon');
                    }} title="Icon" ></ButtonV1>

                    <ButtonV1 C={C} bg={btn != 'Giff' ? C.white : C.primaryLight} v={"empty"} onPress={() => {
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
                        <Pressable style={{ width: '50%', }} onPress={() => { setImgSrc(item); setVisibile(false) }} >
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
                <View style={{ flexGrow: 0, flexShrink: 0, flexDirection: 'row', gap: S.s }}>
                  <ButtonV1 C={C} f={-1} onPress={() => { setShowCamera(true) }} title="Camera"></ButtonV1>
                  <ButtonV1 C={C} f={-1} onPress={async () => {
                    let result = await ImagePicker.launchImageLibraryAsync({
                      mediaTypes: ImagePicker.MediaTypeOptions.All,
                      allowsEditing: true,
                      // aspect: [4, 3],
                      quality: 1,
                      // base64: true,
                    });

                    // console.log(result);

                    if (!result.canceled) {
                      console.log(result.assets[0].uri);
                      setImgSrc(result.assets[0].uri); setVisibile(false)
                      // Moj(result.assets[0].base64, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzNDk4MjY4LCJpYXQiOjE2ODIyMDIyNjgsImp0aSI6IjhlZWY2NWNkMzNhMjQ4MmM4ZGIxZjRmZDJhNGQ4NWYxIiwidXNlcl9pZCI6MiwiZW1haWwiOiJ0ZXN0QHRlc3QxLmNvbSJ9.-A994XOuS0Y7mTW7eEmoewc2d_--frSDorMbnnfMEas')
                    }
                  }} title="Galery"></ButtonV1>
                  <ButtonV1 C={C} f={-1} onPress={() => { setVisibile(false) }} title="Close"></ButtonV1>
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
    alignSelf: 'center',
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