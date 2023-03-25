import React, { ReactNode } from 'react'
import { View, StyleSheet } from 'react-native'
import { C, S } from '../../utils/Consts';
import Container from './Container';


type Props = {
    children: ReactNode;
    mx?: number;
};


const PostElementView = ({ children, mx }: Props) => {
    return (
        <View style={styles.root}  >
            <View style={styles.item}>

                {children}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        padding: 10,
    },
    item: {
        borderRadius: S.l,
        borderWidth: 0,
        borderColor: C.secundary,
        padding: 15,
        backgroundColor: '#42213133'
    }
});

export default PostElementView;