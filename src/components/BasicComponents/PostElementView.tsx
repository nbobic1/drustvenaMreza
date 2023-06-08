import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import { S } from '../../utils/Consts';
import Container from './Container';


type Props = {
    children: ReactNode;
    mx?: number;
    C: any;
};


const PostElementView = ({ C, children, mx }: Props) => {
    const styles = StyleSheet.create({
        root: {
            paddingHorizontal: 2 * S.m,
            paddingVertical: S.m,
        },
        item: {
            borderRadius: S.l,
            borderWidth: 0,
            borderColor: C.secundary,
            padding: 5,
            backgroundColor: C.white
        }
    });
    return (
        <View style={styles.root}  >
            <View style={styles.item}>

                {children}
            </View>
        </View>
    );
};



export default PostElementView;