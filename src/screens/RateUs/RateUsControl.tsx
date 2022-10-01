import React, { useEffect, useRef, useState } from 'react'
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { Icon, IconsEnum } from '../../assets/svg'
import { NavigationProps } from '../../navigation/type'
import { appPading, normalize } from '../../utils/helper'
import RateControlInput from './components/input'
const currentValue = -1
const stars = [1, 2, 3, 4, 5]
const RateUSControl = ({ navigation }: NavigationProps) => {
 
    const [selectedIndex, SetSelectedIndex] = useState<number>(currentValue)
    const translation = useRef(new Animated.Value(0)).current;
    useEffect(() => {

        if (selectedIndex > 3 || selectedIndex !== currentValue) {
            // hideInput()

            showInput()
        }
   
    }, [selectedIndex])

    const showInput = () => {

        Animated.timing(translation, {
            toValue: 100,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }


    const remindMeLater = () => {
        navigation.goBack()
    }
    const onSelect = (value: number) => {
        if (value > 3 && selectedIndex === currentValue) { 
                navigation.goBack()     
        }
        else {
            SetSelectedIndex(value)
        } 
    }
    return (
        <SafeAreaView style={styles.root}>
            <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }} >
                <Animated.View style={[styles.container, {
                    borderBottomLeftRadius: selectedIndex <= 4 ? normalize(6) : 0,
                    borderBottomRightRadius: selectedIndex <= 4 ? normalize(6) : 0
                }]}>
                    <View style={styles.rateWrapper}>
                        <Icon name={IconsEnum.rate} size={normalize(46)}></Icon>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            Enjoying RacketPal?
                        </Text>
                        <Text style={styles.description}>
                            Tap a star to rate it on the App store
                        </Text>
                        <View style={styles.starWrapper}>
                            {stars.map(i => <Pressable key={`${i}`} onPress={() => onSelect(i)}>
                                <Icon name={selectedIndex >= i ? IconsEnum.starSolid : IconsEnum.starOutLine} size={normalize(34)}></Icon>
                            </Pressable>)}
                        </View>
                        <Animated.View style={{
                            opacity: translation.interpolate({
                                inputRange: [0, 100],
                                outputRange: [1, 0],
                            }),
                        }}>
                            <Pressable onPress={remindMeLater}>
                                <Text style={styles.footerTxt}>
                                    REMIND ME LATER
                                </Text>
                            </Pressable>
                        </Animated.View>
                    </View>
                </Animated.View>
                <RateControlInput animatedValue={translation} navigation={navigation} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
    )
}

export default RateUSControl

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        justifyContent: 'center'
    },
    container: {
        backgroundColor: colors.white,
        padding: appPading,
        marginHorizontal: appPading,
        borderTopLeftRadius: normalize(6),
        borderTopRightRadius: normalize(6)
        // borderRadius: normalize(6)

    },
    rateWrapper: {
        position: 'absolute',
        padding: normalize(18),
        backgroundColor: colors.white,
        borderRadius: normalize(84),
        top: normalize(-20),
        alignSelf: 'center',

    },
    content: {
        paddingTop: normalize(44)
    },
    title: {
        fontSize: normalize(18),
        fontWeight: '600',
        paddingVertical: normalize(6),
        textAlign: 'center'
    },
    description: {
        fontSize: normalize(12),
        fontWeight: '400',
        paddingVertical: normalize(6),
        textAlign: 'center'
    },
    footerTxt: {
        fontSize: normalize(10),
        fontWeight: '700',
        paddingVertical: normalize(12),
        textAlign: 'center',
        color: '#9E9DA2'
    },
    starWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: normalize(12)
    },

})