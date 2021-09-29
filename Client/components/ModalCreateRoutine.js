import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View,TextInput} from "react-native";

const ModalCreateRoutine = ({userid,setroutineid,onnewroutineadded}) => {


  const [modalVisible, setModalVisible] = useState(false);

  const [routineName,setroutineName] = useState({
    name : ""
});

const postRoutine = async(name) => {
    const newRoutine = await fetch("http://192.168.0.13:3001/newroutine",{
        method: 'POST',
        headers: {
            'accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,userid})
    }
    )
    const json =  await newRoutine.json()
    setroutineid(json.rows[0].routineid)
    return json
    }

const addRoutine = async(event) => {
    const res = await postRoutine(routineName.name); 
    onnewroutineadded();
    setModalVisible(!modalVisible) 
}
  return (
    <View style={[styles.centeredView]}>
      <Modal
        routineName={routineName}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Create new workout</Text>
            <TextInput style={styles.textInput} placeholder="Name of the new Routine" onChangeText={(text) => {setroutineName({...routineName,name : text})}}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={addRoutine}
            >
              <Text style={styles.textStyle}>Create</Text>
            </Pressable>
            <Pressable
            style={{marginTop:20}}
            onPress={() => setModalVisible(!modalVisible)}
            >
            <Text style={styles.closeButton}>✘</Text>
          </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>New routine</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom :20
  },
  modalView: {
    margin: 30,
    backgroundColor: "grey",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 1
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center"
  },
  textInput : {
    marginBottom : 20
  },
  closeButton :{
    color: "black"
  }
});

export default ModalCreateRoutine;