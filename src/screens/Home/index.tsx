import React, { useEffect, useState } from 'react';
import { Button, Image, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { NavigationProps } from '../../navigation/type';
import { endpoints } from '../../services/endpoints';
import { ControlRateReponse, RateType, TestRateReponse, UserRequest, UserResponse } from '../../services/type';
const HomeScreen = ({ navigation }: NavigationProps) => {

    const [user, setUser] = useState<UserResponse | null>(null)
    useEffect(() => {

        getUser()
    }, [])
    useEffect(() => {
        if (user) {
            user.rateType === RateType.control ? checkControlType() : checkTestType()
        }

    }, [user])
    const checkControlType = async () => {
        try {
            const response = await (await endpoints.controlRate.get(user?.id)).data as ControlRateReponse[]
            if (response.length > 0) {
                const controlRate = response[0]
                if (!controlRate.isDisabled && controlRate.nextShowDate < new Date()) {
                    navigation.navigate('RateUsControl', { userId: user!.id, controlRate })
                }
            }
            else {
                console.log('response', response)
                navigation.navigate('RateUsControl', { userId: user!.id })
            }


        } catch (error) {

            navigation.navigate('RateUsControl', { userId: user!.id })
        }

    }
    const checkTestType = async () => {
        try {
            const response = await (await endpoints.testRate.get(user?.id)).data as TestRateReponse[]
            if (response.length > 0) {
                const testRate = response[0]
                if (!testRate.isDisabled && testRate.nextShowDate < new Date()) {
                    navigation.navigate('RateUsTest', { userId: user!.id, testRate })
                }
            }
            else {
                console.log('response', response)
                navigation.navigate('RateUsTest', { userId: user!.id })
            }


        } catch (error) {

            navigation.navigate('RateUsTest', { userId: user!.id })
        }
    }
    const getUser = async () => {
        const rateType = (Math.floor(Math.random() * 2) + 1) % 2 == 0 ? RateType.control : RateType.test
        //random rate type  

        try {
            const user = await (await endpoints.user.get()).data as UserResponse
            if (user) {
                setUser(user)

            }
        } catch (error) {
            const user: UserRequest = {
                rateType: RateType.test,
                name: "RateType",
            }
            await endpoints.user.post(user)
            getUser()
        }
    } 
    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='0180ae' />
            <View style={styles.topView} />
         


            <LinearGradient
                locations={[0, 1]}
                colors={[colors.gradientStartColor, colors.gradientEndColor]}
                style={styles.gradient}>
                <Image source={require('../../assets/img/racketpal.webp')} />
            </LinearGradient>
            <View style={styles.bottomView} />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topView: {
        flex: 1,
        backgroundColor: colors.gradientStartColor
    },
    bottomView: {
        flex: 1,
        backgroundColor: colors.gradientEndColor
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})