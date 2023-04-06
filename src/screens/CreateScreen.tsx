

import React, { useState } from 'react';
import { Pressable, Modal, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
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