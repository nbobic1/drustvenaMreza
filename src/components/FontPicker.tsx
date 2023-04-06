import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Text, View, StyleSheet, Modal, KeyboardAvoidingView } from 'react-native'
import { C, S } from '../utils/Consts';
import ButtonV1 from './BasicComponents/ButtonV1';
import Row from './BasicComponents/Row';
import { Feather } from '@expo/vector-icons';


type Props = {
    textSt: any;
    setTextSt: (a: any) => void;
};


const FontPicker = ({ textSt, setTextSt }: Props) => {
    const [selectedLanguage, setSelectedLanguage] = useState(textSt != null ? textSt.fontFamily : 'normal');
    const [align, setAlign] = useState(true);
    console.log("ehhehe=", JSON.stringify(textSt), textSt != null ? textSt.fontSize : null);
    return (

        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={-200} >
            <Modal visible={textSt != null ? true : false} >
                <View style={{ width: '100%', height: '100%', backgroundColor: C.popS, justifyContent: 'center' }}>
                    <View style={styles.modalView}>
                        <Text style={{ textAlign: 'center', fontSize: 20 }}>Adjust text</Text>
                        <Row>
                            <ButtonV1 initialValue={textSt != null ? textSt.fontWeight == 'bold' : false} v={"switch"} onPress={() => { if (textSt.fontWeight == 'bold') textSt.fontWeight = '500'; else textSt.fontWeight = 'bold'; }} title=''><Text style={{ fontSize: S.l, fontWeight: 'bold', textAlign: 'center' }}>B</Text></ButtonV1>
                            <ButtonV1 initialValue={textSt != null ? textSt.fontStyle == 'italic' : false} v={"switch"} onPress={() => { if (textSt.fontStyle == 'normal') textSt.fontStyle = 'italic'; else textSt.fontStyle = 'normal'; }} title='' ><Text style={{ fontSize: S.l, fontStyle: 'italic', textAlign: 'center' }}>I</Text></ButtonV1>
                            <ButtonV1 initialValue={textSt != null ? textSt.textDecorationLine == 'underline' : false} v={"switch"} onPress={() => { if (textSt.textDecorationLine == 'underline') textSt.textDecorationLine = 'none'; else textSt.textDecorationLine = 'underline'; }} title='' ><Text style={{ fontSize: S.l, textDecorationLine: 'underline', textAlign: 'center' }}>U</Text></ButtonV1>
                        </Row>
                        <Row>
                            <ButtonV1 initialValue={textSt != null ? (textSt.textAlign == 'left') : false} v={"switch1"} onPress={() => { textSt != null ? textSt.textAlign = 'left' : true; setAlign(!align); }} title='' ><Feather style={{ alignSelf: 'center' }} name="align-left" size={24} color="black" /></ButtonV1>
                            <ButtonV1 initialValue={textSt != null ? (textSt.textAlign == 'center') : false} v={"switch1"} onPress={() => { textSt != null ? textSt.textAlign = 'center' : true; setAlign(!align); }} title='' ><Feather style={{ alignSelf: 'center' }} name="align-center" size={24} color="black" /></ButtonV1>
                            <ButtonV1 initialValue={textSt != null ? (textSt.textAlign == 'right') : false} v={"switch1"} onPress={() => { textSt != null ? textSt.textAlign = 'right' : true; setAlign(!align); }} title='' ><Feather style={{ alignSelf: 'center' }} name="align-right" size={24} color="black" /></ButtonV1>
                        </Row>
                        <View style={{ flexDirection: 'row', width: '100%', paddingHorizontal: 2 * S.l }}>
                            <Text style={{ fontSize: 15, alignSelf: 'flex-start', verticalAlign: 'middle', height: '100%', }}>A</Text>
                            <Text style={{ fontSize: 40, flex: 1, verticalAlign: 'bottom', textAlign: 'right' }}>A</Text>
                        </View>
                        <Slider
                            minimumValue={1}
                            maximumValue={100}
                            step={1}
                            value={textSt != null ? textSt.fontSize : 50}
                            onValueChange={(a) => { textSt != null ? textSt.fontSize = a : 0 }}
                            thumbTintColor={C.primary}
                            minimumTrackTintColor={C.primary}
                        ></Slider>
                        <Text style={{ textAlign: 'center', fontSize: 20, fontFamily: '' }}>Font:</Text>
                        <Picker
                            style={{ flex: 1, backgroundColor: C.bg, borderRadius: 10, flexGrow: 0 }}
                            mode={"dropdown"}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) => {
                                textSt != null ? textSt.fontFamily = itemValue : null
                                setSelectedLanguage(itemValue)
                            }
                            }>
                            <Picker.Item style={{ fontFamily: 'normal' }} label="Normal" value="normal" />
                            <Picker.Item style={{ fontFamily: 'serif' }} label="Serif" value="serif" />
                            <Picker.Item style={{ fontFamily: 'notoserif' }} label="Noto serif" value="notoserif" />
                            <Picker.Item style={{ fontFamily: 'sans-serif-condensed' }} label="Sens serif condensed" value="sans-serif-condensed" />
                            <Picker.Item style={{ fontFamily: 'sans-serif-light' }} label="Sens serif light" value="sans-serif-light" />
                            <Picker.Item style={{ fontFamily: 'sans-serif-thin' }} label="Sens serif thin" value="sans-serif-thin" />
                            <Picker.Item style={{ fontFamily: 'sans-serif-medium' }} label="Sens serif" value="sans-serif-medium" />
                            <Picker.Item style={{ fontFamily: 'Roboto' }} label="Roboto" value="Roboto" />
                            <Picker.Item style={{ fontFamily: 'monospace' }} label="Monospace" value="monospace" />
                        </Picker>

                        <ButtonV1 f={-1} w={100} onPress={() => { setTextSt(null); }} title="Close"></ButtonV1>

                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    modalView: {//popup
        marginHorizontal: 3 * S.l,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignSelf: 'center',
        elevation: 5,
        rowGap: 10,

    },
});

export default FontPicker;