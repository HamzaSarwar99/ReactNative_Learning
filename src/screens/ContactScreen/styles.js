import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical:15
    },

    list: {
        backgroundColor:'#f0f0f0',
        fontSize: 16,
        // margin:10,
        marginVertical: 15,
    },
    item: {
        backgroundColor:'crimson',
        padding: 10,
        margin:10,
        marginVertical: 10,
        borderRadius:5,
    },
    name: {
        fontSize: 16,
        padding: 6,
        color:'#fff'
    },
    email: {
        fontSize: 16,
        padding: 6,
        color:'#000'
    }
});