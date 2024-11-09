import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const itemList = [
    {
        title: ' Fruits',
        data: [
            { id: 1, name: ' Apple' },
            {id : 2, name: ' Mango'},
            {id : 3, name: ' Banana'},
            {id : 4, name: ' Peach'},  
        ],
    },
    {
        title: ' Vegetables',
        data: [
            { id: 5, name: ' Cocumber'},
            {id : 6, name: ' Bhindi'},
            {id : 7, name: ' Potato'},
            {id : 8, name: ' Tomato'},  
        ],
    },
    {
        title: ' Juices',
        data: [
            { id: 9, name: ' Pine Apple' },
            {id : 10, name: ' Mango Galla'},
            {id : 11, name: ' Strawberry'},
            {id : 12, name: ' Peach Malt'},  
        ],
    },
    {
        title: ' Drinks',
        data: [
            { id: 13, name: ' String' },
            {id : 14, name: ' Pepsi '},
            {id : 15, name: ' Coca Cola'},
            {id : 16, name: ' Peach Malt'},  
        ],
    },
];

const Sectionlist = () => {
    const renderItem = ({item}) => (
        <View>
            <Text style={styles.items}> {item.name} </Text>
        </View>
    )
    const renderSectionHeader = ({ section }) => (
        <View style={styles.titleContainer}>
            <Text style={styles.title}> {section.title} </Text>
        </View>
    )
  return (
    <View style={styles.container}>
          <SectionList
              sections={itemList}
              renderItem={renderItem}
              renderSectionHeader={renderSectionHeader}
              keyExtractor={(item)=>item.id}
          />
    </View>
  )
}

export default Sectionlist

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#f9f9f9'
    },
    titleContainer: {
        backgroundColor: 'black',
        margin: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 8,
        color:'white'
    },
    items: {
        fontSize: 16,
        margin: 10,
        backgroundColor: 'gray',
        padding: 10,
        borderRadius:5
    },
})