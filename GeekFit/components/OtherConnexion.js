import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';

function OtherConnexion() {
  return (

        <View style={styles.OtherViewOptionStyle}>
            <View style={styles.TextConnexionViewOptionStyle}>
                <Icon 
                    name='google'
                    type='fontisto'
                    color='white'
                    style={styles.iconStyle}/>
                <Text style={styles.TextConnexionOptionStyle} onPress={()=> console.log('GoogleBTN pressed')}>Connexion avec Google</Text>
            </View>
            <View style={styles.TextConnexionViewOptionStyle}>
                <Icon 
                    name='facebook'
                    type='fontisto'
                    color='white'
                    style={styles.iconStyle}/>
                <Text style={styles.TextConnexionOptionStyle} onPress={()=> console.log('FbkBTN pressed')}>Connexion avec Facebook</Text>
            </View>
            <View style={styles.TextConnexionViewOptionStyle}>
                <Icon 
                    name='discord'
                    type='fontisto'
                    color='white'
                    style={styles.iconStyle}/>
                <Text style={styles.TextConnexionOptionStyle} onPress={()=> console.log('DiscordBTN pressed')}>Connexion avec Discord</Text>
                
            </View>
            
        </View>
  )
}

const styles = StyleSheet.create({
    OtherViewOptionStyle:{
        marginTop: 25,
        justifyContent: 'space-between'
    },
    TextConnexionViewOptionStyle : {
        margin: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextConnexionOptionStyle: {
        textDecorationLine: 'underline',
        fontSize:18,
        margin: 10,
        color:'white'
    },
    iconStyle:{
        marginRight:30
    }

})

export default OtherConnexion