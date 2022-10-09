import React, { memo, useState } from 'react'
import { Animated, Keyboard, Pressable, StyleSheet, Text, TextInput } from 'react-native'
import { colors } from '../../../assets/colors'
import { NavigationStackProps } from '../../../navigation/type'
import { appPading, normalize } from '../../../utils/helper'
interface P {
    animatedValue: Animated.Value,
    navigation: NavigationStackProps['navigation']
    onSubmit: (text: string) => void
}
const RateControlInput = memo(({ animatedValue, navigation, onSubmit }: P) => {
    const [textValue, setTextValue] = useState<string>('')
    const send = () => {
        Keyboard.dismiss()
        onSubmit(textValue)

    }
    return (



        <Animated.View style={{
            opacity: animatedValue.interpolate({
                inputRange: [0, 100],
                outputRange: [0, 1],
            }),
            transform: [{
                translateY: animatedValue.interpolate({
                    inputRange: [0, 100],
                    outputRange: [-200, -50],
                }),

            }],
            zIndex: animatedValue.interpolate({
                inputRange: [0, 2],
                outputRange: [-1, 2],
            }),

            paddingHorizontal: appPading,
            marginHorizontal: appPading,
            backgroundColor: colors.white,
            borderBottomLeftRadius: normalize(6),
            borderBottomRightRadius: normalize(6)
        }}>


            <Text style={styles.inputLabel}>
                ANY FEEDBACK FOR US?
            </Text>
            <TextInput
                value={textValue}
                onChangeText={val => setTextValue(val)}
                style={styles.input}
                numberOfLines={5}
                multiline
                returnKeyType='send'
                returnKeyLabel='Submit'
                onSubmitEditing={send}
                placeholderTextColor={colors.black}
            />
            <Pressable style={styles.submitBtn} onPress={send}>
                <Text style={styles.btnTxt}>
                    Rate Us
                </Text>
            </Pressable>
            <Animated.View style={{

                ...StyleSheet.absoluteFillObject,
                zIndex: animatedValue.interpolate({
                    inputRange: [0, 15],
                    outputRange: [1, -2],
                }),
            }}>

            </Animated.View>
        </Animated.View>
    )
})

export default RateControlInput

const styles = StyleSheet.create({
    input: {
        padding: normalize(10),
        borderWidth: 1,
        borderRadius: 6,
        borderColor: colors.yellow,
        height: normalize(110),
        fontSize: normalize(12),
        fontWeight: '400',
        color: colors.black
    },
    inputLabel: {
        fontSize: normalize(10),
        fontWeight: '700',
        paddingVertical: normalize(12),
        color: colors.lightYellow
    },
    submitBtn: {
        backgroundColor: colors.yellow,
        borderRadius: 6,
        marginVertical: appPading
    },
    btnTxt: {
        fontSize: normalize(14),
        fontWeight: '700',
        paddingVertical: normalize(12),
        textAlign: 'center',
        color: colors.white
    },
})