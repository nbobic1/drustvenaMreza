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
  value: TextQElement;
};
const YesNoQ: React.FC<postProps> = ({
  value,
}) => {

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
      backgroundColor: "white",
      borderWidth: 5,
    },
  });

  return (
    <View style={styles.root}>

      <Text>{value.question} </Text>
      <TextInput placeholder="Your answer..."></TextInput>
      <Button
        title="Answer"
        onPress={() => {
          //provjera odgovora
        }}
      />
    </View>
  );
};

export default YesNoQ;
