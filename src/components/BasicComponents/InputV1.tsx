import React, { useState, useRef, useEffect } from 'react'
import { BackHandler, Keyboard, NativeEventSubscription, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { NativeEvent } from 'react-native-reanimated/lib/types/lib/reanimated2/commonTypes';
import { C, S } from '../../utils/Consts';


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
    fontS?: number;
    onChangeText?: (value: string) => void;
};


const InputV1 = ({ mx, my, px, w, f, bR, bW, bC, ph, onChangeText, fontS }: Props) => {
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
        input: {
            borderColor: outlineColor,
            backgroundColor: outlineColor == C.secundary ? C.white : C.bg,
            paddingLeft: px ? px : S.l,
            paddingRight: px ? px : S.l,
            width: w ? w : '100%',
            alignSelf: 'center',
            borderWidth: bW ? bW : S.s,
            borderRadius: bR ? bR : S.m,
            fontSize: fontS ? fontS : 18,
        }
    });
    const [backHandler, setBackHandler] = useState<NativeEventSubscription>()
    return (
        <View style={styles.root}>
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
                onBlur={() => { console.log("blurred"); backHandler?.remove() }}
                multiline={true}
                blurOnSubmit={true}
                onEndEditing={() => {
                    setOutlineColor(C.secundary);
                    if (onChangeText)
                        onChangeText(input);
                }}
                placeholder={ph ? ph : ""}></TextInput>

        </View>
    );
};



export default InputV1;