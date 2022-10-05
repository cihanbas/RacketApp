import React, { useEffect } from 'react';
import { Button, Image, StatusBar, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../assets/colors';
import { NavigationProps } from '../../navigation/type';
 
const HomeScreen = ({ navigation }: NavigationProps) => {
   
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('RateUsTest')
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='0180ae' />
            <View style={styles.topView} />
            <Button title='Test' onPress={() => navigation.navigate('RateUsTest')} />
            <Button title='Control' onPress={() => navigation.navigate('RateUsControl')} />
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