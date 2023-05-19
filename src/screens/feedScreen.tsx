import React, { useEffect, useState } from 'react';
import { FlatList, Modal, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import PostList from '../components/PostList';
import { C } from '../utils/Consts';
import { onChange } from 'react-native-reanimated';
import InputV1 from '../components/BasicComponents/InputV1';
import { PostData } from '../utils/DataTypes';
import * as SecureStore from 'expo-secure-store';
import { GetPosts } from '../utils/ApiCalls';
const FeedScreen = ({ navigation, route }) => {
  const [visible, setVisible] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [DATA, setDATA] = useState<PostData[]>([]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', (e: any) => {
      // Prevent default behavior of leaving the screen
      console.log('unsubscribe')
      //e.preventDefault();

      // Perform your custom actions or show a confirmation prompt
      // For example, you can show an alert and proceed with navigation based on the user's choice
      SecureStore.getItemAsync('token').then(token => {
        GetPosts(token).then(res => {
          setDATA(res);
        })
        //  navigation.dispatch(e.data.action)
        // navigation.navigate('NextScreen')
      });
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <View style={styles.top}>
          <InputV1 f={2} v={1} search={() => { }} onChangeText={(text) => { console.log("subimta"); setSearchText(text) }} ph='Search...' />
        </View>
        <View
          style={{ height: '93%' }}>
          <PostList DATA={DATA} searchText={searchText} ></PostList>
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