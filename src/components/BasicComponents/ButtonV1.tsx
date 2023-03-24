import React, { ReactNode } from 'react'
import { Text, View, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children?: ReactNode;
    mx?: number;
    px?: number;
    w?: number;
    bR?: number;
    bW?: number;
    bC?: string;
    title: string;
    bg?: string;
    onPress?: () => void;
};


const Button = ({ children, mx, w, bC, bR, bW, px, bg, title, onPress }: Props) => {

    const styles = StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: bg ? bg : '#d24040',
            padding: 10,
            borderRadius: 8,
        },
    });
    return (
        <Pressable onPress={onPress} style={styles.root}>
            {children}
            <Text style={{ alignSelf: 'center' }}>{title}</Text>
        </Pressable>
    );
};


export default Button;