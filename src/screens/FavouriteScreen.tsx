import React, { useState, useRef } from 'react';

import FastImage from 'react-native-fast-image'
import { Camera, CameraType } from 'expo-camera';
import { TouchableOpacity } from 'react-native';

import { Modal, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
const FavouriteScreen = () => {
  const [visible, setVisible] = useState(false);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef<Camera>(null);
  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.containerC}>
        <Text style={{ color: C.textColor }} style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType () {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  return (
    <View style={styles.containerC}>
      <Camera style={styles.camera} ref={cameraRef} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => {
            if (null != cameraRef.current) cameraRef.current.takePictureAsync({ quality: 0 }).then(a => {
              console.log(a.uri); cameraRef.current?.getSupportedRatiosAsync().then((availablePictureSizes) => { console.log(availablePictureSizes[0]) });


            })
          }}>
            <Text style={[{ color: C.textColor }, styles.text]}>Click</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={[{ color: C.textColor }, styles.text]}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  containerC: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default FavouriteScreen;