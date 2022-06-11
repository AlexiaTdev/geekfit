import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

function determineImg(img){
    const pic1=require('../src/fitness-stats-amico3.png')
    const pic2=require('../src/fitness-stats-amico2.png')
    const pic3=require('../src/fitness-stats-amico4.png')
    var pic
    if (img==1){
        pic=pic1;
    }
    if (img==2){
        pic=pic2;
    }
    if (img==3){
        pic=pic3;
    }
    return pic
}


export default function ExplicationHeader(props) {
    
  return (
    <View  style={styles.homeheaderStyle}>
        <Image source={require('../src/logoGeekFit2.png')}/>
        <Image source={determineImg(props.img)} style={styles.homeImgStyle}/>
    </View>
  )
}
const styles = StyleSheet.create({
    homeImgStyle: {
        width: 300,
        height: 300
    },
    homeheaderStyle : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})
