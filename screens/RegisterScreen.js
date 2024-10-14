import React, {useEffect, useState} from 'react';
import {useNavigation} from "@react-navigation/native";
import {View, Button, Text, ScrollView, Image, StyleSheet, TextInput } from 'react-native';
import {registerUser} from "../firebase/registerUser";

const RegisterScreen = () =>{
  const nav = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpButton = async (username, password) => {
    await registerUser(username, password);
  }
return(
    <View style={styles.viewContainer}>
    <View style={styles.container}>
    <Text style={styles.label}>Username</Text>
    <TextInput style={styles.input}
            placeholder='Username'
            value={username}
            onChangeText={setUsername}>
            </TextInput>
    <Text style={styles.label}>Password</Text>
    <TextInput style={styles.input}
            placeholder='Password'
            value={password}
            onChangeText={setPassword}>
            </TextInput>
    <Button style={styles.buttonStyle} title="Sign Up"onPress={() => signUpButton(username, password)}/>
    <Button style={styles.buttonStyle} title="Already have an account?" onPress={()=>nav.navigate("Login")}/>
    </View>
  </View>
  )
}

const styles=StyleSheet.create({
  viewContainer:{
    backgroundColor:"#A020F0",
    flex:1,
    textAlign:"center",
    justifyContent:"center"
  },
  container:{
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonStyle:{
    backgroundColor:"#A020F0"
  },
  input:{
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  }
});
export default RegisterScreen;