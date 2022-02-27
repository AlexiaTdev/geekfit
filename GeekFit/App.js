import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import ClassHome from './components/ClassHome';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Home />
      <ClassHome name = "alexia"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
