import React from 'react'
import  {Text,StyleSheet, TextInput} from 'react-native'
import { PostElement,PostElementType } from '../../../../utils/DataTypes';
import ImagePlaceholder from './Placeholders/ImagePlaceholder';
import TextQPlaceholder from './Placeholders/TextQPlaceholder';
import YesNoQPlaceholder from './Placeholders/YesNoQPlaceholder';


type Props = {
element:PostElement;
};


const PostElementPlaceholder =({element}:Props)=>{
    console.log("hhhhhhhhhhh=",JSON.stringify(element));
   if (element.type==PostElementType.VideoElement)
    return( <TextInput placeholder="press to enter your text" value={"egasdgagdag"}></TextInput>)
 else if ( element.type==PostElementType.ImageElement)
     return (<ImagePlaceholder deleteEnabled={false} id={element.index} removeID={(a:number)=>{}}></ImagePlaceholder>);
   else if (element.type==PostElementType.YesNoQElement)
     return (<YesNoQPlaceholder value={element.question} reorderEnabled={false} id={element.index} removeID={(a:number)=>{}} deleteEnabled={false} ></YesNoQPlaceholder>);
   else if (element.type==PostElementType.TextQElement)
     return (<TextQPlaceholder value={element.question} reorderEnabled={false} id={element.index} removeID={(a:number)=>{}} deleteEnabled={false} text={"fs"}></TextQPlaceholder>);
   else
     return (<Text>ldsafdlja</Text>);
};

const styles = StyleSheet.create({
    root:{
    },
});

export default PostElementPlaceholder;