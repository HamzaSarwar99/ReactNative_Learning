import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const ChildComponent = () => {
    useEffect(() => {
        return () => {
            console.log('i am a child component');
        }
    })
    return (
        <View>
            <Text style={{ fontSize: 24 }}>ChildComponent</Text>
        </View>
    )
}

export default ChildComponent

const styles = StyleSheet.create({})