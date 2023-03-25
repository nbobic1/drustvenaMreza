import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet, View, ImageBackground, TouchableOpacity, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import { PostElement, YesNoQElement } from '../../../../../utils/DataTypes';
import Row from '../../../../BasicComponents/Row';
import ButtonV1 from '../../../../BasicComponents/ButtonV1';

type postProps = {
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id: number;
  value: YesNoQElement;
  removeID: (a: number) => void;
};
const YesNoQ: React.FC<postProps> = ({ deleteEnabled, id, removeID, reorderEnabled, value }) => {
  const [hgh, setHgh] = useState(200)
  const [details, setDetails] = useState([0])
  /*useEffect(()=> {
    if (updateElement!=undefined)
    updateElement(value)
  },[saveEnabled])
  */const styles = StyleSheet.create({


  });
  console.log("sto ne radiiii=", value.answer);
  return (
    <View >
      <Text style={{ alignSelf: 'center' }}>{value.question}</Text>
      <Row >
        <ButtonV1 onPress={() => { }} title="Yes"></ButtonV1>
        <ButtonV1 onPress={() => { }} title="No" ></ButtonV1>
      </Row>

    </View>
  );
};
export default YesNoQ;