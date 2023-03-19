import React, { useState } from 'react'
import { FlatList, Text, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';


type postProps = {
  hgh: any;
  setHgh: (a: any) => void;
  setScrollE: (a: boolean) => void;
  setDetails: (a: any) => void;
};
const Kraj: React.FC<postProps> = ({ hgh, setHgh, setScrollE, setDetails }) => {
  if (hgh == 400) {
    return (
    <TouchableOpacity onPress={() => { setHgh(200); setDetails([0]); setScrollE(true) }}>
      <Text style={styles.description} >Back</Text>
    </TouchableOpacity>
    );
  }
  else return <View></View>;
};

const styles = StyleSheet.create({
  description: {
    height: 30,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    backgroundColor: '#036',
  },

});

export default Kraj;