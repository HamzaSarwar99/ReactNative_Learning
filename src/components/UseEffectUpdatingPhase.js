import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseEffectUpdatingPhase = () => {
    const [counter, setCounter] = useState(0);
    const [score, setScore] = useState(10);
    // useEffect(() => {
    //     console.log('update counter');
    // }, [counter])
    // useEffect(() => {
    //     console.log('update score');
    // }, [score])
    return (
        <View>
            <Text style={{ fontSize: 20, margin: 10 }}>UseEffectUpdatingPhase</Text>
            <Text style={{ fontSize: 20, margin: 10 }}>Counter:{counter}</Text>
            <Text style={{ fontSize: 20, margin: 10 }}>Score:{score}</Text>
            <Button title='update Counter' onPress={() => setCounter(counter + 1)} />
            <Button title='update score' onPress={() => setScore(score + 10)} />
            <NewComp count={counter} points={ score} />

        </View>
    )
}

const NewComp = ({ count, points }) => {
    useEffect(() => {
        console.log('i am a child component');
        
    },[count])
    return (
        <View>
            <Text style={{ fontSize: 20, margin: 10 }}>NewComp</Text>
            <Text style={{ fontSize: 20, margin: 10 }}>count:{count }</Text>
            <Text style={{ fontSize: 20, margin: 10 }}>score:{points}</Text>

        </View>
    )
}

export default UseEffectUpdatingPhase

const styles = StyleSheet.create({})