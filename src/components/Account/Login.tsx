import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';
import ButtonV1 from '../BasicComponents/ButtonV1';
import { CreateContent, GetPosts, Login, Register, getTokenForIcons, searchForIcons } from '../../utils/ApiCalls';

import * as SecureStore from 'expo-secure-store';

type Props = {
    setRegister: (a: boolean) => void;
    setLogedin: (a: boolean) => void;
};


const LogIn = ({ setLogedin, setRegister }: Props) => {
    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    return (
        <View style={styles.root}>
            <View >


                <Text style={{ alignSelf: 'center', fontSize: 2 * S.l }}>LogIn</Text>
                <Text style={{ alignSelf: 'center', fontSize: S.l }}>{message}</Text>
                <InputV1 onChangeText={(value) => { setEmail(value) }} f={-1} mx={2 * S.l} ph={"Username"}></InputV1>

                <InputV1 onChangeText={(vale) => { setPassword(vale) }} f={-1} mx={2 * S.l} ph={"Password"}></InputV1>
                <ButtonV1 my={S.m} w={'50%'} f={-1} title='Log in' onPress={() => {
                    setMessage(''); Login(email, password).then(async res => {
                        console.log('token=', res); if (res == null)
                            setMessage('Invalid data');
                        else { setToken(res); setLogedin(true); await SecureStore.setItemAsync('token', res); }
                    })
                }}></ButtonV1>
                <ButtonV1 my={S.m} w={'50%'} f={-1} title='Create content' onPress={() => { SecureStore.getItemAsync('token').then((value => { CreateContent(value) })) }}></ButtonV1>
                <ButtonV1 my={S.m} w={'50%'} f={-1} title='Register' onPress={() => { setRegister(true) }}></ButtonV1>
                <ButtonV1 my={S.m} w={'50%'} f={-1} title='Logout' onPress={async () => { await SecureStore.setItemAsync('token', ''); setLogedin(false); console.log('ffffff') }}></ButtonV1>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        flex: 1,
    }
});

export default LogIn;