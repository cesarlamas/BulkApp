import React, {useState} from 'react';
import { Button, View, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({navigation}) => {

    const [login,setlogin] = useState({
        email:"",
        password:""
    });

    const postLogin = async(user) =>{
        const userlog = await fetch("http://192.168.0.13:3001/login",{
            method: 'POST',
            headers: {
                'accept' : 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }  
        )
        console.log(userlog)
        return await userlog.json()
    };

    const addLogin = async(event) =>{
        event.preventDefault();
        const res = await postLogin(login);
        if(res.userId) {
            console.log(res)
            navigation.navigate("Something") } else {
                alert("something w")
            }
    }

    return(
        <View style={{margin:100, padding:20}}>
            <TextInput
            style={{borderWidth:2, borderRadius:6,marginBottom:20}}
            placeholder="email"
            onChangeText={(text) => setlogin({...login, email:text})}
            
        /> 
        <TextInput 
            style={{borderWidth:2, borderRadius:6,marginBottom:20}}
            placeholder="password"
            onChangeText={(text) => setlogin({...login, password:text})}
        /> 
        <Button title="login" onPress={addLogin}/>
        </View>
    )
}

export default Login;