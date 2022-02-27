import React, { Component } from 'react'
import {View, Text, Button} from 'react-native'

export class ClassHome extends Component {
    state = {
        name : "lol"
    }
  render() {
    return (
      <View>
          <Text>Hello from class</Text>
          <Text>{this.props.name}</Text>
          <Text>{this.state.name}</Text>
          <Button title="clicme" onPress={()=> this.setState({name:"lolagain"})}></Button>
      </View>
    )
  }
}

export default ClassHome