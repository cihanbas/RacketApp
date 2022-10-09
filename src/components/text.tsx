import React from 'react';
import {
    StyleSheet,
    Text as NativeText,
    TextProps,
    TextStyle,
} from 'react-native';
import { colors } from '../assets/colors';

interface TextPropTypes extends TextProps {
    children: string | undefined;
    style?: object;
    type?: TextStyle;
} 
export function Text({
    children,
    style,
    ...props
}: TextPropTypes) {
    return children ? (
        <NativeText
            style={StyleSheet.flatten([styles.text, style])}
            accessibilityRole="text"
            testID="text"
            {...props}>
            {children}
        </NativeText>
    ) : null;
}
const styles = StyleSheet.create({
    text: {
        textAlign: 'left',
        color: colors.black,
        fontFamily: 'avenir',
    },
});
