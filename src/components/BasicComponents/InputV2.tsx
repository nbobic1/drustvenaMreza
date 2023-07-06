import React, { useState, useRef } from 'react'
import { Keyboard, NativeEventSubscription, Pressable, StyleSheet, TextInput, View } from 'react-native'
import { S } from '../../utils/Consts';
import { FontAwesome5 } from '@expo/vector-icons';

import { Image } from 'react-native';
type Props = {
    mx?: number;
    my?: number;
    px?: number;
    w?: any;
    bR?: number;
    bW?: number;
    f?: number;
    bC?: string;
    ph?: string;
    textS?: any;
    initialValue?: string;
    onChangeText?: (value: string) => void;
    setVisible: (a: any) => void;
    value: any;
    C: any;
};

const InputV2 = ({ C, mx, my, px, w, f, bR, bW, bC, ph, onChangeText, setVisible, textS, value, initialValue }: Props) => {
    const [outlineColor, setOutlineColor] = useState(bC ? bC : C.secundary);
    const [input, setInput] = useState(initialValue)
    const ref = useRef(null)


    const styles = StyleSheet.create({
        root: {
            paddingTop: my ? my : S.m,
            paddingBottom: my ? my : S.m,
            paddingLeft: mx ? mx : S.m,
            paddingRight: mx ? mx : S.m,
            flexDirection: 'row',
            width: '100%',
            gap: S.m
        },
        input: {
            borderColor: outlineColor,
            backgroundColor: outlineColor == C.secundary ? C.white : C.bg,
            paddingLeft: px ? px : S.l,
            paddingRight: px ? px : S.l,
            alignSelf: 'center',
            flex: 1,
            borderWidth: bW ? bW : S.s,
            borderRadius: bR ? bR : S.m,
        },


    });
    const [backHandler, setBackHandler] = useState<NativeEventSubscription>()

    return (
        <View style={styles.root}>
            <TextInput ref={ref}
                onChangeText={(text1) => { setInput(text1) }}
                style={[styles.input, textS ? textS : {}]}
                value={input}
                onFocus={() => {
                    setOutlineColor(C.primary); setBackHandler(
                        Keyboard.addListener('keyboardDidHide', () => {
                            if (ref != null && ref.current != null)
                                ref.current.blur();
                            else
                                backHandler?.remove();
                        }))
                }}
                onBlur={() => { console.log("blurred"); backHandler?.remove() }}
                multiline={true}
                blurOnSubmit={true}
                onEndEditing={() => {
                    setOutlineColor(C.secundary);
                    if (onChangeText)
                        onChangeText(input);
                }}
                placeholder={ph ? ph : ""}></TextInput>
            <Pressable onPress={() => { setVisible(value); }}>
                <Image
                    source={require('../../../assets/editing.png')}
                    fadeDuration={0}
                    style={{ width: S.i, height: S.i }}
                />
            </Pressable>



        </View >
    );
};



export default InputV2;