import React, {useState} from 'react';
import { Button, View, Text, TouchableOpacity,Modal, Pressable,StyleSheet, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {ModalExercises} from "../components/ModalCreateRoutine"

const Routines = ({userid,routineName,routine}) => {

    const [routinecreated,setroutinecreated] = useState(false)
    const [modalVisible,setModalVisible] = useState(false)
    const [routineid,setroutineid] = useState(null)

    const mapRoutineid = (item) => {
        setModalVisible(!modalVisible);
        setroutineid(item)
    }



    return(
        <View>
            <ImageBackground source={require("../Images/bg5.jpg")} style={{width:"100%",height:"100%"}} opacity={0.7}>
            <View style={styles.centeredView}>
            {routine.map((item) => {
                return(<Text key={item.routineid}>
                <TouchableOpacity onPress={() => {mapRoutineid(item.routineid)}} >
                <Text style={styles.textStyle}>
                {item.name}
                </Text>
                </TouchableOpacity>
                </Text>
                
                )
            })}
            </View>
            </ImageBackground>
            <Modal visible={modalVisible} onRequestClose={()=>{setModalVisible(!modalVisible)}}>
                <View opacity={1} style={styles.modalView}>
                <Text>Is this </Text>
                <Pressable style={{padding:40}}  onPress={()=>{setModalVisible(!modalVisible)}}>
                    <Text>✘</Text>
                </Pressable>
                </View>
            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    centeredView: {
      alignItems: "center",
      marginTop: 10
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      borderWidth:3,
      margin:2,
      borderRadius:5,
      padding : 10,
      backgroundColor: "#cd5c5c",
      opacity:0.9,
    },
    modalText: {
      marginBottom: 50,
      textAlign: "center"
    }
  });

export default Routines;