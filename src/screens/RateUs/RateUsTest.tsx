import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { Icon, IconsEnum } from '../../assets/svg'
import { Text } from '../../components'
import { NavigationStackProps } from '../../navigation/type'
import { endpoints } from '../../services/endpoints'
import { TestRateReponse, UserResponse } from '../../services/type'
import { appPading, normalize, rateApp } from '../../utils/helper'

const RateUSTest = ({ navigation, route }: NavigationStackProps) => { 
    const { testRate, user } = route.params as { testRate: TestRateReponse | undefined, user: UserResponse }
    const userId = user.id
    if (testRate) {
        testRate.displayCount += 1
    }
 

    const goBack = () => {
        if (testRate) {
            testRate.closedCount += 1 
            endpoints.testRate.put(userId, testRate)
        }
        navigation.goBack()
    }
    const rateUs = () => {
        helper()
        rateApp()
    }
    const notYet = () => {
        if (testRate) {
            testRate.isDisabled = true
            testRate.isRated = false
            endpoints.testRate.put(userId, testRate)
        }
        else {
            const data = {
                "closeCount": 0,
                "isDisabled": true,
                "isRated": false,
                "displayCount": 1
            }
            endpoints.testRate.post(userId, data)
        }
        navigation.goBack()
        setTimeout(() => {
            navigation.navigate('Settings')
        }, 500);


    }
    const helper = () => {
        if (testRate) {
            testRate.isDisabled = true
            testRate.isRated = true
            endpoints.testRate.put(userId, testRate)
        }
        else {
            const data = {
                "closeCount": 0,
                "isDisabled": true,
                "isRated": true,
                "displayCount": 1
            }
            endpoints.testRate.post(userId, data)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Pressable style={styles.closeBtn} onPress={goBack}>
                    <Icon name={IconsEnum.close} size={normalize(18)} />
                </Pressable>
                <View style={styles.starsWrapper}>
                    <Icon name={IconsEnum.star}
                        color={colors.paleYellow}
                        size={normalize(31)}
                    />
                    <View style={styles.starBottomPadding} >
                        <Icon name={IconsEnum.star} size={normalize(40)} color={colors.yellow} />
                    </View>

                    <Icon name={IconsEnum.award} size={normalize(70)} />
                    <View style={styles.starBottomPadding} >
                        <Icon name={IconsEnum.star} size={normalize(40)} color={colors.yellow} />
                    </View>
                    <Icon
                        name={IconsEnum.star}
                        color={colors.paleYellow}
                        size={normalize(31)} />
                </View>
                <Text style={styles.title}>
                    Enjoying RacketPal?
                </Text>
                <Text style={styles.description}>
                    Your App Store review
                    greatly helps spread the word and grow the racket sports community!
                </Text>
                <Pressable style={styles.rateBtn} onPress={rateUs}>
                    <Text style={styles.rateBtnTxt}>
                        Rate Us
                    </Text>
                </Pressable>
                <Pressable onPress={notYet}>
                    <Text style={styles.footerTxt}>
                        Not yet? Give us feedback
                    </Text>
                </Pressable>

            </View>

        </SafeAreaView>
    )
}

export default RateUSTest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.modalBackground,
        justifyContent: 'center'
    },
    content: {
        backgroundColor: colors.white,
        padding: appPading,
        margin: appPading,
        borderRadius: normalize(12)

    },
    closeBtn: {
        alignSelf: 'flex-end'
    },
    starsWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        paddingVertical: normalize(24),
    },
    title: {
        fontSize: normalize(16),
        fontWeight: '700',
        paddingVertical: normalize(6),
        textAlign: 'center'
    },
    description: {
        fontSize: normalize(14),
        fontWeight: '400',
        paddingVertical: normalize(12),
        textAlign: 'center'
    },
    rateBtn: {
        backgroundColor: colors.blue,
        borderRadius: 6,
        marginVertical: appPading
    },
    rateBtnTxt: {
        fontSize: normalize(14),
        fontWeight: '700',
        paddingVertical: normalize(12),
        textAlign: 'center',
        color: colors.white
    },
    footerTxt: {
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: normalize(14),
        fontWeight: '400',
    },
    starBottomPadding: {
        paddingBottom: normalize(6)
    }
})