import React, { useState, useRef, useEffect } from 'react'
import { BackHandler, Keyboard, NativeEventSubscription, Pressable, StyleSheet, TextInput, View } from 'react-native'
import { C, S } from '../../utils/Consts';
import { FontAwesome } from '@expo/vector-icons';

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
    v?: number;
    fontS?: number;
    search?: () => void,
    onChangeText?: (value: string) => void;
};


const InputV1 = ({ mx, my, px, w, f, bR, bW, bC, ph, onChangeText, fontS, search, v }: Props) => {
    const [outlineColor, setOutlineColor] = useState(bC ? bC : C.secundary);
    const [input, setInput] = useState("")
    const ref = useRef(null)


    const styles = StyleSheet.create({
        root: {
            paddingTop: my ? my : S.m,
            paddingBottom: my ? my : S.m,
            paddingLeft: mx ? mx : S.m,
            paddingRight: mx ? mx : S.m,
            flex: f ? f : 1,
        },
        root2: {
            height: 50,
            borderColor: outlineColor,
            backgroundColor: outlineColor == C.secundary ? C.white : C.bg,
            paddingLeft: px ? px : S.l,
            paddingRight: px ? px : S.l,
            width: w ? w : '100%',
            alignSelf: 'center',
            borderWidth: bW ? bW : S.s,
            borderRadius: bR ? bR : S.m,
            fontSize: fontS ? fontS : 32,
            flexDirection: 'row',
        },
        input: {
            flex: 1,
            height: v ? 'auto' : '100%',
            padding: v ? 5 : 0,
            fontSize: fontS ? fontS : v ? 28 : 18,
        }
    });
    const [backHandler, setBackHandler] = useState<NativeEventSubscription>()
    return (
        <View style={styles.root}>
            <View style={styles.root2}>

                <TextInput ref={ref} onChangeText={(text1) => { setInput(text1) }}
                    style={styles.input}
                    onFocus={() => {
                        setOutlineColor(C.primary); setBackHandler(
                            Keyboard.addListener('keyboardDidHide', () => {
                                if (ref != null && ref.current != null)
                                    ref.current.blur();
                                else
                                    backHandler?.remove();
                            }))
                    }}
                    onBlur={() => { if (search) search(); backHandler?.remove() }}
                    multiline={true}
                    blurOnSubmit={true}
                    onEndEditing={() => {
                        setOutlineColor(C.secundary);
                        if (onChangeText)
                            onChangeText(input);
                    }}
                    placeholder={ph ? ph : ""}></TextInput>
                {search && <Pressable onPress={search} style={{ justifyContent: 'center' }}><Image
                    source={require('../../../assets/search.png')}
                    fadeDuration={0}
                    style={{ width: S.i, height: S.i }}
                /></Pressable>}
            </View>
        </View>
    );
};



export default InputV1;