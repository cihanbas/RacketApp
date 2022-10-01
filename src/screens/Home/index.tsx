import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icon, IconsEnum } from '../../assets/svg';
import { NavigationProps } from '../../navigation/type';

const HomeScreen = ({ navigation }: NavigationProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Icon name={IconsEnum.award} color='red' size={33} />
            <Pressable onPress={() => navigation.navigate('RateUs')}>
                <Text>
                    ShowModal
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})