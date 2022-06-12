import { StyleSheet,  View, Text} from 'react-native'
import React, {useState} from 'react'
import ExplicationHeader from '../components/ExplicationHeader';
import RoundNavigationScroller from '../components/RoundNavigationScroller';
import ExplicationContent from '../components/ExplicationContent';

export default function Explications({navigation}) {
    const [data, setData] = useState(1);

  return (
    <View style = {{flex:1, backgroundColor:'#0E0E0E', alignItems: 'center', justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>EXPLICATIONS</Text>
        <ExplicationHeader img={data}/>
        <ExplicationContent content={data}/>
        <RoundNavigationScroller setData={setData} data={data} navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    titleStyle: {
        color: "white",
        marginTop: 20,
        fontSize:30
    }
})