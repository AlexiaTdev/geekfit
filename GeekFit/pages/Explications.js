import { StyleSheet,  View } from 'react-native'
import React, {useState} from 'react'
import ExplicationHeader from '../components/ExplicationHeader';
import RoundNavigationScroller from '../components/RoundNavigationScroller';
import ExplicationContent from '../components/ExplicationContent';

export default function Explications() {
    const [data, setData] = useState(1);

  return (
    <View style = {{flex:1, backgroundColor:'#0E0E0E'}}>
        <ExplicationHeader img={data}/>
        <ExplicationContent content={data}/>
        <RoundNavigationScroller setData={setData} data={data}/>
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