import React, {useEffect, useState, useRef} from 'react';
import {useNavigation} from "@react-navigation/native";
import {View, Button, Text, ScrollView, Image, StyleSheet, TextInput, Animated } from 'react-native';

const AnimatedScreen=()=>{
  const nav = useNavigation();
  const intro = useRef(new Animated.Value(1)).current;//An Animated Value is a variable that holds a value that can be animated over time.

    Animated.timing(intro, {
  toValue: 1,
  duration:3000,
  useNativeDriver:true
}).start(()=>nav.navigate("Login"));//this start means to start the animation; finishing, it does command in paranthesis

  return(
    <View style={styles.container}>
    <Animated.View style={{
        opacity: intro}}>
      
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
    backgroundColor: '#A020F0',
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

export default AnimatedScreen;