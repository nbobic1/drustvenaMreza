import React, { useEffect, useState } from 'react'
import { Button, View } from 'react-native';
import { YesNoQElement } from '../utils/DataTypes';
import ButtonV1 from './BasicComponents/ButtonV1';
import Row from './BasicComponents/Row';


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
        <Row >
            <ButtonV1 onPress={() => { setBtn(!btn) }} title="Yes"></ButtonV1>
            <ButtonV1 onPress={() => { setBtn(!btn) }} title="No" ></ButtonV1>
        </Row>
    );
};

export default YesNo;