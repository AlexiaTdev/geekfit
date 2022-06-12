import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ExplicationContent(props) {
    var txt
    if (props.content==1){
        txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem at volutpat ut quis in rhoncus auctor egestas scelerisque. Blandit pharetra, id ultrices mollis. Magnis elementum morbi sed hendrerit quam. Pellentesque amet, facilisis in ornare non. Maecenas magna tincidunt vehicula nec, tristique viverra. Aliquam tincidunt."
    }
    if (props.content==2){
        txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem at volutpat ut quis in rhoncus auctor egestas scelerisque. Blandit pharetra, id ultrices mollis. Magnis elementum morbi sed hendrerit quam. Pellentesque amet, facilisis in ornare non. Maecenas magna tincidunt vehicula nec, tristique viverra. Aliquam tincidunt."
    }
    if (props.content==3){
        txt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem at volutpat ut quis in rhoncus auctor egestas scelerisque. Blandit pharetra, id ultrices mollis. Magnis elementum morbi sed hendrerit quam. Pellentesque amet, facilisis in ornare non. Maecenas magna tincidunt vehicula nec, tristique viverra. Aliquam tincidunt."
    }

  return (
    <View style={styles.txtStyleBorder}>
      <Text style={styles.txtStyle}>{txt}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    txtStyleBorder: {
        justifyContent: 'center',
        margin:50
    },
    txtStyle: {
        color: 'white',
        fontSize:18
        }
})