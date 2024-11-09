import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffecHook = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('This is use effect hook');

    }, [])
    return (
        <View>
            <Text style={{ fontSize: 24 }}>UseEffecHook</Text>
            <Text style={{ fontSize: 24 }}>count:{count}</Text>
            <Button title='press me' onPress={() => setCount(count + 1)} />

        </View>
    )
}

export default UseEffecHook

const styles = StyleSheet.create({})