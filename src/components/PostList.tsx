import React,{ useState,useRef, useEffect } from 'react'
import  {FlatList,View,StyleSheet} from 'react-native'
import { DataItem } from '../utils/DataTypes';
import Post from './post';


type Props = {
cols:number;
};


const PostList =({cols}:Props)=>{
    
const [flatListHeight, setFlatListHeight] = useState(200)
const flatListRef = useRef<FlatList<DataItem>>(null);
const [scrollE,setScrollE] = useState(true);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };
  const DATA:DataItem[]=[
    {
      text:"Polazak na fakultete",
      imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg',
      data:[],
    },
    {
        text:"Koristenje javnog prevoza",
        imgSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVGmJdtlkEEO33ePZHLPVsODSNjPjKPUgnR1OSLalmxgMVhDQkSc4OnYfrgVlxCF_b6A4&usqp=CAU',
        data:[],
      },
      {
        text:"Izazovi velikog grada",
        imgSrc:'https://media.istockphoto.com/id/887494452/photo/abstract-night-cityscape-blue-light-filter-can-use-to-display-or-montage-on-product.jpg?b=1&s=170667a&w=0&k=20&c=eXcpdTTACaLxACjQamcZdBkFublurm_FUUlqhwJble0=',
        data:[],
      },
      {
        text:"moja appp likacijaa5",
        imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg',
        data:[],
      },
      {
        text:"moja appp likacijaa3",
        imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg',
        data:[],
      },
      {
        text:"moja appp likacijaa2",
        imgSrc:'https://thumbs.dreamstime.com/z/hongkong-china-students-go-home-school-tuen-mun-area-student-his-way-54760393.jpg',
        data:[],
      },
 ];
 const getItemIndex = (item: DataItem) => {
  const index = DATA.findIndex((dataItem) => dataItem.text === item.text);
  return index;
};

return (
    <View style={styles.root}>
             <FlatList
        key={cols}
        numColumns={cols}
        ref={flatListRef}
       scrollEnabled={scrollE}
      data={DATA}
        keyExtractor={(item) => item.text}
        onLayout={(item) =>{setFlatListHeight(item.nativeEvent.layout.height)}}
        renderItem={({item}) =>{
          console.log("\nrenderamTT",item.text)
          return (<Post flatListHeight={flatListHeight} setScrollE={setScrollE} data={item}  refi={scrollToIndex} index={getItemIndex(item)}></Post>)}}
        
        />
    </View>
);
};

const styles = StyleSheet.create({
    root:{
    },
});

export default PostList;