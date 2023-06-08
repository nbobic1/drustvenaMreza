import React, { useState } from 'react'
import { Keyboard, Text, View, StyleSheet, Modal, } from 'react-native'
import FastImage from 'react-native-fast-image';
import { MakePosts, getTokenForIcons } from '../utils/ApiCalls';
import { S } from '../utils/Consts';
import { PostData, PostElement, PostElementType, TextElement } from '../utils/DataTypes';
import ButtonV1 from './BasicComponents/ButtonV1';
import InputV1 from './BasicComponents/InputV1';
import Row from './BasicComponents/Row';
import ImageSearcher from './ImageSearcher'
import * as SecureStore from 'expo-secure-store';;


type Props = {
  setReorderEnabled: (a: boolean) => void;
  setDeleteEnabled: (a: boolean) => void;
  DATA: PostElement[];
  C: any;
  setDATA: (a: PostElement[]) => void;
};

const CreateOptionns = ({ DATA, setDATA, setDeleteEnabled, setReorderEnabled, C }: Props) => {



  const styles = StyleSheet.create({
    root: {
      backgroundColor: C.white,
      paddingTop: 10,
    },
    image: {
      alignSelf: 'center',
      height: 150,
      width: 150
    },
    modalView: {//popup
      backgroundColor: C.white,
      borderRadius: 10,
      position: 'absolute',
      padding: 10,
      bottom: 200,
      paddingBottom: 23,
      gap: 12,
      alignSelf: 'center',
      elevation: 5,
      width: '80%'
    },
  });




  const [visible, setVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  return (
    <View style={styles.root}>
      <Row C={C} bC={C.primary} bW={2} bR={S.m} w={'93%'}>
        <ButtonV1 C={C} onPress={() => { setReorderEnabled(false); setDeleteEnabled(true) }} title="Delete"></ButtonV1>
        <ButtonV1 C={C} onPress={() => {
          Keyboard.dismiss(); setSaveVisible(true);
          setReorderEnabled(false); setDeleteEnabled(false);
        }} title="Save"></ButtonV1>
        <ButtonV1 C={C} onPress={() => {
          setVisible(true); setReorderEnabled(false);
          setDeleteEnabled(false)
        }} title="Add"></ButtonV1>
        <ButtonV1 C={C} onPress={() => { setReorderEnabled(true); setDeleteEnabled(false) }} title="Reorder"></ButtonV1>
      </Row>
      <Row C={C} bg={C.primary} g={-1} px={-1} py={-1} >
        <View style={{ height: 15, borderTopRightRadius: 50, flex: 3, backgroundColor: '#ffffff' }}>
        </View>
        <View style={{ flex: 3, height: 15, borderTopStartRadius: 50, backgroundColor: 'white' }}>
        </View>
      </Row>
      <Modal transparent={true} visible={visible} >
        <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
          <View style={styles.modalView}>
            <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 25, margin: 20 }}>Which item would you like to add?</Text>
            <Row C={C} py={-1}>
              <ButtonV1 C={C} onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.ImageElement }]); }} title="Media"></ButtonV1>
              <ButtonV1 C={C} onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, text: "", type: PostElementType.TextElement, style: { textDecorationLine: 'none', fontWeight: '500', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } }]); }} title="Text"></ButtonV1>
            </Row>
            <Row C={C} py={-1} >
              <ButtonV1 C={C} onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: true, type: PostElementType.YesNoQElement, style: { textDecorationLine: 'none', fontWeight: '500', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } }]); }} title="Yes/No question"></ButtonV1>
              <ButtonV1 C={C} onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: "", type: PostElementType.TextQElement, style: { textDecorationLine: 'none', fontWeight: '500', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } }]); }} title="Text question"></ButtonV1>
            </Row>
            <ButtonV1 C={C} w={'50%'} onPress={() => { setVisible(false); }} title="Close"></ButtonV1>
          </View>
        </View>
      </Modal >
      <Modal transparent={true} visible={saveVisible} >
        <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
          <View style={[styles.modalView, { padding: 20 }]}>
            <Text style={{ alignSelf: 'center', fontSize: 28 }}>Fill post data to save it.</Text>
            {imgSrc == "" ? <View></View> :
              <FastImage
                style={styles.image}
                source={{
                  uri: imgSrc,
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            }
            <InputV1 C={C} onChangeText={(text) => { setTitle(text) }} ph='Title'></InputV1>
            <ButtonV1 C={C} onPress={() => { setPickerVisible(true) }} title="Add cover image" ></ButtonV1>

            <Row C={C} px={-1}>
              <ButtonV1 C={C} onPress={() => {
                if (!Keyboard.isVisible()) {
                  setSaveVisible(false)
                  console.log("title=", title)
                  console.log("saveam==========", JSON.stringify(DATA));
                  //sendMoviesFromApiAsync({ imgSrc: imgSrc, text: title, items: JSON.stringify(DATA) })
                  SecureStore.getItemAsync('token').then((token) => {
                    MakePosts(token, { url: imgSrc, title: title, content: DATA } as PostData).then((data) => {
                      console.log('post maked=', data)
                    })

                  })
                  setDATA([{ index: 0, type: PostElementType.TextElement, text: "", style: { textDecorationLine: 'none', fontWeight: '500', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } } as TextElement])
                }

              }}
                title="Save" ></ButtonV1>
              <ButtonV1 C={C} onPress={() => { setSaveVisible(false); }} title="Close" ></ButtonV1>
            </Row>
          </View>
        </View>
      </Modal>
      <ImageSearcher C={C} setImgSrc={setImgSrc} visible={pickerVisible} setVisibile={setPickerVisible}></ImageSearcher>

    </View >
  );
};

export default CreateOptionns;