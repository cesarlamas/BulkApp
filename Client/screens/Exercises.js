import React from 'react';
import { useState,useEffect } from 'react';
import { Button, View, Text,Modal, ImageBackground,StyleSheet } from 'react-native';
import ModalCreateRoutine from '../components/ModalCreateRoutine';
import MyTabs from "../components/bottomNavigator"
import { TouchableOpacity } from 'react-native-gesture-handler';

const Exercises = ({userid,onnewroutineadded,routineName}) => {
    const [exercise,setexercise] = useState([]);
    const [routineid,setroutineid] = useState(null);

    useEffect(()=> {
        getExercises();
    },[]);


    const getExercises = async() => {
        const res = await fetch("http://127.0.0.1:3001/exercises").then((res)=> res.json())
        setexercise(res)
    }

    const addExerciseIntoRoutine = async(exerciseid) =>{
    
        const res = await fetch("http://127.0.0.1:3001/exerciseroutine",{
            method: 'POST',
            headers: {
                'accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({exerciseid,routineid})
        }  
        )
        return await res.json()
    };

        

    return(
        <View >
        <ImageBackground source={require("../Images/bg2.jpeg")} style={{width:"100%",height:"100%"}} opacity={0.7}>
            <View style={styles.viewinput}>
            <ModalCreateRoutine onnewroutineadded={onnewroutineadded} routineName={routineName} setroutineid={setroutineid} userid={userid} />
            {exercise.map((item) => (
               <View opacity={0.8} key={item.exerciseid}>
               <TouchableOpacity>
                    <Text style={{borderWidth: 4,color:"black",padding:10,marginTop:10,borderRadius:10,margin:10,justifyContent: "center",}} > 
                    {item.name}
                    </Text>
                </TouchableOpacity>
                <View>
                    <Button title="+💪"  onPress={() => {addExerciseIntoRoutine(item.exerciseid)}}></Button>
                </View>
               </View>
               
           ))}
            </View>
        </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({
    viewinput:{
        flex : 1
    }
})

export default Exercises;