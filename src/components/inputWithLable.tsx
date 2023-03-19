
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
type Props = {
    text: string;
    hint: string;
    type: boolean;
    func: (arg: string) => void;
};
const inputWithLable = ({ text, hint, type, func }: Props) => {
    const [texts, setTexts] = useState(text);

    return (
        <View>
            <Text style={styles.lable}>{text}</Text>
            <TextInput style={styles.input} placeholder={hint} secureTextEntry={type} onChangeText={setTexts}></TextInput>
            <Button onPress={() => func(texts)} title="Login"></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    lable: {
        textAlign: 'center',
        marginHorizontal: 20,
        fontSize: 24,
    },
    input: {
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        paddingHorizontal: 5,
        fontSize: 24,
    }
});
export default inputWithLable