import React, { ReactNode } from 'react'
import { Text, View, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children?: ReactNode;
    mx?: number;
    px?: number;
    w?: any;
    bR?: number;
    bW?: number;
    bC?: string;
    title: string;
    bg?: string;
    f?: number;
    onPress?: () => void;
};


const Button = ({ children, mx, w, bC, bR, bW, px, f, bg, title, onPress }: Props) => {

    const styles = StyleSheet.create({
        root: {
            flex: f ? f : 1,
            backgroundColor: bg ? bg : '#d24040',
            padding: 10,
            borderRadius: 8,
            width: w ? w : '100%',
            alignSelf: 'center',
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