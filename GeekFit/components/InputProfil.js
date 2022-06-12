import { StyleSheet, Text, View, Modal } from 'react-native'
import React,  { useState }  from 'react'
import DatePicker from 'react-native-modern-datepicker';
import { Button, Switch } from 'react-native-paper';

import {ImagePicker} from 'react-native-image-picker';

import Accordeon from './Accordeon';
import SlidePickerPoids from './SlidePickerPoids';
import SlidePickerTaille from './SlidePickerTaille';


export default function InputProfil({navigation}) {

        ///init values
        const genreList=["Homme", "Femme", "Autre"];
        const [selectedDate, setSelectedDate] = useState('');
        const [age, setAge] = useState(21);
        const [showModal1, setshowModal1] = useState(false);
        const [showModal2, setshowModal2] = useState(false);
        const [showModal3, setshowModal3] = useState(false);
        const [showModal4, setshowModal4] = useState(false);
        const [poids, setPoids]= useState(40);
        const [taille, setTaille]= useState(120);

        const [isSwitchOn, setIsSwitchOn] = React.useState(false);
        const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

        function onPressbtnDateAction(){
            setshowModal1(!showModal1)
        }
        function onPressDateAction(date){
            onPressbtnDateAction()
            setSelectedDate(date)

            let today= new Date();
            let dateFinale = new Date(parseInt(selectedDate.slice(0,4)), parseInt(selectedDate.slice(5,)))
            setAge(today.getFullYear() - dateFinale.getFullYear())
        }
        function onPressPoidsAction(){
            setshowModal2(!showModal2)
        }
        function onPressTailleAction(){
            setshowModal3(!showModal3)
        }

        function onPressImageAction(){
            setshowModal4(!showModal4)
        }



        
       
        

        

        



  return (
    <View>
        <Text style={{color:"white"}}>Genre</Text>
        <Accordeon genreList={genreList}/>

        <Text style={{color:"white"}}>Age</Text>
        <Button mode='contained' style={styles.btnStyle} onPress={onPressbtnDateAction}>{age}</Button>
        <Modal
            visible={showModal1}
            style={styles.modaleStyle}
            transparent={true}>
            <DatePicker
                mode="monthYear"
                selectorStartingYear={1940}
                onMonthYearChange={date => {onPressDateAction(date)}}/>
        </Modal>

        <Text style={{color:"white"}}>Poids</Text>
        <Button mode='contained' style={styles.btnStyle} onPress={onPressPoidsAction}>{poids} kg</Button>
        <Modal
            visible={showModal2}
            style={styles.modaleStyle}
            transparent={true}>
            <SlidePickerPoids
                setPoids={setPoids}
                poids={poids}
                onPressPoidsAction={onPressPoidsAction}
                />
        </Modal>

        <Text style={{color:"white"}}>Taille</Text>
        <Button mode='contained' style={styles.btnStyle} onPress={onPressTailleAction}>{taille} cm</Button>
        <Modal
            visible={showModal3}
            style={styles.modaleStyle}
            transparent={true}>
            <SlidePickerTaille
                setTaille={setTaille}
                taille={taille}
                onPressTailleAction={onPressTailleAction}
                />
        </Modal>

        <View style={styles.switchStyle}>
            <Text style={{color:"white"}}>Choisis ton avatar</Text>
            <Button >ICI</Button>
        </View>

        <View style={styles.switchStyle}>
            <Text style={{color:"white"}}>Notification</Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    btnStyle:{
        height:50,
        backgroundColor:"#313131",
        color:"white"
    },
    modaleStyle:{

    },
    switchStyle:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
})