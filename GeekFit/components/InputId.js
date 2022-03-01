import React from 'react'
import {View, StyleSheet, Text} from 'react-native';
import { TextInput, Button } from 'react-native-paper';

function InputId() {
  return (
    <View style={styles.InputIdStyle}>
        <View >
            <TextInput style={styles.TextInputStyle}
            label="username"
            left={<TextInput.Icon name="account" />}
            />
            <TextInput style={styles.TextInputStyle}
            label="password"
            secureTextEntry
            left={<TextInput.Icon name="eye" />}
            />
        </View>
        <View style={styles.TextViewOptionStyle}>
            <Text style={styles.TextOptionStyle} onPress={()=> console.log('forgotten mdp pressed')}>Mot de passe oublié</Text>
            <Text style={styles.TextOptionStyle} onPress={()=> console.log('subscribe pressed')}>S'inscrire</Text>
        </View>
        <Button
            onPress={()=> console.log('se connecter button pressed')}
            style={styles.ButtonOptionStyle}

            mode="outlined"
        >Se Connecter</Button>
    </View>
  )
}

const styles = StyleSheet.create({
    InputIdStyle : {
        margin: 10
    },
    TextInputStyle : {
        marginBottom:10
    },
    TextViewOptionStyle : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextOptionStyle: {
        textDecorationLine: 'underline'
    },
    ButtonOptionStyle : {
        borderRadius:15
    }
})
//borderRadius:10000
export default InputId