

import React, { useState } from 'react';
import { Pressable, Modal, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { PostElement, VideoElement, ImageElement, PostElementType, TextQElement, YesNoQElement, TextElement } from "../utils/DataTypes"
import PostElementPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/PostElementPlaceholder';
import CreateOptionns from '../components/CreateOptions';
import PostElementView from '../components/BasicComponents/PostElementView';
import { C, S } from '../utils/Consts';
import FontPicker from '../components/FontPicker';
import { CreateContent, GetPosts, MakePosts } from '../utils/ApiCalls';
//import * as ImagePicker from 'react-native-image-picker';

import * as SecureStore from 'expo-secure-store';
import * as ImagePicker from 'expo-image-picker';

const CreateScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const [textSt, setTextSt] = useState(null);
  const fun = (text: string) => { setEmail(text); };

  const [DATA, setDATA] = useState<PostElement[]>([{ index: 0, type: PostElementType.TextElement, text: "", style: { fontWeight: '500', textDecorationLine: 'none', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } } as TextElement]);
  console.log("createScreen->rerender")
  const removeID = (index: number) => { setDATA(DATA.filter(function (a: PostElement) { return a.index != index })) };
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <Button title='sadfsaf' onPress={async () => {
          const options = {
            title: 'Select Image',
            storageOptions: {
              includeBase64: true,
              mediaType: 'photo',
            },
          };
          var token = await SecureStore.getItemAsync('token')
          GetPosts(token).then((results) => {
            console.log(JSON.stringify(results));
          })
          /*
          ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
  
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              // You can display the selected image using the following:
              const source = { uri: response.uri };
              console.log('uspjelo=', JSON.stringify(response))
              // Do something with the selected image source
            }
          });
          */

          /*   let result = await ImagePicker.launchImageLibraryAsync({
               mediaTypes: ImagePicker.MediaTypeOptions.All,
               allowsEditing: true,
               aspect: [4, 3],
               quality: 1,
               base64: true,
             });
   
             // console.log(result);
   
             if (!result.canceled) {
               console.log(result.assets[0].uri);
               Moj(result.assets[0].base64, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzNDk4MjY4LCJpYXQiOjE2ODIyMDIyNjgsImp0aSI6IjhlZWY2NWNkMzNhMjQ4MmM4ZGIxZjRmZDJhNGQ4NWYxIiwidXNlcl9pZCI6MiwiZW1haWwiOiJ0ZXN0QHRlc3QxLmNvbSJ9.-A994XOuS0Y7mTW7eEmoewc2d_--frSDorMbnnfMEas')
             }
   */
          // CreateContent(await SecureStore.getItemAsync('token'))
          MakePosts(await SecureStore.getItemAsync('token'), { text: 'post neki', imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/65/Blue_morpho_butterfly.jpg" })
        }}></Button>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: C.bg, paddingVertical: 10 }}>
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
                      <PostElementView mx={30} >
                        <PostElementPlaceholder setVisible={setTextSt} removeID={removeID} deleteEnabled={deleteEnabled} reorderEnabled={reorderEnabled} element={item}></PostElementPlaceholder>
                      </PostElementView>
                    </View>
                  </TouchableOpacity>
                </ScaleDecorator>);
              }
            }
          />
        </GestureHandlerRootView>
        <CreateOptionns DATA={DATA} setDATA={setDATA} setReorderEnabled={setReorderEnabled} setDeleteEnabled={setDeleteEnabled}></CreateOptionns>
      </View>
      <FontPicker textSt={textSt != null ? textSt.style : null} setTextSt={setTextSt}></FontPicker>
    </View>
  );
};







const styles = StyleSheet.create({
  container: {
    backgroundColor: C.bg,
  },

  feedView: {
    backgroundColor: C.bg,
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

});
export default CreateScreen;