import React from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'


type Props = {
  deleteEnabled: boolean;
  id: number;
  removeID: (a: number) => void;
};


const ImagePlaceholder = ({ deleteEnabled, id, removeID }: Props) => {
  return (
    <Pressable disabled={!deleteEnabled} style={styles.root} onPress={() => { removeID(id) }}>
      <Pressable disabled={deleteEnabled} onPress={() => { }}>
        <Text style={{ textAlign: 'center', marginTop: 90, backgroundColor: 'green' }}>Tap here to choose image</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 5
  },
});
export default ImagePlaceholder