import React, { useState, useRef, useEffect } from 'react'
import { FlatList, View, StyleSheet, Dimensions } from 'react-native'
import { PostData } from '../utils/DataTypes';
import Post from './Post/Post';


type Props = {
  searchText: string;
  DATA: any;
};
const PostList = ({ searchText, DATA }: Props) => {

  const [flatListHeight, setFlatListHeight] = useState(200)
  const flatListRef = useRef<FlatList<PostData>>(null);
  const [scrollE, setScrollE] = useState(true);
  const [cols, setCols] = useState(1)
  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
  };
  // const [DATA, setDATA] = useState<PostData[]>([]);
  const getItemIndex = (item: PostData) => {
    const index = DATA.findIndex((dataItem: any) => dataItem.id === item.id);
    return index;
  };
  /*
  useEffect(() => {
    SecureStore.getItemAsync('token').then(token => {
      GetPosts(token).then(res => {
        setDATA(res);
      })
    })
  }, [searchText, cols])
  */
  useEffect(() => {
    const { height, width } = Dimensions.get('window');
    setCols(width < 420 ? 1 : 2)

  })
  return (
    <FlatList
      key={cols}
      numColumns={cols}
      ref={flatListRef}
      scrollEnabled={scrollE}
      data={DATA.length != 0 ? (DATA.filter((data1: any) => searchText != "" ? data1.title.includes(searchText) : data1)) : []}
      keyExtractor={(item) => item.id.toString()}
      onLayout={(item) => { setFlatListHeight(item.nativeEvent.layout.height) }}
      renderItem={({ item }) => {
        console.log('id=', item.id)
        return (<Post cols={cols} flatListHeight={flatListHeight} setScrollE={setScrollE} data={item} refi={scrollToIndex} index={getItemIndex(item)}></Post>)
      }}

    />
  );
};



export default PostList;