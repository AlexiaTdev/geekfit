import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React from 'react'

export default function RoundNavigationScroller(props) {

    console.log(props.data)
    function isOnDisplay(number){
        if (props.data==number){
            return true
        }else{
            return false
        }
    }

    function roundNavigatorActionOnPress(number) {
        props.setData(number)
    }


  return (
    <View style={styles.roundBtnStructure}>
        <TouchableOpacity
            style={isOnDisplay(1) ? styles.roundBtnStyleActive : styles.roundBtnStyle}
            onPress={()=>{roundNavigatorActionOnPress(1)}}
            />
        <TouchableOpacity
            style={isOnDisplay(2) ? styles.roundBtnStyleActive : styles.roundBtnStyle}
            onPress={()=>{props.setData(2)}}
            />
        <TouchableOpacity
            style={isOnDisplay(3) ? styles.roundBtnStyleActive : styles.roundBtnStyle}
            onPress={()=>{props.setData(3)}}
            />
    </View>
  )
}

const styles = StyleSheet.create({
    roundBtnStyle: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:27,
        height:27,
        backgroundColor:'#313131',
        borderRadius:50,
        margin:15
        },
    roundBtnStyleActive: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:27,
        height:27,
        backgroundColor:'#FD8403',
        borderRadius:50,
        margin:15
        },
    roundBtnStructure: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})