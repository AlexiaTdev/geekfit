import { StyleSheet, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

import { TextInput } from 'react-native-paper';



export default function RoundNavigationScroller(props) {

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
    <>
    {props.data!=3 ? 
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
    : 
            (
                <View style={styles.roundBtnStructureFinalPhase}>
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
                    <Icon name={'arrow-right'} color='#FD8403' style={{}} size={60} onPress={() => props.navigation.navigate('QuestionnaireProfil')}/>
                </View>
                
            )
    }
    </>
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
    },
    roundBtnStructureFinalPhase:{
        flexDirection: 'row',
        justifyContent: 'center'
    }
})