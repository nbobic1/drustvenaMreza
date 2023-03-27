/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from "react";
import {
  Button,
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { TextQElement } from "../../../../../utils/DataTypes";
import InputV2 from "../../../../BasicComponents/InputV2";
import ButtonV1 from "../../../../BasicComponents/ButtonV1";
import { S } from "../../../../../utils/Consts";

type postProps = {
  text: string;
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id: number;
  value: TextQElement;
  removeID: (a: number) => void;
};
const YesNoQPlaceholder: React.FC<postProps> = ({
  text,
  deleteEnabled,
  id,
  removeID,
  value,
  reorderEnabled,
}) => {
  const [first, setFirst] = useState(text);

  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");
  useEffect(() => {
    setFirst(text);
  });
  useEffect(() => {
    value.question = question
    value.answer = answer
  }, [question, answer]);
  const styles = StyleSheet.create({
    description: {
      textAlign: "center",
      backgroundColor: "#00FFFF8f",
      fontSize: 25,
    },
    image: {
      width: "100%",
      height: 200,
      flexDirection: "column-reverse",
    },
    text: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 16,
    },
    root: {
      width: "100%",

    },
  });

  return (
    <View pointerEvents={reorderEnabled ? "none" : "auto"} style={styles.root}>
      <TouchableOpacity
        disabled={!deleteEnabled}
        onPress={() => {
          removeID(id);
        }}
      >
        <View pointerEvents={deleteEnabled ? "none" : "auto"}>

          <InputV2 onChangeText={(value1) => { setQuestion(value1) }} ph="Your question..." />


          <InputV2 my={10} onChangeText={(value1) => { setAnswer(value1) }} ph="Your answer..." />

          <ButtonV1 w={'50%'} v={2} title="Answer"></ButtonV1>

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YesNoQPlaceholder;
