import { StyleSheet, Text, View } from 'react-native'
import React,  {useState}  from 'react'
import { SliderPicker } from 'react-native-slider-picker';

export default function SlidePickerPoids({setPoids, poids, onPressPoidsAction}) {
    
  return (
    <View style={styles.container}>
        <SliderPicker
            minLabel={'40'}
            midLabel={'170'}
            maxLabel={'300'}
            minValue={40}
            maxValue={260}
            defaultValue={poids-40}
            labelFontColor={"#6c7682"}
            labelFontWeight={'600'}
            showFill={true}
            fillColor={'#FD8403'}
            showNumberScale={true}
            showSeparatorScale={true}
            buttonBackgroundColor={'#fff'}
            buttonBorderColor={"#6c7682"}
            buttonBorderWidth={1}
            scaleNumberFontWeight={'300'}
            buttonDimensionsPercentage={6}
            heightPercentage={1}
            widthPercentage={70}
            callback={position => {
                setPoids(40 +position);
                onPressPoidsAction()
              }}
        />
      </View>
  )
}

const styles = StyleSheet.create({})

