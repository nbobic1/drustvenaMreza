//console.log("slikeeeeeeeeeeeeeeeee=", getPexelImages('dog'))

import React, { useState } from 'react'
import  {Pressable,FlatList,Button,TextInput,Modal,View,Text,StyleSheet} from 'react-native'
import { getPexelImages } from '../utils/ApiCalls';
import FastImage from 'react-native-fast-image'


type Props = {
visible: boolean;
setVisibile: (ard:boolean) => void;
setImgSrc:( a:string)=>void;
};


const ImageSearcher =({visible,setVisibile,setImgSrc}:Props)=>{
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState("");
    console.log("image=====",images)
return (
    <Modal transparent={true} visible={visible} >
    <View style={styles.modalView}>
      <Text>Search and pick an image.</Text>
        <TextInput onChangeText={text=>setQuery(text)} placeholder="Search..."  ></TextInput>
        <Button onPress={()=>{getPexelImages(query,setImages) }} title="Search"></Button>
        <FlatList
     //   keyExtracotr={(key)=>{return key}}
     style={{ backgroundColor:'red',height:500,width:300}}
        numColumns={3}
        data={images}
        renderItem={({item})=>{return (
        <Pressable onPress={()=>{setImgSrc(item);setVisibile(false) }} >
             <FastImage
            style={styles.image}
            source={{
              uri: item,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          </Pressable>
          )}}
        />
        <Button onPress={()=>{setVisibile(false) }} title="close"></Button>
       
    </View>
  </Modal>
);
};

const styles = StyleSheet.create({
    image:{
        height:150,
        width:150
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

export default ImageSearcher;