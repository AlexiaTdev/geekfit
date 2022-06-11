import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Connexion from './pages/Connexion';
import Inscription from './pages/Inscription';
import Contants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator()

function App() {
  
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Connexion} options={{ headerShown: false }}/>
        <Stack.Screen name="Inscription" component={Inscription} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </View>
  );
}

export default() => {
  return(
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff',
    marginTop:Contants.statusBarHeight
  },
});
