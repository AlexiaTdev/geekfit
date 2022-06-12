import { StyleSheet,  View, Text, Image} from 'react-native'
import React, {useState} from 'react'
import InputProfil from '../components/InputProfil';
import QuestionnaireNav from '../components/QuestionnaireNav';


export default function QuestionnaireProfil({navigation}) {

  return (
    <View style = {styles.globalProfilStyle}>
        <View style = {styles.headerProfilStyle}>
            <Image  source={require('../src/logoGeekFit3.png')}/>
        </View>
        
        <Text style={styles.titleStyle}>PROFIL</Text>
        <InputProfil navigation={navigation}/>
        <QuestionnaireNav/>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        color: "white",
        fontSize:30
    },
    globalProfilStyle:{
        flex:1,
        backgroundColor:'#0E0E0E',
        justifyContent:"space-evenly"
    },
    headerProfilStyle: {
        alignItems: 'center'
    }
})