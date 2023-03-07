

import React, { useState } from 'react';

import {Pressable,Modal,Button,ScrollView,StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Post from '../components/post';
import InputWithLable from '../components/inputWithLable'
import YesNoQPlaceholder from '../components/YesNoQPlaceholder';
import TextQPlaceholder from '../components/TextQPlaceholder';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import DraggableFlatList, {
  ScaleDecorator,
  RenderItemParams,
} from "react-native-draggable-flatlist";
type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: 'latest' | 'top' } | undefined;
};
const CreateScreen = ()=> {   
    
  const [email, setEmail] = useState("pocetni");
  const [visible, setVisible] = useState(false);
  const [deleteEnabled, setDeleteEnabled] = useState(false);
  
  const [reorderEnabled, setReorderEnabled] = useState(false);
  const fun=(text:string)=> {setEmail(text);};
  type dty={
    type: number;
    id:number;
  };
 const [DATA, setDATA] = useState<dty[]>([{type:-1,id:-1}]);

const removeID = (id:number) => {setDATA(DATA.filter(function(a:dty){return a.id != id}))};
    return (
    <View style={styles.container}>
      <View style={styles.feedView}>
       
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'seashell' }}>
    <DraggableFlatList
      data={DATA}
      onDragEnd={({ data }) => setDATA(data)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={
        ({item,drag,isActive}) =>{
          if(item.type==2)
          return( <ScaleDecorator>
            <TouchableOpacity
              activeOpacity={1}
              onLongPress={drag}
              disabled={isActive}
            >
              <TextInput placeholder="press to enter your text"></TextInput>
            </TouchableOpacity>
          </ScaleDecorator>);
          else if(item.type==0)
            return( <ScaleDecorator>
              <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
              >
                <ImagePlaceholder deleteEnabled={deleteEnabled} id={item.id} removeID={removeID}></ImagePlaceholder>
              </TouchableOpacity>
            </ScaleDecorator>);
            else if(item.type==4)
            return( <ScaleDecorator>
              <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
              >
                <YesNoQPlaceholder reorderEnabled={reorderEnabled} id={item.id} removeID={removeID} deleteEnabled={deleteEnabled} ></YesNoQPlaceholder>
              </TouchableOpacity>
            </ScaleDecorator>);
        
          else if(item.type==5)
          return( <ScaleDecorator>
            <TouchableOpacity
              activeOpacity={1}
              onLongPress={drag}
              disabled={isActive}
            >
              <TextQPlaceholder reorderEnabled={reorderEnabled} id={item.id} removeID={removeID} deleteEnabled={deleteEnabled} text={email}></TextQPlaceholder>
            </TouchableOpacity>
          </ScaleDecorator>);
          else 
            return( <ScaleDecorator>
              <TouchableOpacity
                activeOpacity={1}
                onLongPress={drag}
                disabled={isActive}
              >
                <Text >{item.id}</Text>
              </TouchableOpacity>
            </ScaleDecorator>);
      }
      }
    />
    </GestureHandlerRootView>
         <View style={styles.singleRow}>
         <Pressable  style={styles.btn} onPress={()=>{setEmail("proslo kory dete123");setReorderEnabled(false);setDeleteEnabled(true)}}>
            <Text style={styles.btnTxt}>Delete</Text>
          </Pressable>
          <Pressable  style={styles.btn}>
            <Text style={styles.btnTxt}>Save</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={()=>{setVisible(true);setReorderEnabled(false);setDeleteEnabled(false)}} >
            <Text style={styles.btnTxt}>Add</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={()=>{setReorderEnabled(true);setDeleteEnabled(false)}} >
            <Text style={styles.btnTxt}>Reorder</Text>
          </Pressable>
      </View>
      </View>
      <Modal transparent={true} visible={visible} >
          <View style={styles.modalView}>
            <Text>This is a popup!</Text>
            <Button onPress={ ()=>{setDATA([...DATA,{type:0,id:DATA[DATA.length-1].id+1}]);}} title="Image"></Button>
            <Button onPress={ ()=>{setDATA([...DATA,{type:1,id:DATA[DATA.length-1].id+1}]);}} title="Video"></Button>
            <Button onPress={ ()=>{setDATA([...DATA,{type:2,id:DATA[DATA.length-1].id+1}]);}} title="Text"></Button>
            <Button onPress={ ()=>{setDATA([...DATA,{type:3,id:DATA[DATA.length-1].id+1}]);}} title="Giff"></Button>
            <Button onPress={ ()=>{setDATA([...DATA,{type:4,id:DATA[DATA.length-1].id+1}]);}} title="Yes/No question"></Button>
            <Button onPress={ ()=>{setDATA([...DATA,{type:5,id:DATA[DATA.length-1].id+1}]);}} title="Text question"></Button>
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
    
    feedView:{
      backgroundColor:'#f0f',
      height: '100%',
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
      backgroundColor:'#000',
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
      rowGap:10,
    },
    modalView2: {
      
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#036',
  
    },
    singleRow:
    {
               flexDirection:'row',
    },
    
    btn:{
      flex:1,
      backgroundColor:'blue',
      color:'white',
      borderWidth:3,
      borderColor:'yellow',
      height:40,
      
    },
    btnTxt:{
      verticalAlign:'middle',
      color:'white',
      height:'100%',
      textAlign:'center',
    }
  });
  export default CreateScreen;