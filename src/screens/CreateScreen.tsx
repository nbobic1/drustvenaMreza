

import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Pressable, Modal, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Button } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
} from "react-native-draggable-flatlist";
import { PostElement, VideoElement, ImageElement, PostElementType, TextQElement, YesNoQElement, TextElement } from "../utils/DataTypes"
import PostElementPlaceholder from '../components/Post/PostDetails/PostElementsPlaceholder/PostElementPlaceholder';
import CreateOptionns from '../components/CreateOptions';
import PostElementView from '../components/BasicComponents/PostElementView';
import { S } from '../utils/Consts';
import FontPicker from '../components/FontPicker';
//import * as ImagePicker from 'react-native-image-picker';

import * as SecureStore from 'expo-secure-store';
import MyCamera from '../components/BasicComponents/Camara';
import { useNavigation } from '@react-navigation/native';
import { getTokenForIcons } from '../utils/ApiCalls';
type Props = {
  dataExtra?: PostElement[];
};
const CreateScreen = ({ navigation, route, C }) => {

  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const [textSt, setTextSt] = useState(null)
  var dataExtra = undefined
  try {
    dataExtra = route ? JSON.parse(JSON.stringify(route.params.items)) : undefined

  }
  catch (err) {
  }
  console.log(JSON.stringify(dataExtra))
  const [DATA, setDATA] = useState<PostElement[]>(dataExtra ? dataExtra :
    [{ index: 0, type: PostElementType.TextElement, text: "", style: { fontWeight: '500', textDecorationLine: 'none', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } } as TextElement]);
  //const navigation = useNavigation()
  const removeID = (index: number) => { setDATA(DATA.filter(function (a: PostElement) { return a.index != index })) };
  useEffect(() => {
    const unsubscribe = navigation.addListener('blur', (e: any) => {
      // Prevent default behavior of leaving the screen
      console.log('unsubscribe')
      //e.preventDefault();

      // Perform your custom actions or show a confirmation prompt
      // For example, you can show an alert and proceed with navigation based on the user's choice
      setDATA([{ index: 0, type: PostElementType.TextElement, text: "", style: { fontWeight: '500', textDecorationLine: 'none', textAlign: 'center', fontSize: 18, fontFamily: 'normal' } } as TextElement])
      //  navigation.dispatch(e.data.action)
      // navigation.navigate('NextScreen')
    });

    return unsubscribe;
  }, [navigation]);

  console.log('dsfdsfdss=======a3=', JSON.stringify(dataExtra))
  const styles = StyleSheet.create({
    container: {
      backgroundColor: C.bg,
      height: '100%',
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
  // var navigation = useNavigation();
  return (

    <View style={styles.container}>
      <View style={styles.feedView}>

        <GestureHandlerRootView style={{ flex: 1, backgroundColor: C.bg, paddingVertical: 10 }}>
          <DraggableFlatList
            data={DATA}
            onDragEnd={({ data }) => setDATA(data)}
            keyExtractor={(item) => item.index.toString()
            }
            renderItem={
              ({ item, drag, isActive }) => {
                return (<ScaleDecorator>
                  <TouchableOpacity
                    activeOpacity={1}
                    onLongPress={drag}
                    disabled={isActive}
                  >
                    <View>
                      <PostElementView C={C} mx={30} >
                        <PostElementPlaceholder C={C} setVisible={setTextSt} removeID={removeID} deleteEnabled={deleteEnabled} reorderEnabled={reorderEnabled} element={item}></PostElementPlaceholder>
                      </PostElementView>
                    </View>
                  </TouchableOpacity>
                </ScaleDecorator>);
              }
            }
          />
        </GestureHandlerRootView>
        <CreateOptionns C={C} DATA={DATA} setDATA={setDATA} setReorderEnabled={setReorderEnabled} setDeleteEnabled={setDeleteEnabled}></CreateOptionns>
      </View>
      <FontPicker C={C} textSt={textSt != null ? textSt.style : null} setTextSt={setTextSt}></FontPicker>

    </View>
  );
};






export default CreateScreen;