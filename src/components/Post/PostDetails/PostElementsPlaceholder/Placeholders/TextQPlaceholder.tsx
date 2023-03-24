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

  const [question, setQuestion] = useState("");
  useEffect(() => {
    setFirst(text);
  });
  useEffect(() => {
    value.question = question
  }, [question]);
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

          <TextInput onChangeText={(value1) => { setQuestion(value1) }} placeholder="Your question..." />


          <TextInput onChangeText={(value1) => { setQuestion(value1) }} placeholder="Your answer..." />

          <Button title="Answer"></Button>

        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YesNoQPlaceholder;
