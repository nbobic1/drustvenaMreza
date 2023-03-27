import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children: ReactNode;
    mx?: number;
    px?: number;
    py?: number;
    w?: any;
    bR?: number;
    bW?: number;
    g?: number;
    f?: number;
    bC?: string;
    bg?: string;
};


const Row = ({ g, children, f, mx, w, bg, bC, bR, bW, px, py }: Props) => {

    const styles = StyleSheet.create({
        root: {
            width: w ? w : '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: g ? g : 10,
            borderColor: bC ? bC : C.white,
            borderWidth: bW ? bW : 0,
            alignSelf: 'center',
            borderRadius: bR ? bR : 0,
            backgroundColor: bg ? bg : '#fff',
            paddingHorizontal: px ? px : 10,
            paddingVertical: py ? py : 10,
        },
    });
    return (
        <View style={styles.root}>
            {children}
        </View>
    );
};


export default Row;