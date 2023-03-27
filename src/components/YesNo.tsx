import React, { useEffect, useState } from 'react'
import { C } from '../utils/Consts';
import { YesNoQElement } from '../utils/DataTypes';
import ButtonV1 from './BasicComponents/ButtonV1';
import Row from './BasicComponents/Row';


type Props = {
    value: YesNoQElement;
};


const YesNo = ({ value }: Props) => {
    const [btn, setBtn] = useState(true);
    return (
        <Row >
            <ButtonV1 bg={btn ? C.btnT : C.white} v={2} onPress={() => {
                value.answer = true;
                setBtn(true);
            }} title="Yes"></ButtonV1>
            <ButtonV1 bg={btn ? C.white : C.btnT} v={2} onPress={() => {
                setBtn(false);
                value.answer = false;
            }} title="No" ></ButtonV1>
        </Row>
    );
};

export default YesNo;