import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children: ReactNode;
    mx?: number;
    px?: number;
    w?: number;
    bR?: number;
    bW?: number;
    bC?: string;
};


const Row = ({ children, mx, w, bC, bR, bW, px }: Props) => {

    const styles = StyleSheet.create({
        root: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
            padding: 10,
        },
    });
    return (
        <View style={styles.root}>
            {children}
        </View>
    );
};


export default Row;