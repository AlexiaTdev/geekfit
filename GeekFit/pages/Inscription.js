import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import Homeheader from '../components/Homeheader';
import InputId_Inscription from '../components/InputId_Inscription';

function Inscription({navigation}) {
    const [activity, setActivity]=useState(true)
  return (
    <View style = {{flex:1, backgroundColor:'#0E0E0E'}}>
        <Homeheader/>
        <InputId_Inscription navigation={navigation}/>          
    </View>
  )
}

export default Inscription