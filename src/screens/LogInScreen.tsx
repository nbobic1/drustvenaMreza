import React, { useState } from 'react';
import {StyleSheet, View } from 'react-native';
import InputWithLable from '../components/inputWithLable'

const LogInScreen = ()=> {   
    
  const [email, setEmail] = useState("pocetni");
  const fun=(text:string)=> {setEmail(text);};
    return (
    <View style={styles.container}>
      <View style={styles.feedView}>
        <InputWithLable text="Email" hint="email" type={false} func={fun}></InputWithLable>
        <InputWithLable text="Password" hint="passwrd" type={true} func={fun}></InputWithLable>
      </View>
   
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
      height: '93%',
      width: '100%'
    },
  });
  export default LogInScreen;