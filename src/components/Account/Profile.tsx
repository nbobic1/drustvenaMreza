import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';
import ButtonV1 from '../BasicComponents/ButtonV1';
import { CreateContent, GetPosts, Login, Register, getTokenForIcons, searchForIcons } from '../../utils/ApiCalls';

import * as SecureStore from 'expo-secure-store';

type Props = {
    setLogedin: (a: boolean) => void;
    setRefresh: (a: boolean) => void;
    C: any;
};


const Profile = ({ setLogedin, setRefresh, C }: Props) => {
    const [token, setToken] = useState('');
    return (
        <View style={styles.root}>
            <View >
                <Text>Text color</Text>
                <InputV1 C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.secundary = s) }} ph={C.secundary}></InputV1>
                <Text>Secundary color</Text>
                <InputV1 C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.secundary = s) }} ph={C.secundary}></InputV1>
                <Text>Primary color</Text>
                <InputV1 C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.primary = s) }} ph={C.primary}></InputV1>
                <ButtonV1 C={C} my={S.m} w={'50%'} f={-1} title='Chnage color' onPress={() => { console.log('mjenjammm'); setRefresh(false) }}></ButtonV1>
                <ButtonV1 C={C} my={S.m} w={'50%'} f={-1} title='Logout' onPress={async () => { await SecureStore.setItemAsync('token', ''); setLogedin(false); console.log('ffffff') }}></ButtonV1>
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

export default Profile;