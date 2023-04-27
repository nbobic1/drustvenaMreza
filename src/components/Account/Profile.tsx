import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';
import ButtonV1 from '../BasicComponents/ButtonV1';
import { CreateContent, GetPosts, Login, Register, getTokenForIcons, searchForIcons } from '../../utils/ApiCalls';

import * as SecureStore from 'expo-secure-store';

type Props = {
    setLogedin: (a: boolean) => void;
};


const Profile = ({ setLogedin }: Props) => {
    const [token, setToken] = useState('');
    return (
        <View style={styles.root}>
            <View >

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

export default Profile;