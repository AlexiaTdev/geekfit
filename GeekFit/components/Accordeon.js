import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List } from 'react-native-paper';

const Accordeon = (props) => {


    ///data profil
    const [expanded, setExpanded] = React.useState(false);
    const [genre, setGenre] = React.useState(0);

    const handlePress = () => setExpanded(!expanded);
    function handleGenrePress(number){
        setGenre(number)
        setExpanded(!expanded)
    }
    function isworking(number){
        console.log("yes" + number)
    }

    function loopComponent(thisnumber){
        var completeLoopComponent;
        var i=0;
        for (i=0; i<thisnumber; i++){
            completeLoopComponent = completeLoopComponent + 
                <List.Item title={props.genreList[i]} titleStyle={styles.textStyle} onPress={()=>{handleGenrePress(i)}}/>
        }
        return completeLoopComponent
    }


  

  return (
    <List.Section  >
      <List.Accordion
        title={props.genreList[genre]}
        style={{backgroundColor:"#313131"}}
        titleStyle={styles.textStyle}
        expanded={expanded}
        onPress={handlePress}
        >
        <List.Item title={props.genreList[0]} titleStyle={styles.textStyle} onPress={()=>{handleGenrePress(0)}}/>
        <List.Item title={props.genreList[1]} titleStyle={styles.textStyle} onPress={()=>{handleGenrePress(1)}}/>
        <List.Item title={props.genreList[2]} titleStyle={styles.textStyle} onPress={()=>{handleGenrePress(2)}}/>
        
      </List.Accordion>
    </List.Section>
  );
};

const styles = StyleSheet.create({
    textStyle:{
        color:"white",
        alignItems: 'center'
    }
})

export default Accordeon;