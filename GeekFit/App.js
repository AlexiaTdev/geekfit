import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Create from './components/Create';
import ClassHome from './components/ClassHome';
import Contants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Create/>
      
    </View>
  );
}
//<ClassHome name = "alexia"/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff',
    marginTop:Contants.statusBarHeight
  },
});
