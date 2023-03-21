import React from 'react'
import  {Text,StyleSheet, TextInput} from 'react-native'
import { PostElement,PostElementType } from '../../../../utils/DataTypes';
import Image from './Elements/Image';
import TextQ from './Elements/TextQ';
import YesNoQ from './Elements/YesNoQ';


type Props = {
element:PostElement;
};


const PostElements =({element}:Props)=>{
    console.log("hhhhhhhhhhh=",JSON.stringify(element));
   if (element.type==PostElementType.VideoElement)
    return( <TextInput placeholder="press to enter your text" value={"egasdgagdag"}></TextInput>)
 else if ( element.type==PostElementType.ImageElement)
     return (<Image value={element} ></Image>);
   else if (element.type==PostElementType.YesNoQElement)
     return (<YesNoQ value={element} reorderEnabled={false} id={element.index} removeID={(a:number)=>{}} deleteEnabled={false} ></YesNoQ>);
   else if (element.type==PostElementType.TextQElement)
     return (<TextQ value={element}></TextQ>);
   else
     return (<Text>ldsafdlja</Text>);
};

const styles = StyleSheet.create({
    root:{
    },
});

export default PostElements;