import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
const Data = [
    { id: 1, title: 'item 1' },
    { id: 2, title: 'item 2' },
    { id: 3, title: 'item 3' },
    { id: 4, title: 'item 4' },
    { id: 5, title: 'item 5' },
    { id: 6, title: 'item 6' },
    { id: 7, title: 'item 7' },
    { id: 8, title: 'item 8' },
    { id: 9, title: 'item 9' },
    { id: 10, title: 'item 10' },
    { id: 11, title: 'item 11' },
    { id: 12, title: 'item 12' },
    { id: 13, title: 'item 13' },
    { id: 14, title: 'item 14' },
    { id: 15, title: 'item 15' },
    { id: 16, title: 'item 16' },
    { id: 17, title: 'item 17' },
    { id: 18, title: 'item 18' },


];
const FlatlistComponent = () => {
    const renderItem = ({ item }) => (
        <View style={styles.itemcontainer}>
            <Text style={styles.itemTitle}>{item?.title}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FlatlistComponent</Text>
            <FlatList
                data={Data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

export default FlatlistComponent

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0',
    },
    itemcontainer: {
        backgroundColor: 'crimson',
        margin: 12,
        padding: 14,
        borderRadius: 8,
        borderColor: 'black',
        borderWidth: 1,
        shadowOffset: 1,
        shadowColor: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    itemTitle: {
        fontSize: 16,
        color: '#f9f9f9'
    },
})