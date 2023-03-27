/*
{ 
  <ImageBackground style={styles.image} source={{uri:imgSrc}}>
        
          </ImageBackground>  
              
          
*/
import React from "react";
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { TextElement, TextQElement } from "../../../../../utils/DataTypes";
import InputV1 from "../../../../BasicComponents/InputV1";

type postProps = {
    deleteEnabled: boolean;
    reorderEnabled: boolean;
    id: number;
    value: TextElement;
    removeID: (a: number) => void;
};
const TextElementPlaceholder: React.FC<postProps> = ({
    deleteEnabled,
    id,
    removeID,
    value,
    reorderEnabled,
}) => {
    const [text, setText] = useState("");

    useEffect(() => {
        value.text = text
    }, [text]);
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
                    <InputV1 onChangeText={(text) => { value.text = text }} ph="Your text..." />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TextElementPlaceholder;
