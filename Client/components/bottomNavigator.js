import  React,{useState,useEffect} from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Time from '../screens/Time';
import Exercises from '../screens/Exercises';
import MainApp from '../screens/MainApp';
import Routines from '../screens/Routines';

const Tab = createBottomTabNavigator();

function MyTabs({route}) {
  const [routine,setroutine] = useState([])
    const {userid} = route.params
    
    useEffect(()=> {
      getroutine();
    },[]);

  

    const getroutine = async() => {
      console.log("is this working")
      const res = await fetch(`http://127.0.0.1:3001/getroutinebyuserid/${userid}`).then((res)=> res.json())
      console.log("is this working",res)
      setroutine(res)
      console.log("Get rotuine",routine)
    }
    return (
      
      <Tab.Navigator screenOptions={{
        "tabBarActiveTintColor": "#fff",
        "tabBarInactiveTintColor": "lightgray",
        "tabBarActiveBackgroundColor": "black",
        "tabBarInactiveBackgroundColor": "grey",
        "tabBarStyle": [
          {
            "display": "flex"
          },
          null
        ]
      }} >
        <Tab.Screen name="Routines" children={ () => <Routines userid={userid} routine={routine}/>}/>
        <Tab.Screen name="Exercises" children={ () => <Exercises userid={userid} onnewroutineadded={getroutine}/>}/> 
        <Tab.Screen name="Time" component={Time} />
      </Tab.Navigator>
    );
  }

export default MyTabs;