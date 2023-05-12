import React, { useState } from 'react';
import { FlatList, Modal, Button, StyleSheet, Text, TextInput, View } from 'react-native';

import PostList from '../components/PostList';
import { C } from '../utils/Consts';
import { onChange } from 'react-native-reanimated';
import InputV1 from '../components/BasicComponents/InputV1';
const FeedScreen = () => {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");


  console.log("citav ffeed")

  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <View style={styles.top}>
          <InputV1 f={2} v={1} search={() => { }} onChangeText={(text) => { console.log("subimta"); setSearchText(text) }} ph='Search...' />

        </View>
        <View
          style={{ height: '93%' }}>
          <PostList searchText={searchText} ></PostList>
        </View>
      </View>




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