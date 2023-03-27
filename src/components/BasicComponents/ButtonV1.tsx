import React, { ReactNode } from 'react'
import { Text, View, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children?: ReactNode;
    mx?: number;
    v?: number;//v=2 bordered not satureted button
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


const Button = ({ children, mx, w, v, bC, bR, bW, px, f, bg, title, onPress }: Props) => {

    const styles = StyleSheet.create({
        root: {
            flex: f ? f : 1,
            backgroundColor: bg ? bg : (v == 2 ? C.btn : C.primary),
            padding: 10,
            borderRadius: S.m,
            width: w ? w : '100%',
            alignSelf: 'center',
            borderWidth: v == 2 ? 2 : 0,
            borderColor: C.primaryLight,
        },
    });
    return (
        <Pressable onPress={onPress} style={styles.root}>
            {children}
            <Text style={{ alignSelf: 'center', color: v == 2 ? C.black : C.white }}>{title}</Text>
        </Pressable>
    );
};


export default Button;