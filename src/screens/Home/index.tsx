import React, { useEffect } from 'react';
import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, IconsEnum } from '../../assets/svg';
import { NavigationProps } from '../../navigation/type';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = ({ navigation }: NavigationProps) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('RateUs')
        }, 3000);


    }, [])

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor='0180ae' />
            <View style={styles.topView} />
            <LinearGradient

                locations={[0, 1]}
                colors={['#0180ae', '#23b99b']}

                style={styles.gradient}
            >
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
        backgroundColor: 'white'
    },
    topView: {
        flex: 1,
        backgroundColor: '#0180ae'
    },
    bottomView: {
        flex: 1,
        backgroundColor: '#23b99b'
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})