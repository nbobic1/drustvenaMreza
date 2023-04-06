import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import InputV1 from '../BasicComponents/InputV1';


type Props = {

};


const Register = ({ }: Props) => {
    return (
        <View style={styles.root}>

            <Text style={{ alignSelf: 'center', marginTop: 5 * S.l, fontSize: 2 * S.l }}>Register</Text>
            <InputV1 f={-1} mx={2 * S.l} ph={"Username"}></InputV1>

            <InputV1 f={-1} mx={2 * S.l} ph={"Password"}></InputV1>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
    },
});

export default Register;