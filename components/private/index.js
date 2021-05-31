import { StatusBar } from 'expo-status-bar';
import React,{useContext, useEffect,useState} from 'react';
import { Button,Image,StyleSheet, Text, View,Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as imagePicker from "expo-image-picker"
import { prepareDataForValidation } from 'formik';
import {PrivateContext} from '../../context/valid';

function Private (props){
    const [image,setImage]=useState([])

    const validation = useContext(PrivateContext);

    useEffect(()=>{
       const {status}=  imagePicker.requestMediaLibraryPermissionsAsync()
   //    if(status !=="granted") {
   //        alert("not allow")
   //    }
        async function loadData(){
          try {

              const imageUri=await AsyncStorage.getItem("img")
              if(imageUri.length){
              let e= JSON.parse(imageUri)
         setImage(e)
              }
          }catch (e){
              console.log("useEfffect Error",e)
          }

        }
        loadData()
    },[])
async function uploadImage(){
       const option={}
       let result= await imagePicker.launchImageLibraryAsync({
           mediaTypes:imagePicker.MediaTypeOptions.All,
           aspect:[4,3],
           quality:1

       })
    setImage([...image,result.uri])
     await  AsyncStorage.setItem("img",JSON.stringify([...image,result.uri]))


 }


 return (
   <View style={styles.container}>
       <Button title = "Back" onPress={()=> validation.setValid(false)}/>
     <Button title="Upload Photo" onPress={uploadImage}/>
     <StatusBar style="auto" />

       {image.length ? <>
           {image.map((e,index)=>{

               return(

                   e && <Image  key={index} source={{uri:e}} style={{
                       width:200,
                       height:200

                   }}/>
               )
           })}
           </> : null}
   </View>
 );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default Private;