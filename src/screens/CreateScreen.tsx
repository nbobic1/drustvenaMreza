

import React, { useState } from 'react';
import { Pressable, Modal, Button, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import YesNoQPlaceholder from '../components/YesNoQPlaceholder';
import TextQPlaceholder from '../components/TextQPlaceholder';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { dty } from "../utils/DataTypes"

const CreateScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const [visible, setVisible] = useState(false);
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const fun = (text: string) => { setEmail(text); };

  const [DATA, setDATA] = useState<dty[]>([{ type: -1, id: -1, text_questions_url: "" ,answer:""}]);
  const renderItem = (item: dty) => {
    if (item.type == 2)
      <TextInput placeholder="press to enter your text" value={item.text_questions_url}></TextInput>
    else if (item.type == 0)
      return (<ImagePlaceholder deleteEnabled={deleteEnabled} id={item.id} removeID={removeID}></ImagePlaceholder>);
    else if (item.type == 4)
      return (<YesNoQPlaceholder value={item.text_questions_url} reorderEnabled={reorderEnabled} id={item.id} removeID={removeID} deleteEnabled={deleteEnabled} ></YesNoQPlaceholder>);
    else if (item.type == 5)
      return (<TextQPlaceholder value={item.text_questions_url} reorderEnabled={reorderEnabled} id={item.id} removeID={removeID} deleteEnabled={deleteEnabled} text={email}></TextQPlaceholder>);
    else
      return (<Text>ldsafdlja</Text>);
  };
  const removeID = (id: number) => { setDATA(DATA.filter(function (a: dty) { return a.id != id })) };
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'seashell' }}>
          <DraggableFlatList
            data={DATA}
            onDragEnd={({ data }) => setDATA(data)}
            keyExtractor={(item) => item.id.toString()}
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
          <Pressable style={styles.btn}>
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
          <Button onPress={() => { setDATA([...DATA, { type: 0, id: DATA[DATA.length - 1].id + 1, text_questions_url: "" ,answer:""}]); }} title="Image"></Button>
          <Button onPress={() => { setDATA([...DATA, { type: 1, id: DATA[DATA.length - 1].id + 1, text_questions_url: "",answer:"" }]); }} title="Video"></Button>
          <Button onPress={() => { setDATA([...DATA, { type: 2, id: DATA[DATA.length - 1].id + 1, text_questions_url: "",answer:"" }]); }} title="Text"></Button>
          <Button onPress={() => { setDATA([...DATA, { type: 3, id: DATA[DATA.length - 1].id + 1, text_questions_url: "",answer:"" }]); }} title="Giff"></Button>
          <Button onPress={() => { setDATA([...DATA, { type: 4, id: DATA[DATA.length - 1].id + 1, text_questions_url: "",answer:"" }]); }} title="Yes/No question"></Button>
          <Button onPress={() => { setDATA([...DATA, { type: 5, id: DATA[DATA.length - 1].id + 1, text_questions_url: "" ,answer:""}]); }} title="Text question"></Button>
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