import React from 'react'
import  {Pressable,Text,View,StyleSheet} from 'react-native'


type Props =  {
        hgh: any;
        setHgh: (a: any) => void;
        setScrollE: (a: boolean) => void;
        setDetails: (a: any) => void;
      };



const PostDetailsOptions =({hgh,setHgh,setScrollE,setDetails}:Props)=>{
return (
        <View style={styles.optionBtnRow}>
          <Pressable style={styles.btn} onPress={() => { }}>
            <Text style={styles.btnTxt}>Comment</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={()=>{}} >
            <Text style={styles.btnTxt}>Save</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => { }} >
            <Text style={styles.btnTxt}>Edit</Text>
          </Pressable>
          <Pressable style={styles.btn} onPress={() => {setHgh(200); setDetails([0]); setScrollE(true)   }} >
            <Text style={styles.btnTxt}>back</Text>
          </Pressable>
        </View>
);
};

const styles = StyleSheet.create({
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
});

export default PostDetailsOptions;