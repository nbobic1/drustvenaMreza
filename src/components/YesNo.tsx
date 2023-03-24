import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native';
import { YesNoQElement } from '../utils/DataTypes';


type Props = {
    value: YesNoQElement;
    saveE: boolean;
};


const YesNo = ({ value, saveE }: Props) => {
    const [btn, setBtn] = useState(true);
    useEffect(() => {
        value.answer = btn;
    }, [saveE])
    return (
        <View >
            <Button onPress={() => { setBtn(!btn) }} title="Yes"></Button>
            <Button onPress={() => { setBtn(!btn) }} title="No" ></Button>
        </View>
    );
};

export default YesNo;