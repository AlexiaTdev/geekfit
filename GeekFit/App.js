import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ClassHome from './components/ClassHome';
import Contants from 'expo-constants';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Home />
      
    </View>
  );
}
//<ClassHome name = "alexia"/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eddfdf',
    marginTop:Contants.statusBarHeight
  },
});
