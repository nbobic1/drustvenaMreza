

import React, { useState,useRef } from 'react';

import {FlatList,Modal,Button,ScrollView,StyleSheet, Text, View } from 'react-native';
import Post from '../components/post';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
const FeedScreen = ()=> {   
  type DataItem = { text: string;
  imgSrc: string;
};

  const flatListRef = useRef<FlatList<DataItem>>(null);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };
  const [visible, setVisible] = useState(false);
  const [scrollE, setScrollE] = useState(true);
  const DATA:DataItem[]=[
    {
      text:"Polazak na fakultete",
      imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg'
    },
    {
      text:"Koristenje javnog prevoza",
      imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGmJdtlkEEO33ePZHLPVsODSNjPjKPUgnR1OSLalmxgMVhDQkSc4OnYfrgVlxCF_b6A4&usqp=CAU'
    },
    {
      text:"Izazovi velikog grada",
      imgSrc:'https://media.istockphoto.com/id/887494452/photo/abstract-night-cityscape-blue-light-filter-can-use-to-display-or-montage-on-product.jpg?b=1&s=170667a&w=0&k=20&c=eXcpdTTACaLxACjQamcZdBkFublurm_FUUlqhwJble0='
    },
    {
      text:"moja appp likacijaa",
      imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg'
    },
    {
      text:"moja appp likacijaa",
      imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg'
    },
    {
      text:"moja appp likacijaa",
      imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg'
    },
 ];
 const getItemIndex = (item: DataItem) => {
  const index = DATA.findIndex((dataItem) => dataItem.text === item.text);
  return index;
};
    return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <FlatList
        ref={flatListRef}
        scrollEnabled={scrollE}
        data={DATA}
        renderItem={({item}) =>{
          return (<Post setScrollE={setScrollE} text={item.text} imgSrc={item.imgSrc} refi={scrollToIndex} index={getItemIndex(item)}></Post>)}}
        
        />
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
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      },
    
    feedView:{
      backgroundColor:'#f0f',
      height: '93%',
      width: '100%'
    }
    ,navBar:{
      backgroundColor: '#fff',
      height: '7%',
      width: '100%',
      flexDirection: 'row',
     // flex: 1
    },
    navElement:{
  
      flexGrow: 1,
      textAlign: 'center',
      verticalAlign: 'middle',
    },
    img:{
        width: '100%',
        height: 200,
    },
    description:{
      textAlign: 'center',
      fontSize:20
    }, 
    modalContainer: {
     width: '30%',
      alignItems: 'center',
      justifyContent: 'center',
    
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
    modalView2: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#036',
  
    },
  });
  export default FeedScreen;