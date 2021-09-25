import React from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';


const Register = ({navigation}) => {

    const [register, setregister] = useState({
        name : "",
        lastname : "",
        email : "",
        password : ""
    })

    const clearForm = () => {
        setregister({name : "",
        lastname : "",
        email : "",
        password : ""})
    }

    const postUser = async(user) =>{
        
        const newUser = await fetch("http://192.168.0.13:3001/post",{
            method: 'POST',
            headers: {
                'accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }  
        )
        return await newUser.json()
    };
        


    const addUser = (event) => {
        event.preventDefault();
        postUser(register);
        navigation.navigate("Something")
        clearForm();
    }


  return (
    <View style={{margin:100, padding:20}}>
      <TextInput
        style={{borderWidth:2, borderRadius:6,marginBottom:20}}
        placeholder="enter name"
        onChangeText={(text) => {setregister({...register,name : text})}}
      /> 
      <TextInput 
        style={{borderWidth:2, borderRadius:6,marginBottom:20}}
        placeholder="enter lastname"
        onChangeText={(text) => {setregister({...register,lastname : text})}}
      /> 
      <TextInput 
        style={{borderWidth:2, borderRadius:6,marginBottom:20}}
        placeholder="enter email"
        onChangeText={(text) => {setregister({...register, email : text})}}
      /> 
      <TextInput
        style={{borderWidth:2,borderRadius:6}} 
        placeholder="enter email"
        onChangeText={(text) => {setregister({...register, password : text})}}
        secureTextEntry={true}
      /> 
      <Button title="Submit" onPress={addUser}/>
    </View>
  );
};

export default Register;