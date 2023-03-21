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

type postProps = {
  text: string;
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id: number;
  value:string;
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
  useEffect(() => {
    setFirst(text);
  });
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
    <View pointerEvents={reorderEnabled ? "none" : "auto"} style={styles.root}>
      <TouchableOpacity
        disabled={!deleteEnabled}
        onPress={() => {
          removeID(id);
        }}
      >
        <View pointerEvents={deleteEnabled ? "none" : "auto"}>
          <Text>{text}</Text>
          <Text>{first}</Text>
          <TextInput
            style={styles.description}
            value={value}
            placeholder="Your question..."
          ></TextInput>
          <TextInput placeholder="Your answer..."></TextInput>
          <Button
            title="Answer"
            onPress={() => {
              console.log("moaj=", deleteEnabled);
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default YesNoQPlaceholder;
