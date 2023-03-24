

import React, { useState } from 'react';
import { Pressable, Modal, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { PostElement, VideoElement, ImageElement, PostElementType, TextQElement, YesNoQElement } from "../utils/DataTypes"
import { getPexelImages, sendMoviesFromApiAsync } from '../utils/ApiCalls';
import PostElementPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/PostElementPlaceholder';
import ImageSearcher from '../components/ImageSearcher';
import CreateOptionns from '../components/CreateOptions';

const CreateScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const [title, setTitle] = useState("");
  const [pickerVisible, setPickerVisibile] = useState(false);
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const fun = (text: string) => { setEmail(text); };
  const [imgSrc, setImgSrc] = useState("");

  const [DATA, setDATA] = useState<PostElement[]>([{ index: -1, url: "" } as VideoElement]);
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
              ({ item, drag, isActive }) => {

                return (<ScaleDecorator>
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={drag}
                    disabled={isActive}
                  >

                    <View>
                      <PostElementPlaceholder saveE={false
                        //</Box>saveVisible
                      } removeID={removeID} deleteEnabled={deleteEnabled} reorderEnabled={reorderEnabled} element={item}></PostElementPlaceholder>
                    </View>
                  </TouchableOpacity>
                </ScaleDecorator>);

              }
            }
          />
        </GestureHandlerRootView>
        <CreateOptionns DATA={DATA} setDATA={setDATA} setReorderEnabled={setReorderEnabled} setDeleteEnabled={setDeleteEnabled}></CreateOptionns>
      </View>

    </View>
  );
};
/*

     

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
*/


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