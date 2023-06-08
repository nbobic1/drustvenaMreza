import React, { ReactNode } from 'react'
import { View, StyleSheet, ViewStyle } from 'react-native'
import { S } from '../../utils/Consts';


type Props = {
    children: ReactNode;
    mx?: number;
    px?: number;
    w?: number;
    bR?: number;
    bW?: number;
    bC?: string;
    style?: ViewStyle;
    C: any;
};


const Container = ({ C, children, mx, w, style, bC, bR, bW, px }: Props) => {

    const styles = StyleSheet.create({
        root: {
            width: w ? w : '100%',
            borderColor: bC,
            borderWidth: bW,
            borderRadius: bR,
            paddingLeft: px ? px : 0,
            paddingRight: px ? px : 0,
        },
    });
    if (style)
        return (
            <View style={style}>
                <View style={styles.root}>
                    {children}
                </View>
            </View>
        );
    else return (
        <View style={styles.root}>
            {children}
        </View>
    );
};


export default Container;