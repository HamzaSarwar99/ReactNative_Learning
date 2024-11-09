import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

class SecondClass extends Component {
    constructor() {
        super();
        this.state = {
            name: 'hamza'
        }
    }
    updateName = () => {
        this.setState({name:'shoaib'})
    }
  render() {
    return (
      <View>
            <Text style={{ fontSize: 24 }}>Name:{this.state.name} age: { this.props.data}</Text>
            <Button title='update' onPress={this.updateName}/>
      </View>
    )
  }
}

export default SecondClass