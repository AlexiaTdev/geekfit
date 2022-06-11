import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native';
import Homeheader from '../components/Homeheader';
import InputId from '../components/InputId';

function Inscription(props) {
    const [activity, setActivity]=useState(true)
  return (
    <View style = {{flex:1, backgroundColor:'#0E0E0E'}}>
        <Homeheader/>
        <InputId/>
        <Text>essai</Text>        
    </View>
  )
}

export default Inscription