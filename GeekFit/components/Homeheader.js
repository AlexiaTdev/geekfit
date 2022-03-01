import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

import tt2 from '../src/Fitness-stats-amico.webp';

function Homeheader() {
  return (
      <>
      <View  style={styles.homeheaderStyle}>
            <Image source={require('../src/logoGeekFit2.png')}/>
            <Image source={tt2} style={styles.homeImgStyle}/>
      </View>  
      </>
          
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

export default Homeheader