import React, {useState} from 'react';
import { Button, View, TextInput,StyleSheet,TouchableOpacity,Text} from 'react-native';
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
        return await userlog.json()
    };


    const addLogin = async(event) =>{
        event.preventDefault();
        const res = await postLogin(login);
        if(res.userid) {
            navigation.navigate("MainApp", {userid : res.userid}
            )
        } else {
                alert("Email or password not correct")
            }
    }

    


    return(
        <View style={styles.container}>
            <View>
              <Text  style={styles.bulkappText} >BulkAPP</Text>
            </View>
            <View style={styles.inputView}>
            <TextInput
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setlogin({...login, email:text})}
            />
            </View> 
            <View style={styles.inputView}>
            <TextInput
            secureTextEntry={true}
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setlogin({...login, password:text})}
            />
            </View> 
            <TouchableOpacity style={styles.loginBtn} onPress={addLogin} >
                <Text style={styles.loginText}>LOGIN</Text>
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
        marginBottom:40,
        height:100,
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

export default Login;