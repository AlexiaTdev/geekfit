import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native';

function Create(props) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    const insertData = () => {
        fetch('http://192.168.2.209:5000/add', {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({title:title, body:body})
        })
        .then(resp => resp.json())
        .then(data => {
            props.navigation.navigate('Home')
        })
        .catch(error => console.log(error))
    }



  return (
    <View >
        <TextInput style = {styles.inputStyle}
        label="title"
        value={title}
        mode="outlined"
        onChangeText = {text => setTitle(text)}
        />
        <TextInput style = {{padding:10}}
        label="Description"
        value={body}
        mode="outlined"
        multiline
        numberOfLines={10}
        onChangeText = {text => setBody(text)}
        />
        <Button
        style={{margin:10}}
        icon="pencil"
        mode="contained"
        onPress={()=>insertData()}
        >Insert Articles </Button>
    </View>
  )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding:10,
        marginTop:30
    }
})

export default Create