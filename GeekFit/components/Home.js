import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import {Card, FAB} from 'react-native-paper'


function Home(props) {

    const [data, setData]=useState([])
    const [loading, setLoading]=useState(true)

    const loadData = () => {
        fetch('http://192.168.2.209:5000/get', {
            method:'GET'
        })
        .then(resp => resp.json())
        .then(article => {
            setData(article)
            setLoading(false)
        })
        .catch(error => console.log(error))
        
    }


    useEffect(() => {
        loadData()
    }, [])


   /**
    * 
    * const data = [
       {id:1, title:'First Title', body:'First Body'},
       {id:2, title:'Second Title', body:'Second Body'},
       {id:3, title:'Third Title', body:'Third Body'}
   ]
    */

   const renderData = (item) => {
       return (
           <Card style = {styles.cardStyle}>
               <Text style = {{fontSize:20}}>{item.title}</Text>
               <Text>{item.body}</Text>
           </Card>

       )
   }
  return (
      <View style = {{flex:1}}>
          <FlatList
          data = {data}
          renderItem = {({item}) => {
              return renderData(item)
          }}
          onRefresh = {() => loadData()}
          refreshing = {loading}
          keyExtractor = {item => `${item.id}`}
          />
          <FAB
          style = {styles.fab}
          small={false}
          icon="plus"
          theme={{colors:{accent:"green"}}}
          onPress = {()=> props.navigation.navigate('Create')}
          />
      </View>



  )
}

const styles = StyleSheet.create({
    cardStyle: {
        padding:10,
        margin:12
    },

    fab: {
        position:'absolute',
        margin:16,
        right:0,
        bottom:0
    }

})

export default Home