import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import InputV1 from '../components/BasicComponents/InputV1';
import { C, S } from '../utils/Consts';

const LogInScreen = () => {

  const [email, setEmail] = useState("pocetni");
  const fun = (text: string) => { setEmail(text); };
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'center', marginTop: 5 * S.l, fontSize: 2 * S.l }}>LogIn</Text>
      <InputV1 f={-1} mx={2 * S.l} ph={"Username"}></InputV1>

      <InputV1 f={-1} mx={2 * S.l} ph={"Password"}></InputV1>
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