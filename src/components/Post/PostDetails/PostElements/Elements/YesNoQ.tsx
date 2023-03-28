import React, { useEffect } from 'react';
import { FlatList, Text, StyleSheet, View, ImageBackground, TouchableOpacity, TextInput, Button, Pressable } from 'react-native';
import { useState } from 'react';
import { PostElement, YesNoQElement } from '../../../../../utils/DataTypes';
import Row from '../../../../BasicComponents/Row';
import ButtonV1 from '../../../../BasicComponents/ButtonV1';
import Feedback from './Feedback';
import { C } from '../../../../../utils/Consts';

type postProps = {
  value: YesNoQElement;
};
const YesNoQ: React.FC<postProps> = ({ value }) => {

  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  console.log("sto ne radiiii=", value.answer);
  return (
    <View >
      <Text style={value.style}>{value.question}</Text>
      <Row bg={C.bg} >
        <ButtonV1 onPress={() => {
          if (value.answer) {
            setText("Correct answer");
            setVisible(true);
          }
          else {
            setText("Wrong answer");
            setVisible(true);
          }
        }} title="Yes"></ButtonV1>
        <ButtonV1 onPress={() => {
          if (!value.answer) {
            setText("Correct answer");
            setVisible(true);
          }
          else {
            setText("Wrong answer");
            setVisible(true);
          }
        }} title="No" ></ButtonV1>
      </Row>
      <Feedback text={text} visible={visible} setVisible={setVisible}></Feedback>
    </View>
  );
};
export default YesNoQ;