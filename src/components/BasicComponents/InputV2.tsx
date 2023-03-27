import React, { useState, useRef, useEffect } from 'react'
import { Text, Keyboard, KeyboardAvoidingView, Modal, NativeEventSubscription, Pressable, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import { C, S } from '../../utils/Consts';
import { FontAwesome5 } from '@expo/vector-icons';
import ButtonV1 from './ButtonV1';
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
    onChangeText?: (value: string) => void;
};


const InputV2 = ({ mx, my, px, w, f, bR, bW, bC, ph, onChangeText }: Props) => {
    const [outlineColor, setOutlineColor] = useState(bC ? bC : C.secundary);
    const [input, setInput] = useState("")
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

        modalView: {//popup
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 20,
            alignSelf: 'center',
            elevation: 5,
            rowGap: 10,
            margin: 100,
        },
    });
    const [backHandler, setBackHandler] = useState<NativeEventSubscription>()
    const [visible, setVisible] = useState(false);
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
            <Pressable onPress={() => { setVisible(true); }}>
                <FontAwesome5 name="edit" size={24} color={C.secundary} />
            </Pressable>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-200} >
                <Modal visible={visible} >
                    <View style={{ width: '100%', height: '100%', backgroundColor: '#00000080' }}>
                        <View style={styles.modalView}>
                            <Text>Adjust text</Text>

                            <ButtonV1 onPress={() => { setVisible(false) }} title="Close"></ButtonV1>
                        </View>
                    </View>
                </Modal>
            </KeyboardAvoidingView>
        </View>
    );
};



export default InputV2;