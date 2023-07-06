import React, { useEffect, useState } from 'react'
import { YesNoQElement } from '../utils/DataTypes';
import ButtonV1 from './BasicComponents/ButtonV1';
import Row from './BasicComponents/Row';


type Props = {
    value: YesNoQElement;
    C: any;
};


const YesNo = ({ value, C }: Props) => {
    const [btn, setBtn] = useState(true);
    return (
        <Row C={C} bg={C.white}>

            <ButtonV1 C={C} bg={btn ? C.btnT : C.white} v={"empty"} onPress={() => {
                value.answer = true;
                setBtn(true);
            }} title="Yes"></ButtonV1>
            <ButtonV1 C={C} bg={btn ? C.white : C.btnT} v={"empty"} onPress={() => {
                setBtn(false);
                value.answer = false;
            }} title="No" ></ButtonV1>
        </Row>
    );
};

export default YesNo;