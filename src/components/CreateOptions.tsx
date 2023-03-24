import React, { useState } from 'react'
import { Text, View, StyleSheet, Modal, Pressable } from 'react-native'
import { PostElement, PostElementType } from '../utils/DataTypes';
import Button from './BasicComponents/ButtonV1';
import Row from './BasicComponents/Row';


type Props = {
  setReorderEnabled: (a: boolean) => void;
  setDeleteEnabled: (a: boolean) => void;
  DATA: PostElement[];
  setDATA: (a: PostElement[]) => void;
};


const CreateOptionns = ({ DATA, setDATA, setDeleteEnabled, setReorderEnabled }: Props) => {
  const [visible, setVisible] = useState(false);
  const [saveVisible, setSaveVisible] = useState(false);
  return (
    <View style={styles.root}>
      <Row >
        <Button onPress={() => { setReorderEnabled(false); setDeleteEnabled(true) }} title="Delete"></Button>
        <Button onPress={() => { setSaveVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }} title="Save"></Button>
        <Button onPress={() => { setVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }} title="Add"></Button>
        <Button onPress={() => { setReorderEnabled(true); setDeleteEnabled(false) }} title="Reorder"></Button>
      </Row>
      <Modal transparent={true} visible={visible} >
        <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
          <View style={styles.modalView}>
            <Text>This is a popup!</Text>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.ImageElement }]); }} title="Image"></Button>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.VideoElement }]); }} title="Vindexeo"></Button>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: "", type: PostElementType.TextQElement }]); }} title="Text"></Button>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, url: "", type: PostElementType.VideoElement }]); }} title="Giff"></Button>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: false, type: PostElementType.YesNoQElement }]); }} title="Yes/No question"></Button>
            <Button onPress={() => { setDATA([...DATA, { index: DATA[DATA.length - 1].index + 1, question: "", answer: "", type: PostElementType.TextQElement }]); }} title="Text question"></Button>

            <Button onPress={() => { setVisible(false); }} title="Close"></Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
  }, modalView: {//popup
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    padding: 20,
    bottom: 100,
    alignSelf: 'center',
    elevation: 5,
    rowGap: 10,
  },
});

export default CreateOptionns;