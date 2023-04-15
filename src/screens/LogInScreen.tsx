import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import LogIn from '../components/Account/Login';
import InputV1 from '../components/BasicComponents/InputV1';
import { C, S } from '../utils/Consts';

const LogInScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const fun = (text: string) => { setEmail(text); };
  //file:///data/user/0/com.nbobic1.diplomskiv2/cache/Camera/4cc9bbae-567a-4bb0-8835-5e82de5cb5e5.jpg
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