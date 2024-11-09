import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    console.log('Your email is ', email);
    console.log('Your Password is ', password);
    setEmail('');
    setPassword('');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginForm</Text>

      <TextInput
        style={styles.input}
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholderTextColor='#999'
      />

      <TextInput
        style={styles.input}
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        placeholderTextColor='#999'
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  )
}

export default LoginForm

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  input: {
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    height: 50,
    margin: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: 'crimson',
    margin: 10,
    padding: 10,
    borderRadius: 8
  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  },
})