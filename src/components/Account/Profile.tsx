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

    const styles = StyleSheet.create({
        root: {
            justifyContent: 'center',
            flex: 1,
            backgroundColor: C.bg
        }
    });
    const [token, setToken] = useState('');
    return (
        <View style={styles.root}>
            <View ><Text style={{ color: C.textColor }} >BG color</Text>
                <InputV1 ver={C.bg} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.bg = s) }} ph={C.bg}></InputV1>
                <Text style={{ color: C.textColor }} >BG2 color</Text>
                <InputV1 ver={C.white} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.white = s) }} ph={C.white}></InputV1>

                <Text style={{ color: C.textColor }} >Button text color</Text>
                <InputV1 ver={C.btnText} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.btnText = s) }} ph={C.btnText}></InputV1>
                <Text style={{ color: C.textColor }} >Secundary color</Text>
                <InputV1 ver={C.secundary} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.secundary = s) }} ph={C.secundary}></InputV1>
                <Text style={{ color: C.textColor }} >Primary color</Text>
                <InputV1 ver={C.primary} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.primary = s) }} ph={C.primary}></InputV1>
                <Text style={{ color: C.textColor }} >Btn</Text>
                <InputV1 ver={C.btn} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.btn = s) }} ph={C.btn}></InputV1>
                <Text style={{ color: C.textColor }} >Text color</Text>
                <InputV1 ver={C.textColor} C={C} f={-1} onChangeText={(s) => { console.log('dsfdsfsdfsdf ejjjj maa', s, C.textColor = s) }} ph={C.textColor}></InputV1>
                <ButtonV1 C={C} my={S.m} w={'50%'} f={-1} title='Chnage color' onPress={() => { console.log('mjenjammm'); SecureStore.setItemAsync('C', JSON.stringify(C)).then(() => setRefresh(C)) }}></ButtonV1>
                <ButtonV1 C={C} my={S.m} w={'50%'} f={-1} title='Logout' onPress={async () => { await SecureStore.setItemAsync('token', ''); setLogedin(false); console.log('ffffff') }}></ButtonV1>
            </View>
        </View>
    );
};


export default Profile;