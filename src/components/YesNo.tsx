import { Button, Flex } from 'native-base';
import React,{useEffect,useState} from 'react' 
import { YesNoQElement } from '../utils/DataTypes';


type Props = {
    value:YesNoQElement;
saveE:boolean;
};


const YesNo =({value,saveE}:Props)=>{
    const [btn, setBtn] = useState(true);
    useEffect(()=>{
        value.answer=btn;
    },[saveE])
return (
    <Flex width="100%" mb="3"  direction="row">   
        <Button bgColor={btn ? 'green.500' : 'red.500'} ml="3" mr="1" flex={1} onPress={()=>{setBtn(!btn) }}>Yes</Button>
        <Button bgColor={btn ? 'red.500' : 'green.500'} ml="1" mr="3" flex={1} onPress={()=>{setBtn(!btn) }}>No</Button>
    </Flex>
);
};

export default YesNo;