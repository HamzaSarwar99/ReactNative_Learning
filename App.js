import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import FlatlistComponent from './src/components/FlatlistComponent';
import Sectionlist from './src/components/Sectionlist';
import LoginForm from './src/components/LoginForm';
import ContactListScreen from './src/screens/ContactScreen/ContactListScreen';
import ClassComponents from './src/components/ClassComponents';
import UseEffecHook from './src/components/UseEffecHook';
const App = () => {
  return (
    <SafeAreaView>
      {/* <FlatlistComponent /> */}
      {/* <Sectionlist/> */}
      {/* <LoginForm /> */}
      {/* <ContactListScreen/> */}
      {/* <ClassComponents /> */}
      <UseEffecHook/>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
