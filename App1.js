// import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState,useContext} from 'react';

// import { Button,Image,StyleSheet, Text, View,Platform } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import * as imagePicker from "expo-image-picker"
import Searches from './components/search';
import Private from './components/private';
import { View } from 'react-native';
import {PrivateContext} from './context/valid';

export default function App1() {

    const validation = useContext(PrivateContext)
    console.log(validation);


  return (
      <View>
            {
              validation.valid ?
              <>
              <Private/>
              </> :<Searches/>
            }

      </View>
  );
}