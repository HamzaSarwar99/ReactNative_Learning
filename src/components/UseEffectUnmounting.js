import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent';

const UseEffectUnmounting = () => {
    const [showChild, setShowChild] = useState(true);
  return (
    <View>
          <Text style={{ fontSize: 24 }}>UseEffectUnmounting</Text>
          {
              showChild? <ChildComponent /> : null
          }
          <Button title='Toggle' onPress={()=>setShowChild(!showChild)}/>
    </View>
  )
}

export default UseEffectUnmounting

const styles = StyleSheet.create({})