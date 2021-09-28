import React from 'react';
import { View, Text, Button,StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState, useEffect } from 'react';


const Register = ({navigation}) => {

    const [register, setregister] = useState({
        name : "",
        lastname : "",
        email : "",
        password : ""
    })


    const postUser = async(user) =>{
        
        const newUser = await fetch("http://127.0.0.1:3001/post",{
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
        


    const addUser = async(event) => {
        event.preventDefault();
        const newUser = await postUser(register);
        navigation.navigate("MainApp",{userid:newUser.rows[0].userid})
    }


  return (
    <View style={styles.container}>
            <View>
              <Text  style={styles.bulkappText} >BulkAPP</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder="name..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setregister({...register, name:text})}
            />
            </View> 
            <View style={styles.inputView}>
            <TextInput
            
            style={styles.inputText}
            placeholder="lastname..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setregister({...register, lastname:text})}
            />
            </View> 
            <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder="email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setregister({...register, email:text})}
            />
            </View>
            <View style={styles.inputView}>
            <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setregister({...register, password:text})}
            />
            </View>  
            <TouchableOpacity style={styles.loginBtn} onPress={addUser} >
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
  },
  bulkappText:{
    height:200,
    color: "white",
    fontSize :50
  },
  inputText:{
      height:50,
      color:"white"
  },
  inputView:{
      width:"80%",
      backgroundColor:"grey",
      borderRadius:25,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    loginText:{
      color:"white"
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"#fb5b5a",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      marginBottom:10
    }
});

export default Register;