import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';
import Button from '../BasicComponents/ButtonV1';
import { Register as RegisterApi } from '../../utils/ApiCalls';
type Props = {
    setRegister: (a: boolean) => void;
    setLogedin: (a: boolean) => void;
    C: any;
};



const Register = ({ setLogedin, setRegister, C }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    return (
        <View style={styles.root}>
            <View>
                <Text style={[{ color: C.textColor }, { alignSelf: 'center', marginTop: 5 * S.l, fontSize: 2 * S.l }]} >Register</Text>
                <InputV1 C={C} f={-1} mx={2 * S.l} onChangeText={(value) => { setUsername(value) }} ph={"Username"}></InputV1>

                <InputV1 C={C} f={-1} mx={2 * S.l} onChangeText={(value) => { setPassword(value) }} ph={"Password"} ></InputV1>
                <InputV1 C={C} f={-1} mx={2 * S.l} onChangeText={(value) => { setConfirmPassword(value) }} ph={"Confirm password"} ></InputV1>
                <Button C={C} f={-1} my={S.m} w={'50%'} title='Register' onPress={() => { RegisterApi(username, password, confirmPassword) }}></Button>
                <Button C={C} f={-1} my={S.m} w={'50%'} onPress={() => { setRegister(false) }} title='Login'></Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center'
    },

});

export default Register;