import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';
import ButtonV1 from '../BasicComponents/ButtonV1';
import { getTokenForIcons, searchForIcons } from '../../utils/ApiCalls';



type Props = {

};


const LogIn = ({ }: Props) => {
    return (
        <View style={styles.root}>

            <Text style={{ alignSelf: 'center', marginTop: 5 * S.l, fontSize: 2 * S.l }}>LogIn</Text>
            <InputV1 f={-1} mx={2 * S.l} ph={"Username"}></InputV1>

            <InputV1 f={-1} mx={2 * S.l} ph={"Password"}></InputV1>
            <ButtonV1 title='Log in' onPress={() => { searchForIcons('hand') }}></ButtonV1>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
    },
});

export default LogIn;