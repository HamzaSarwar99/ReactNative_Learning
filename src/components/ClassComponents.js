import React, { Component } from "react";
import { Text, View } from "react-native";
import SecondClass from "./SecondClass";

class ClassComponents extends Component{
    render() {
        const age = 22;
        return (
            <View>
                <Text style={{ fontSize: 24 }}>Hello, World!</Text>
                <SecondClass data={ age } />
            </View>
        )
    }
}

export default ClassComponents;