

import React, { useState } from 'react';
import { Pressable, Modal,  ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import {PostElement,VideoElement,ImageElement,PostElementType ,TextQElement,YesNoQElement} from "../utils/DataTypes"
import { getPexelImages, sendMoviesFromApiAsync } from '../utils/ApiCalls';
import PostElementPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/PostElementPlaceholder';
import ImageSearcher from '../components/ImageSearcher';
import { Button,Box, Flex } from 'native-base';

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
                    
         <Box m="2" borderRadius="lg" borderColor="amber.500" borderWidth={2}> 
                    <PostElementPlaceholder saveE={saveVisible} removeID={removeID} deleteEnabled={deleteEnabled} reorderEnabled={reorderEnabled} element={item}></PostElementPlaceholder>
                  </Box>
                  </TouchableOpacity>
                </ScaleDecorator>);

              }
            }
          />
        </GestureHandlerRootView>
        <Flex direction='row' justify='space-around' bgColor="coolGray.500">
          <Button  _text={{color: "black",fontSize:18}} my="3" w="23%" bgColor="amber.500" onPress={() => { setEmail("proslo kory dete123"); setReorderEnabled(false); setDeleteEnabled(true) }}>Delete</Button>
          <Button  _text={{color: "black",fontSize:18}} my="3" w="23%" bgColor="amber.500" onPress={()=>{setSaveVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }}>Save</Button>
          <Button  _text={{color: "black",fontSize:18}} my="3" w="23%" bgColor="amber.500" onPress={() => { setVisible(true); setReorderEnabled(false); setDeleteEnabled(false) }}>Add</Button>
          <Button  _text={{color: "black",fontSize:18}} my="3" w="23%" bgColor="amber.500" onPress={() => { setReorderEnabled(true); setDeleteEnabled(false) }} >Reorder</Button>
        </Flex>
      </View>
      <Modal transparent={true} visible={visible} >
<View style={{width:'100%',height:'100%',backgroundColor:'#00000080'}}>
        <View style={styles.modalView}>
        <Text>This is a popup!</Text>
        <Button onPress={() => { setDATA([...DATA,{index: DATA[DATA.length - 1].index + 1,  url:"" ,type:PostElementType.ImageElement}]); }} >Image</Button>
          <Button onPress={() => { setDATA([...DATA, {index:DATA[DATA.length - 1].index + 1, url: "",type:PostElementType.VideoElement }]); }} >Vindexeo</Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1,question: "",answer:"",type:PostElementType.TextQElement}]); }} >Text</Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1,url:"" ,type:PostElementType.VideoElement} ]); }} >Giff</Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1, question: "",answer:false ,type:PostElementType.YesNoQElement}]); }} >Yes/No question</Button>
          <Button onPress={() => { setDATA([...DATA, {index: DATA[DATA.length - 1].index + 1, question:"" ,answer:"",type:PostElementType.TextQElement}]); }} >Text question</Button>
          <Button  onPress={() => setVisible(false)} >Close</Button>
        </View>
        </View>
      </Modal>
      <Modal transparent={true} visible={saveVisible} >
        
<View style={{width:'100%',height:'100%',backgroundColor:'#00000080'}}>
        <View style={styles.modalView}>
          <Text>Fill post data to save it.</Text>
          <TextInput onChangeText={(text)=>{setTitle(text)}} placeholder='Title'></TextInput>
          <Button onPress={() => {setPickerVisibile(true)}} >Add cover image</Button>
          <Button onPress={() => {
            console.log(title)
            console.log("saveam==========",JSON.stringify(DATA));
            sendMoviesFromApiAsync({imgSrc:imgSrc,text:title,items:JSON.stringify(DATA)})
            setSaveVisible(false)
            setDATA([{index:-1,url:"",type:PostElementType.ImageElement}])
          
             }} >Save</Button>
             
          <Button  onPress={() => {setSaveVisible(false);}} >Close</Button>
        </View>
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
export default CreateScreen;