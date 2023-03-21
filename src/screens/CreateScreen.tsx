

import React, { useState } from 'react';
import { Pressable, Modal, Button, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import {PostElement,VideoElement,ImageElement,PostElementType ,TextQElement,YesNoQElement} from "../utils/DataTypes"
import { getPexelImages, sendMoviesFromApiAsync } from '../utils/ApiCalls';
import PostElementPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/PostElementPlaceholder';
import ImageSearcher from '../components/ImageSearcher';

const CreateScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const [visible, setVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [saveVisible, setSaveVisible] = useState(false);
  const [pickerVisible, setPickerVisibile] = useState(false);
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const fun = (text: string) => { setEmail(text); };
  const [imgSrc, setImgSrc] = useState("");

  const [DATA, setDATA] = useState<PostElement[]>([{index:-1,url:""}as VideoElement]);
console.log("createScreen->rerender")
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
              ({ item, drag, isActive}) => {

                return (<ScaleDecorator>
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={drag}
                    disabled={isActive}
                  >
                    <PostElementPlaceholder removeID={removeID} deleteEnabled={deleteEnabled} reorderEnabled={reorderEnabled} element={item}></PostElementPlaceholder>
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
          <Pressable style={styles.btn} onPress={()=>{setSaveVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }} >
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
      <Modal transparent={true} visible={saveVisible} >
        <View style={styles.modalView}>
          <Text>Fill post data to save it.</Text>
          <TextInput onChangeText={(text)=>{setTitle(text)}} placeholder='Title'></TextInput>
          <Button title="Add cover image" onPress={() => {setPickerVisibile(true)}} />
          <Button onPress={() => {
            console.log(title)
            console.log("saveam==========",JSON.stringify(DATA));
            sendMoviesFromApiAsync({imgSrc:imgSrc,text:title,items:JSON.stringify(DATA)})
            setSaveVisible(false)
            setDATA([{index:-1,url:"",type:PostElementType.ImageElement}])
          
             }} title="Save"></Button>
             
          <Button title="Close" onPress={() => {setSaveVisible(false);}} />
        </View>
      </Modal>
      <ImageSearcher setImgSrc={setImgSrc} visible={pickerVisible} setVisibile={setPickerVisibile}></ImageSearcher>
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