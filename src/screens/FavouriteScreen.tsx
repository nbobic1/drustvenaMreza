

import React, { useState } from 'react';

import FastImage from 'react-native-fast-image'

import { Modal, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import Posts from '../components/Post/Post';
import { useNavigation } from '@react-navigation/native';
import PostElementView from '../components/BasicComponents/PostElementView';
import { C, S } from '../utils/Consts';
import InputV1 from '../components/BasicComponents/InputV1';
const FavouriteScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.feedView}>

        <ScrollView>
          <FastImage
            style={{ height: 200, width: 200 }}
            source={{
              uri: 'https://images.pexels.com/photos/1835008/pexels-photo-1835008.jpeg?auto=compress&cs=tinysrgb&h=130',
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <PostElementView mx={S.l}><Text>dsfadf</Text><Text>2aaaaa</Text></PostElementView>
          <InputV1 ></InputV1>
        </ScrollView>
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: C.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  feedView: {
    backgroundColor: 'seashell',
    height: '93%',
    width: '100%'
  },
  modalView: {
    backgroundColor: C.pop,
    borderRadius: 10,
    position: 'absolute',
    padding: 20,
    bottom: 100,
    alignSelf: 'center',
    elevation: 5,
  },
});
export default FavouriteScreen;