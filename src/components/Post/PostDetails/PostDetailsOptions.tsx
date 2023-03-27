import React from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import { C } from '../../../utils/Consts';
import ButtonV1 from '../../BasicComponents/ButtonV1';
import Row from '../../BasicComponents/Row';


type Props = {
  hgh: any;
  setHgh: (a: any) => void;
  setScrollE: (a: boolean) => void;
  setDetails: (a: any) => void;
};



const PostDetailsOptions = ({ hgh, setHgh, setScrollE, setDetails }: Props) => {
  return (
    <Row>
      <ButtonV1 bg={C.primary} title='Comment'></ButtonV1>
      <ButtonV1 bg={C.primary} title='Save'></ButtonV1>
      <ButtonV1 bg={C.primary} title='Edit'></ButtonV1>
      <ButtonV1 bg={C.primary} title='Back' onPress={() => { setHgh(200); setDetails([0]); setScrollE(true) }} ></ButtonV1>

    </Row>
  );
};

const styles = StyleSheet.create({
  optionBtnRow:
  {
    flexDirection: 'row',
  },
  btn: {
    flex: 1,
    backgroundColor: 'blue',
    color: 'white',
    borderWidth: 3,
    borderColor: 'yellow',
    height: 40,

  },
  btnTxt: {
    verticalAlign: 'middle',
    color: 'white',
    height: '100%',
    textAlign: 'center',
  },
});

export default PostDetailsOptions;