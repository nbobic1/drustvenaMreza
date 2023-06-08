import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import LogIn from '../components/Account/Login';
import InputV1 from '../components/BasicComponents/InputV1';
import { S } from '../utils/Consts';
import Register from '../components/Account/Register';
type Props = {
  setLogedin: (a: boolean) => void;
  C: any;
};
const LogInScreen = ({ setLogedin, C }: Props) => {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: C.bg,
    },
  });
  const [register, setRegister] = useState(false);
  //file:///data/user/0/com.nbobic1.diplomskiv2/cache/Camera/4cc9bbae-567a-4bb0-8835-5e82de5cb5e5.jpg
  return (
    <View style={styles.container}>
      {
        register ?
          <Register C={C} setLogedin={setLogedin} setRegister={setRegister}></Register>
          :
          <LogIn C={C} setLogedin={setLogedin} setRegister={setRegister}></LogIn>

      }
    </View>

  );
};



export default LogInScreen;