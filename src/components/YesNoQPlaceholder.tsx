/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from 'react';
import {FlatList,Text,StyleSheet, View, ImageBackground, TouchableOpacity, TextInput, Button, Pressable} from 'react-native';
import {useState} from 'react';
import PostDetailsScreen from '../screens/PostDetails';
import Kraj from './KrajBtn';
import FastImage from 'react-native-fast-image'


type postProps = {
  
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id:number;
  removeID:(a:number)=>void;
};
const YesNoQPlaceholder:React.FC<postProps> =({deleteEnabled,id,removeID,reorderEnabled}) => {
  const [hgh, setHgh] = useState(200)
  const [details, setDetails] = useState([0])
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    description:{
      textAlign: 'center',
      backgroundColor: '#00FFFF8f',
      fontSize:25,
    },
    image: {
      width: '100%',
      height: 200,
      flexDirection: 'column-reverse',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 16,
    },
    root:{
      width:'100%',
      backgroundColor:'white',
      borderWidth:5
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
 
  return (
    <View pointerEvents={reorderEnabled ? 'none':'auto'}>

    
      <Pressable disabled={!deleteEnabled} style={styles.root} onPress={()=>{removeID(id)}}>
        <View pointerEvents={deleteEnabled ? 'none':'auto'}>
      <TextInput style={styles.description} placeholder="Your quesiton..." ></TextInput>
        <View style={styles.singleRow
        }>
          <Pressable style={styles.btn}  >
            <Text style={styles.btnTxt}>Yes</Text>
          </Pressable>
          <Pressable  style={styles.btn}>
            <Text style={styles.btnTxt}>No</Text>
          </Pressable>
      </View>
      </View>
        </Pressable> 
        </View>
      );
  };

export default YesNoQPlaceholder;