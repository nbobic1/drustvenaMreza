import React, { ReactNode, useState } from 'react'
import { Text, View, StyleSheet, ViewStyle, Pressable } from 'react-native'
import { C, S } from '../../utils/Consts';


type Props = {
    children?: ReactNode;
    mx?: number;
    v?: string;//v=2 bordered not satureted button
    px?: number;
    w?: any;
    bR?: number;
    bW?: number;
    bC?: string;
    initialValue?: any;
    title: string;
    bg?: string;
    f?: number;
    onPress?: () => void;
};


const Button = ({ children, mx, w, v, bC, bR, bW, px, f, bg, title, onPress, initialValue }: Props) => {
    if (v == "empty") {
        const styles = StyleSheet.create({
            root: {
                flex: f ? f : 1,
                backgroundColor: bg ? bg : C.btn,
                padding: 10,
                borderRadius: S.m,
                width: w ? w : '100%',
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: C.primaryLight,
            },
        });
        return (
            <Pressable onPress={onPress} style={styles.root}>
                {children ? children :
                    <Text style={{ alignSelf: 'center', color: C.black }}>{title}</Text>}
            </Pressable>
        );
    }
    else if (v == "switch") {
        const [state, setState] = useState(initialValue);
        const styles = StyleSheet.create({
            root: {
                flex: f ? f : 1,
                backgroundColor: bg ? bg : C.btn,
                padding: 10,
                borderRadius: S.m,
                width: w ? w : '100%',
                alignSelf: 'center',
                borderWidth: 2,
                borderColor: state ? C.primaryLight : '#ffffff00',
            },
        });
        return (
            <Pressable onPress={() => { setState(!state); if (onPress != undefined) onPress() }} style={styles.root}>
                {children ? children :
                    <Text style={{ alignSelf: 'center', color: C.black }}>{title}</Text>}
            </Pressable>
        );
    }
    else {
        const styles = StyleSheet.create({
            root: {
                flex: f ? f : 1,
                backgroundColor: bg ? bg : C.primary,
                padding: 10,
                borderRadius: S.m,
                width: w ? w : '100%',
                alignSelf: 'center',
                borderColor: C.primaryLight,
            },
        });
        return (
            <Pressable onPress={onPress} style={styles.root}>
                {children ? children :
                    <Text style={{ alignSelf: 'center', color: C.white }}>{title}</Text>}
            </Pressable>
        );
    }
};


export default Button;