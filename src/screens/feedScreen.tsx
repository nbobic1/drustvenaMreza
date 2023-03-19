import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Modal, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Post from '../components/post';
import DropDownPicker from 'react-native-dropdown-picker'
import { DataItem } from '../utils/DataTypes';

import { getMoviesFromApiAsync, sendMoviesFromApiAsync } from '../utils/ApiCalls';
import PostList from '../components/PostList';
const FeedScreen = () => {



  const [visible, setVisible] = useState(false);
  const [cols, setCols] = useState(1)

  const [selectedItem, setSelectedItem] = useState<string>('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState([]);
  const [items, setItems] = useState([
    { label: 'Autizak', value: 'spain' },
    // {label: 'Madrid', value: 'madrid', parent: 'spain'},
    { label: 'Disleksija', value: 'barcelona' },

    { label: 'Diskalkulija', value: 'italy' },
    { label: 'Disgrafija', value: 'rome' },

  ]);


  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(0);
  const [items1, setItems1] = useState([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
  ]);

  console.log("citav ffeed")
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <View style={styles.top}>
          <TextInput placeholder='Search...' style={{ flex: 1, backgroundColor: 'green' }}></TextInput>
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
          <View style={{ flex: 1 }}>
            <DropDownPicker
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              style={{ position: 'relative', zIndex: 0 }}
              placeholder="Layout"
              theme="DARK"
              mode="BADGE"
              onChangeValue={(item) => { setCols(item); }}
              badgeDotColors={["#e76f51", "#00b4d8", "#e9c46a", "#e76f51", "#8ac926", "#00b4d8", "#e9c46a"]}
            />
          </View>
        </View>
        <View
          style={{height:'85%' }}>
          <PostList cols={cols}></PostList>
        </View>
        <View style={{ height: '5%',backgroundColor:'yellow' }}>
          <Button onPress={() => {
            console.log("\nuseEffect\n")
            var a = getMoviesFromApiAsync();
            console.log(a);
            console.log("--------------------------------kraj")
          }} title="popup"></Button>
        </View>
        <View style={{ height: '5%',backgroundColor:'yellow' }}>
          <Button onPress={() => {
            console.log("\nuseEffect\n")
            var a = sendMoviesFromApiAsync();
            console.log(a);
            console.log("--------------------------------kraj")
          }} title="psend"></Button>
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
    height:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    height:'5%',
    flexDirection: 'row',
    zIndex: 100
  },
  feedView: {
    backgroundColor: '#f0f',
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