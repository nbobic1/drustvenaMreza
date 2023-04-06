import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LogIn from '../components/Account/Login';
import InputV1 from '../components/BasicComponents/InputV1';
import { C, S } from '../utils/Consts';

const LogInScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const fun = (text: string) => { setEmail(text); };
  return (
    <View style={styles.container}>
      <LogIn></LogIn>
    </View>

  );
};


const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: C.bg,
  },
});
export default LogInScreen;