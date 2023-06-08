import React from 'react'
import { Text, StyleSheet, TextInput } from 'react-native'
import { PostElement, PostElementType } from '../../../../utils/DataTypes';
import ImagePlaceholder from './Placeholders/ImagePlaceholder';
import TextElementPlaceholder from './Placeholders/TextElementPlaceholder';
import TextQPlaceholder from './Placeholders/TextQPlaceholder';
import YesNoQPlaceholder from './Placeholders/YesNoQPlaceholder';


type Props = {
  element: PostElement;
  deleteEnabled: boolean;
  removeID: (a: number) => void;
  reorderEnabled: boolean;
  setVisible: (a: any) => void;
  C: any;
};

const PostElementPlaceholder = ({ setVisible, C, element, reorderEnabled, deleteEnabled, removeID }: Props) => {
  if (element.type == PostElementType.VideoElement)
    return (<TextInput placeholder="press to enter your text" value={"egasdgagdag"}></TextInput>)
  else if (element.type == PostElementType.ImageElement)
    return (<ImagePlaceholder C={C} deleteEnabled={deleteEnabled} id={element.index} reorderEnabled={reorderEnabled} removeID={removeID} value={element}></ImagePlaceholder>);
  else if (element.type == PostElementType.YesNoQElement)
    return (<YesNoQPlaceholder C={C} setVisible={setVisible} value={element} reorderEnabled={reorderEnabled} id={element.index} removeID={removeID} deleteEnabled={deleteEnabled} ></YesNoQPlaceholder>);
  else if (element.type == PostElementType.TextQElement)
    return (<TextQPlaceholder C={C} setVisible={setVisible} value={element} reorderEnabled={reorderEnabled} id={element.index} removeID={removeID} deleteEnabled={deleteEnabled} text={"fs"}></TextQPlaceholder>);
  else if (element.type == PostElementType.TextElement)
    return (<TextElementPlaceholder C={C} setVisible={setVisible} value={element} reorderEnabled={reorderEnabled} id={element.index} removeID={removeID} deleteEnabled={deleteEnabled} ></TextElementPlaceholder>);

  else
    return (
      <TextInput placeholder="Your text..." />

    );
};


export default PostElementPlaceholder;