import { FlatList, Text } from 'react-native'
import React from 'react'
import { users } from './UserContactInfo'
import ContactItem from '../../components/ContactItem'
import { styles } from './styles'
const ContactListScreen = () => {
    const renderItem = ({ item }) => <ContactItem name={ item.name } email={item.email} />
    return (
        <FlatList
            data={users}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<Text style={styles.header}>Contacts</Text>}
        />
  )
}

export default ContactListScreen