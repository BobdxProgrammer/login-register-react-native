import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from "@react-navigation/native";
import {View, Button, Text, ScrollView, Image, StyleSheet, TextInput, Animated } from 'react-native';

const LoginScreen=()=>{
  const nav = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const intro = useRef(new Animated.Value(1)).current;//An Animated Value is a variable that holds a value that can be animated over time.

  const animation=()=>{
    Animated.timing(intro, {
  toValue: 1,
  duration:1000,
  useNativeDriver:true
}).start();
  }
  const translateY = intro.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -100],
  });

  return(
    <View style={styles.viewContainer}>
    <Animated.View style={[styles.container, { transform: [{ translateY }] }]}>
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
    <Button style={styles.buttonStyle} title="Login"onPress={()=>nav.navigate("Register")}/>
    </View>
    </Animated.View>
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

export default LoginScreen;