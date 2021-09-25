import React from 'react';
import { useState,useEffect } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Exercises = () => {

    const [exercise,setexercise] = useState([]);

    useEffect(()=> {
        getExercises();
    },[]);


    const getExercises = async() => {
        const res = await fetch("http://192.168.0.13:3001/exercises").then((res)=> res.json())
        console.log(res)
        setexercise(res)
    }

    console.log(exercise)

    return(
        <View >
           {exercise.map((item) => (
               <View>
               <Text style={{borderWidth: 4,padding:20}} key={item.exerciseid}> 
                {item.name}
                <Button title="add"></Button>
               </Text>
               
               </View>
           ))}
        </View>
    )
}

export default Exercises;