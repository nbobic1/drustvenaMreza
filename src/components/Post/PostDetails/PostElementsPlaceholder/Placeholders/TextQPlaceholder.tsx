/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { TextQElement } from "../../../../../utils/DataTypes";
import { Box, Button, Center, Input } from "native-base";

type postProps = {
  text: string;
  deleteEnabled: boolean;
  reorderEnabled: boolean;
  id: number;
  value:TextQElement;
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
    value.question=question
  },[question]);
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
       
        <Box p="3">
             <Input borderColor="muted.400" focusOutlineColor="info.300" borderWidth={2}  _focus={{bg:'info.50'}} mx="auto" onChangeText={(value1)=>{setQuestion(value1)}} placeholder="Your question..." w="100%" />
          </Box>
          <Box p="3">
             <Input borderColor="muted.400" focusOutlineColor="info.300" borderWidth={2}  _focus={{bg:'info.50'}} mx="auto" onChangeText={(value1)=>{setQuestion(value1)}} placeholder="Your answer..." w="100%" />
          </Box>
          <Center marginBottom="3">
          <Button width="50%" bgColor="info.500">Answer</Button>
          </Center>
          </View>
      </TouchableOpacity>
    </View>
  );
};

export default YesNoQPlaceholder;
