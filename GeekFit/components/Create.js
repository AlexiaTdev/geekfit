import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput, Button} from 'react-native-paper'

function Create() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
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
        onPress={()=>console.log("pressed")}
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