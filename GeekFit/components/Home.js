import React, {useState} from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

function Home() {
    const [name, setName] = useState('AlexiaTB')
  return (
      <>
            <Text>Open up App.js to start working on your app!</Text>
            <Text>{name}</Text>
            <Button title="clicme" onPress={()=>setName('hell')}></Button>
      </>



  )
}

export default Home