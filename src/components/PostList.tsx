import React, { useState, useRef, useEffect } from 'react'
import { FlatList, View, StyleSheet, Dimensions } from 'react-native'
import { getMoviesFromApiAsync } from '../utils/ApiCalls';
import { PostData } from '../utils/DataTypes';
import Post from './Post/Post';


type Props = {
  searchText: string;
};
const PostList = ({ searchText }: Props) => {

  const [flatListHeight, setFlatListHeight] = useState(200)
  const flatListRef = useRef<FlatList<PostData>>(null);
  const [scrollE, setScrollE] = useState(true);
  const [cols, setCols] = useState(1)
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };
  const [DATA, setDATA] = useState<PostData[]>([]);
  const getItemIndex = (item: PostData) => {
    const index = DATA.findIndex((dataItem) => dataItem.id === item.id);
    return index;
  };
  console.log("shilcres", searchText)
  useEffect(() => {
    console.log("dobavljam")
    getMoviesFromApiAsync().then((response) => {
      console.log("daslfjaf===", response)
      if (response != undefined)
        setDATA(response); console.log(JSON.stringify(DATA));
    })
  }, [searchText, cols])
  useEffect(() => {
    const { height, width } = Dimensions.get('window');
    console.log(width, height, 'widnow');
    setCols(width < 420 ? 1 : 2)

  })
  return (
    <FlatList
      key={cols}
      numColumns={cols}
      ref={flatListRef}
      scrollEnabled={scrollE}
      data={DATA.length != 0 ? (DATA.filter(data1 => searchText != "" ? data1.text.includes(searchText) : data1)) : []}
      keyExtractor={(item) => item.id.toString()}
      onLayout={(item) => { setFlatListHeight(item.nativeEvent.layout.height) }}
      renderItem={({ item }) => {
        return (<Post cols={cols} flatListHeight={flatListHeight} setScrollE={setScrollE} data={item} refi={scrollToIndex} index={getItemIndex(item)}></Post>)
      }}

    />
  );
};



export default PostList;