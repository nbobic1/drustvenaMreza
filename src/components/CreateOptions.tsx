import React, { useState } from 'react'
import { Keyboard, Text, View, StyleSheet, Modal, Pressable, KeyboardAvoidingView } from 'react-native'
import FastImage from 'react-native-fast-image';
import { sendMoviesFromApiAsync } from '../utils/ApiCalls';
import { C, S } from '../utils/Consts';
import { PostElement, PostElementType, TextElement } from '../utils/DataTypes';
import ButtonV1 from './BasicComponents/ButtonV1';
import InputV1 from './BasicComponents/InputV1';
import Row from './BasicComponents/Row';
import ImageSearcher from './ImageSearcher';


type Props = {
  setReorderEnabled: (a: boolean) => void;
  setDeleteEnabled: (a: boolean) => void;
  DATA: PostElement[];
  setDATA: (a: PostElement[]) => void;
};

const CreateOptionns = ({ DATA, setDATA, setDeleteEnabled, setReorderEnabled }: Props) => {
  const [visible, setVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  const [pickerVisible, setPickerVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  return (
    <View style={styles.root}>
      <Row bC={C.primary} bW={2} bR={S.m} w={'93%'}>
        <ButtonV1 onPress={() => { setReorderEnabled(false); setDeleteEnabled(true) }} title="Delete"></ButtonV1>
        <ButtonV1 onPress={() => {
          Keyboard.dismiss(); setSaveVisible(true);
          setReorderEnabled(false); setDeleteEnabled(false);
        }} title="Save"></ButtonV1>
        <ButtonV1 onPress={() => {
          setVisible(true); setReorderEnabled(false);
          setDeleteEnabled(false)
        }} title="Add"></ButtonV1>
        <ButtonV1 onPress={() => { setReorderEnabled(true); setDeleteEnabled(false) }} title="Reorder"></ButtonV1>
      </Row>
      <Row bg={C.primary} g={-1} px={-1} py={-1} >
        <View style={{ height: 15, borderTopRightRadius: 50, flex: 5, backgroundColor: '#ffffff' }}>

        </View>

        <View style={{ flex: 3, height: 15, borderTopStartRadius: 50, backgroundColor: 'white' }}>

        </View>
      </Row>
      <Modal transparent={true} visible={visible} >
        <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
          <View style={styles.modalView}>
            <Text style={{ alignSelf: 'center' }}>Which item would you like to add?</Text>
            <Row py={-1} >
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.ImageElement }]); }} title="Image"></ButtonV1>
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.VideoElement }]); }} title="Vindexeo"></ButtonV1>
            </Row>
            <Row py={-1}>
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: "", type: PostElementType.TextQElement }]); }} title="Text"></ButtonV1>
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.VideoElement }]); }} title="Giff"></ButtonV1>
            </Row>
            <Row py={-1} >
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: true, type: PostElementType.YesNoQElement }]); }} title="Yes/No question"></ButtonV1>
              <ButtonV1 onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: "", type: PostElementType.TextQElement }]); }} title="Text question"></ButtonV1>
            </Row>
            <ButtonV1 w={'50%'} onPress={() => { setVisible(false); }} title="Close"></ButtonV1>

          </View>
        </View>
      </Modal >
      <Modal transparent={true} visible={saveVisible} >
        <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
          <View style={[styles.modalView, { width: 200, padding: 20 }]}>
            <Text style={{ alignSelf: 'center' }}>Fill post data to save it.</Text>
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
            <InputV1 onChangeText={(text) => { setTitle(text) }} ph='Title'></InputV1>
            <ButtonV1 onPress={() => { setPickerVisible(true) }} title="Add cover image" ></ButtonV1>

            <Row px={-1}>
              <ButtonV1 onPress={() => {
                if (!Keyboard.isVisible()) {
                  setSaveVisible(false)
                  console.log("title=", title)
                  console.log("saveam==========", JSON.stringify(DATA));
                  sendMoviesFromApiAsync({ imgSrc: imgSrc, text: title, items: JSON.stringify(DATA) })
                  setDATA([{ index: 0, type: PostElementType.TextElement, text: "" } as TextElement])
                }

              }}
                title="Save" ></ButtonV1>
              <ButtonV1 onPress={() => { setSaveVisible(false); }} title="Close" ></ButtonV1>
            </Row>
          </View>
        </View>
      </Modal>
      <ImageSearcher setImgSrc={setImgSrc} visible={pickerVisible} setVisibile={setPickerVisible}></ImageSearcher>

    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: C.white,
    paddingTop: 10,
  },
  image: {
    height: 150,
    width: 150
  },
  modalView: {//popup
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    padding: 10,
    bottom: 200,
    gap: 12,
    alignSelf: 'center',
    elevation: 5,
    width: 350
  },
});

export default CreateOptionns;