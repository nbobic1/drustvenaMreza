import React, { useState, useEffect } from 'react'
import { View, Pressable, StyleSheet, Text } from 'react-native'
import ImageSearcher from '../../../../ImageSearcher';

import FastImage from 'react-native-fast-image'
import { ImageElement } from '../../../../../utils/DataTypes';

import { Video, AVPlaybackStatus, ResizeMode } from 'expo-av';
type Props = {
  deleteEnabled: boolean;
  id: number;
  removeID: (a: number) => void;
  value: ImageElement;
  reorderEnabled: boolean;
  C: any;
};


const ImagePlaceholder = ({ C, deleteEnabled, id, removeID, value, reorderEnabled }: Props) => {
  const [visible, setVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(value.url);
  useEffect(() => {
    console.log("useEffect")
    value.url = imgSrc;
  }, [imgSrc]);
  return (
    <View pointerEvents={reorderEnabled ? "none" : "auto"}>
      <Pressable disabled={!deleteEnabled} style={styles.root} onPress={() => { removeID(id) }}>
        <Pressable disabled={deleteEnabled} onPress={() => { setVisible(true) }}>
          {imgSrc == "" ? <Text style={{ color: C.textColor, alignSelf: 'center', textAlignVertical: "center", height: '100%' }}>Tap to add media</Text> :
            imgSrc.includes('.mp4') ?
              <Video
                source={{
                  uri: imgSrc,
                }}
                style={styles.image}
                resizeMode={ResizeMode.CONTAIN}
                isLooping={true}
                shouldPlay={true}
              />
              : <FastImage
                style={styles.image}
                source={{
                  uri: imgSrc, //'file:///data/user/0/com.nbobic1.diplomskiv2/cache/rn_image_picker_lib_temp_31ffef40-758e-4cea-bcc1-0febe7af1577.jpg',
                  // 'https://lh3.googleusercontent.com/pw/AMWts8DkucTWRaXQmiyVB4bHa00SyjszD67W6T9hlb3w_q3pzgApKkN6KoH13FvM2i8htGYWYqotdeNz3AizyewZA_ExI8qCjjdlxb1wU3_qnMkmU0yDp7zGy80KhwJLdNMSUcJi6XuTfWEOteftPw2YD07FWxYo75lTxpFiXBC746jmdQkYEDzoMr4aRuueMghqkVTSnf5O3tKB1W_pOt3YbH_4EDg1bgXP67QlAUBbs0zXVDYOcvWngAr3pHb35xHBfgNa5VkGhSFKz5tNBDPR5SuuTCTdAo9SB2t42vewqP_SUWQJf-j1_FG984fYDWGOCxeq5DmT_0NUdDhv7md5WMk9DO57aMr080_vOX-Wxuj7vbVTGLtMXIYhIU2EAghgId71TwBtOvUWIHZLKyliSEnhXqIGqZHDN7RkkoagWy9-AcZfFxl1irGimEg3hgpTjFdtTfTKCl5YelrbjYXywauJ3gWl3nK7PutKJ6D4btdD40P_p0m4zLO5-B0IiCIgd4WTweyvTOKr5duJtuRXB3CJmEcdHichkUCjtkivTFSFEdIotNfQHDmM4UWFosiX149SUKqwvOwhGToCgqostNBJyqktEqFmWIsIZCfGKeSHhq-WnMUwZMPo09FjteNH5jeNK5FGLH45DvCX1TvwqdreFarIRb-9CWfu8d2LfP6CWUiujNZ_gP4lFtyeE6liM9Y4dXFpV2chc9x-n9iwzhxi3c0d8EOTLT1kGdc8XNQQkO_KgQKnUHFz6bMGf6CUijj9pU8pVDr3y57DRQVOfNsAo492YpT7n5OA8QCZ5fILyin-K101JZeYixJ1Ec8gZCZ23yZGJ9RlwWyxHI-wz2BKYDMvAD23uMrXw7-Lh8RCUNz35ONVTpB7MlvXWcu0HH6Zlbr8Uc-W9Y8mfRTzROtQg-ViHXJrQj9dA6syLglA6nxvhT5nGPlSdI9X2sZu1mRug_zUe_5EL_89zXWwm1dU-HvREsEzBKRgreFmsoy0qi-s76YsQZgfWDEfg8E8SOftydbsGn7d-Z6G0F6yGiKvNIkyKRJ_vmsBYqA=w436-h969-s-no?authuser=0',
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
          }
        </Pressable>
        <ImageSearcher C={C} visible={visible} setImgSrc={setImgSrc} setVisibile={setVisible}></ImageSearcher>
      </Pressable>
    </View >
  );
};

const styles = StyleSheet.create({
  root: {
    height: 200,
    width: '100%',
  },
  image: {
    height: 150,
    width: 150,
    alignSelf: 'center',
  },
});
export default ImagePlaceholder