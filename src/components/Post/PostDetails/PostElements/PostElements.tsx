import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import { PostElement, PostElementType } from '../../../../utils/DataTypes';
import Image from './Elements/Image';
import TextQ from './Elements/TextQ';
import YesNoQ from './Elements/YesNoQ';


type Props = {
  element: PostElement;
  C: any;
};


const PostElements = ({ element, C }: Props) => {
  console.log("hhhhhhhhhhh=", JSON.stringify(element));
  try {
    if (element.hasOwnProperty("style"))
      element.style = JSON.parse(element.style);
  } catch (e) {
  }
  if (element.type == PostElementType.VideoElement)
    return (<TextInput placeholder="press to enter your text" value={"egasdgagdag"}></TextInput>)
  else if (element.type == PostElementType.ImageElement)
    return (<Image value={element} ></Image>);
  else if (element.type == PostElementType.YesNoQElement)
    return (<YesNoQ C={C} value={element}   ></YesNoQ>);
  else if (element.type == PostElementType.TextQElement)
    return (<TextQ C={C} value={element}></TextQ>);
  else if (element.type == PostElementType.TextElement)
    return (<Text style={element.style}>{element.text}</Text>);
  else
    return (<Text>ldsafdlja</Text>);
};

const styles = StyleSheet.create({
  root: {
  },
});

export default PostElements;