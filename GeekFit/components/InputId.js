import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import OtherConnexion from './OtherConnexion';

function InputId() {
  return (
    <View style={styles.InputIdStyle}>
        <View >
            <TextInput
            style={styles.TextInputStyle}
            label="username"
            left={<TextInput.Icon name="account" color='white'/>}
            theme={{
                colors: {
                           placeholder: 'white', text: 'white', primary: 'white',
                           underlineColor: 'white', background: '#313131',
                           iconStyle:'white'
                   }
             }}
            />
            <TextInput style={styles.TextInputStyle}
            label="password"
            secureTextEntry
            left={<TextInput.Icon name="eye" color='white'/>}
            theme={{
                colors: {
                           placeholder: 'white', text: 'white', primary: 'white',
                           underlineColor: 'white', background: '#313131',
                           iconStyle:'white'
                   }
             }}
            />
        </View>
        <View style={styles.TextViewOptionStyle}>
            <Text style={styles.TextOptionStyle} onPress={()=> console.log('forgotten mdp pressed')}>Mot de passe oublié</Text>
            <Text style={styles.TextOptionStyle} onPress={()=> console.log('subscribe pressed')}>S'inscrire</Text>
        </View>

        <OtherConnexion/>
        
        <View style={styles.BtnConnexionViewOptionStyle}>
            <Button
                onPress={()=> console.log('se connecter button pressed')}
                style={styles.ButtonOptionStyle}
                labelStyle={{fontSize:20}}
                theme={{colors: {primary: 'white'}}}
            >Se Connecter</Button>
        </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
    InputIdStyle : {
        margin: 10,
        flex: 1
    },
    TextInputStyle : {
        marginBottom:10,
        maxHeight:54,

        
    },
    TextViewOptionStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextOptionStyle: {
        textDecorationLine: 'underline',
        color:'white',
        overlayColor:'#0E0E0E',
    },
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
    BtnConnexionViewOptionStyle : {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 4
    },
    ButtonOptionStyle : {
        borderRadius:15,
        color:'white',
        backgroundColor: '#FD8403'
    },
    iconStyle:{
        marginRight:30
    }

})

export default InputId