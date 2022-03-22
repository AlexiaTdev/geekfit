import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'
import Homeheader from '../components/Homeheader';
import InputId from '../components/InputId';



function Connexion() {

   const renderData = (item) => {

   }
  return (
      <View style = {{flex:1, backgroundColor:'#0E0E0E'}}>
          <Homeheader/>
          <InputId/>          
      </View>



  )
}

const styles = StyleSheet.create({

})

export default Connexion