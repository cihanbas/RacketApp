import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProps } from '../../navigation/type'
import { colors } from '../../assets/colors'
import { appPading, normalize } from '../../utils/helper'
import { Icon, IconsEnum } from '../../assets/svg'
const stars = Array.from(Array(5).keys())
const RateUSControl = ({ navigation }: NavigationProps) => {
    const [selectedIndex, SetSelectedIndex] = useState<number>(-1)
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
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
                        {stars.map(i => <Pressable key={`${i}`} onPress={() => {
                            SetSelectedIndex(i)

                        }}>
                            <Icon name={selectedIndex >= i ? IconsEnum.starSolid : IconsEnum.starOutLine} size={normalize(34)}></Icon>
                        </Pressable>)}
                    </View>
                </View>
            </View>
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
        margin: appPading,
        borderRadius: normalize(12)

    },
    rateWrapper: {
        position: 'absolute',
        padding: normalize(12),
        backgroundColor: colors.white,
        borderRadius: normalize(58),
        top: normalize(-12),
        alignSelf: 'center'
    },
    content: {
        paddingTop: normalize(46)
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
    starWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})