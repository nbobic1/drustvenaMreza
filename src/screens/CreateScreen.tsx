

import React, { useState } from 'react';
import { Pressable, Modal, Button, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import YesNoQPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/Placeholders/YesNoQPlaceholder';
import TextQPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/Placeholders/TextQPlaceholder';
import ImagePlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/Placeholders/ImagePlaceholder';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import {PostElement,VideoElement,ImageElement,PostElementType ,TextQElement,YesNoQElement} from "../utils/DataTypes"
import { sendMoviesFromApiAsync } from '../utils/ApiCalls';

const CreateScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const [visible, setVisible] = useState(false);
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const fun = (text: string) => { setEmail(text); };

  const [DATA, setDATA] = useState<PostElement[]>([{index:-1,url:""}as VideoElement]);
  const renderItem = (item: PostElement) => {
    if (item.type== PostElementType.VideoElement)
      <TextInput placeholder="press to enter your text" value={item.url}></TextInput>
    else if ( item.type== PostElementType.ImageElement)
      return (<ImagePlaceholder deleteEnabled={deleteEnabled} id={item.index} removeID={removeID}></ImagePlaceholder>);
    else if (item.type== PostElementType.YesNoQElement)
      return (<YesNoQPlaceholder value={item.question} reorderEnabled={reorderEnabled} id={item.index} removeID={removeID} deleteEnabled={deleteEnabled} ></YesNoQPlaceholder>);
    else if (item.type== PostElementType.TextQElement)
      return (<TextQPlaceholder value={item.question} reorderEnabled={reorderEnabled} id={item.index} removeID={removeID} deleteEnabled={deleteEnabled} text={email}></TextQPlaceholder>);
    else
      return (<Text>ldsafdlja</Text>);
  };
  const removeID = (index: number) => { setDATA(DATA.filter(function (a: PostElement) { return a.index != index })) };
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'seashell' }}>
          <DraggableFlatList
            data={DATA}
            onDragEnd={({ data }) => setDATA(data)}
            keyExtractor={(item) => item.index.toString()}
            renderItem={
              ({ item, drag, isActive }) => {

                return (<ScaleDecorator>
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={drag}
                    disabled={isActive}
                  >
                    {renderItem(item)}
                  </TouchableOpacity>
                </ScaleDecorator>);

              }
            }
          />
        </GestureHandlerRootView>
        <View style={styles.optionBtnRow}>
          <Pressable style={styles.btn} onPress={() => { setEmail("proslo kory dete123"); setReorderEnabled(false); setDeleteEnabled(true) }}>
            <Text style={styles.btnTxt}>Delete</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={()=>{sendMoviesFromApiAsync({index:1,imgSrc:"url neki",text:"ovo jen eki tilte",items:JSON.stringify(DATA)}) }} >
            <Text style={styles.btnTxt}>Save</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => { setVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }} >
            <Text style={styles.btnTxt}>Add</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => { setReorderEnabled(true); setDeleteEnabled(false) }} >
            <Text style={styles.btnTxt}>Reorder</Text>
          </Pressable>
        </View>
      </View>
      <Modal transparent={true} visible={visible} >
        <View style={styles.modalView}>
          <Text>This is a popup!</Text>
          <Button onPress={() => { setDATA([...DATA,{index: DATA[DATA.length - 1].index + 1,  url:"" ,type:PostElementType.ImageElement}]); }} title="Image"></Button>
          <Button onPress={() => { setDATA([...DATA, {index:DATA[DATA.length - 1].index + 1, url: "",type:PostElementType.VideoElement }]); }} title="Vindexeo"></Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1,question: "",answer:"",type:PostElementType.TextQElement}]); }} title="Text"></Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1,url:"" ,type:PostElementType.VideoElement} ]); }} title="Giff"></Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1, question: "",answer:false ,type:PostElementType.YesNoQElement}]); }} title="Yes/No question"></Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1, question:"" ,answer:"",type:PostElementType.TextQElement}]); }} title="Text question"></Button>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  feedView: {
    backgroundColor: '#f0f',
    height: '100%',
    width: '100%'
  },

  optionBtnRow:
  {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    backgroundColor: 'blue',
    color: 'white',
    borderWidth: 3,
    borderColor: 'yellow',
    height: 40,

  },
  btnTxt: {
    verticalAlign: 'middle',
    color: 'white',
    height: '100%',
    textAlign: 'center',
  },
  modalView: {//popup
    backgroundColor: '#0f0',
    borderRadius: 10,
    position: 'absolute',
    padding: 20,
    bottom: 100,
    alignSelf: 'center',
    elevation: 5,
    rowGap: 10,
  },
});
export default CreateScreen;