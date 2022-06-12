import { StyleSheet, Text, View } from 'react-native'
import React,  {useState}  from 'react'
import { SliderPicker } from 'react-native-slider-picker';

export default function SlidePickerTaille({setTaille, taille, onPressTailleAction}) {
  return (
    <View style={styles.container}>
        <SliderPicker
            minLabel={'120'}
            midLabel={'210'}
            maxLabel={'300'}
            minValue={120}
            maxValue={180}
            defaultValue={taille-120}
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
                setTaille(120 + position);
                onPressTailleAction()
              }}
        />
      </View>
  )
}

const styles = StyleSheet.create({})