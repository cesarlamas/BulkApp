import React from 'react';
import {View, Text, ImageBackground,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    return (
          <ImageBackground source={require("../Images/bg.jpeg")} style={{width:"100%",height:"100%"}}>
            <View style={styles.container}>
            <TouchableOpacity onPress= {() => {navigation.navigate('Register')}}>
              <Text style={{borderWidth:4,color:"grey",borderColor:"grey",borderRadius: 10,margin:20,padding:4}}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{navigation.navigate('Login')}}>
                <Text style={{borderWidth:4,color:"grey",borderColor:"grey",padding: 4, borderRadius: 10,margin:20}}>Login</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection:"column-reverse",
      alignItems:"center",
      padding:20,
    },
});



export default Home;