import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const MainApp = ({userid}) => {
    if(userid) {
        
        navigation.navigate("Exercises", {userid :userid}
        )
    } 
    return(
        <View>
            <Text></Text>
        </View>
    )
}

export default MainApp;