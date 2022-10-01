import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationProps } from '../../navigation/type'

const RateUS = ({ navigation }: NavigationProps) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>RateUS</Text>
            <Pressable onPress={() => navigation.goBack()}>
                <Text>
                    Hide
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default RateUS

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.5)'
    }
})