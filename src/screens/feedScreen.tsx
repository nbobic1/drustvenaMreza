import React, { useState } from 'react';
import { FlatList, Modal, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Post from '../components/Post/Post';
import DropDownPicker from 'react-native-dropdown-picker'

import PostList from '../components/PostList';
import { C } from '../utils/Consts';
import { onChange } from 'react-native-reanimated';
import InputV1 from '../components/BasicComponents/InputV1';
const FeedScreen = () => {

  const [visible, setVisible] = useState(false);
  const [cols, setCols] = useState(1)
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Autizak', value: 'spain' },
    // {label: 'Madrid', value: 'madrid', parent: 'spain'},
    { label: 'Disleksija', value: 'barcelona' },

    { label: 'Diskalkulija', value: 'italy' },
    { label: 'Disgrafija', value: 'rome' },

  ]);

  console.log("citav ffeed")

  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <View style={styles.top}>
          <InputV1 f={2} onChangeText={(text) => { console.log("subimta"); setSearchText(text) }} ph='Search...' />
          <View style={{ flex: 1 }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={{ position: 'relative', zIndex: 0 }}
              placeholder="Category (All)"
              theme="DARK"
              multiple={true}
              mode="BADGE"
              badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            />
          </View>
        </View>
        <View
          style={{ height: '93%' }}>
          <PostList searchText={searchText} cols={cols}></PostList>
        </View>
      </View>
      <Modal transparent={true} visible={visible} >
        <View style={styles.modalView}>
          <Text>This is a popup!</Text>
          <Button title="Close" onPress={() => setVisible(false)} />
        </View>
      </Modal>



    </View>
  );
};

//  <Text style={styles.navElement} onPress={()=>setVisible(true)} >popup</Text>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height: '7%',
    flexDirection: 'row',
    zIndex: 100,
  },
  feedView: {
    backgroundColor: C.bg,
    height: '100%',
    width: '100%',
  },

  img: {
    width: '100%',
    height: 200,
  },
  modalView: {
    backgroundColor: '#0f0',
    borderRadius: 10,
    position: 'absolute',
    padding: 20,
    bottom: 100,
    alignSelf: 'center',
    elevation: 5,
  },
});
export default FeedScreen;