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
        <Container style={styles.root} mx={mx} >
            {children}
        </Container>
    );
};

const styles = StyleSheet.create({
    root: {
        borderRadius: S.l,
        borderWidth: S.s,
        borderColor: C.secundary,
        padding: S.s,
    },
});

export default PostElementView;