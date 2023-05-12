import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Keyboard
} from "react-native";
import FeedScreen from "../../../../../screens/FeedScreen";
import { TextQElement } from "../../../../../utils/DataTypes";
import ButtonV1 from "../../../../BasicComponents/ButtonV1";
import InputV1 from "../../../../BasicComponents/InputV1";
import Feedback from "./Feedback";

type postProps = {
  value: TextQElement;
};
const YesNoQ: React.FC<postProps> = ({
  value,
}) => {
  const [answer, setAnswer] = useState("");
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const styles = StyleSheet.create({

  });
  console.log('moja==', JSON.stringify(value))
  return (
    <View >
      <Text style={value.style}>{value.question} </Text>
      <InputV1 onChangeText={setAnswer} ph="Your answer..."></InputV1>
      <ButtonV1
        w={'50%'}
        title="Answer"
        onPress={() => {
          Keyboard.dismiss();
          //provjera odgovora
          if (answer == value.answer) {
            setText("Correct answer");
            setVisible(true);
          }
          else {
            setText("Wrong answer");
            setVisible(true);
          }
        }}
      />
      <Feedback text={text} visible={visible} setVisible={setVisible}></Feedback>
    </View>
  );
};

export default YesNoQ;
