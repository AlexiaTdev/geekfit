import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

export default function QuestionnaireNav() {
  return (
    <View style={styles.navQuestionnaireGlobalStyle}>
      <Text style={{textDecorationLine: 'underline', color:'white'}}>Passer cette étape</Text>
      <Icon name={'arrow-right'} color='#FD8403' size={60}/>
    </View>
  )
}

const styles = StyleSheet.create({
    navQuestionnaireGlobalStyle:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})