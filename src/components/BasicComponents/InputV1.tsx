import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { C, S } from '../../utils/Consts';
import Container from './Container';


type Props = {
    mx?: number;
    my?: number;
    px?: number;
    w?: number;
    bR?: number;
    bW?: number;
    bC?: string;
    ph?: string;
    onChangeText?: (value: string) => void;
};


const InputV1 = ({ mx, my, px, w, bR, bW, bC, ph, onChangeText }: Props) => {
    const [outlineColor, setOutlineColor] = useState(bC ? bC : C.primary);
    const styles = StyleSheet.create({
        root: {
            paddingTop: my ? my : S.m,
            paddingBottom: my ? my : S.m,
            paddingLeft: mx ? mx : S.m,
            paddingRight: mx ? mx : S.m,
        },
        input: {
            borderColor: outlineColor,
            backgroundColor: outlineColor == C.primary ? C.white : C.popS,
            paddingLeft: px ? px : S.l,
            paddingRight: px ? px : S.l,
            width: w ? w : '100%',
            borderWidth: bW ? bW : S.s,
            borderRadius: bR ? bR : S.s,
        }
    });
    return (
        <View style={styles.root}>
            <TextInput onChangeText={onChangeText} style={styles.input} onFocus={() => { setOutlineColor(C.secundary) }} onEndEditing={() => { setOutlineColor(C.primary) }} placeholder={ph ? ph : ""}></TextInput>
        </View>
    );
};



export default InputV1;