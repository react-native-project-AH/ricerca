import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { Button,Image,StyleSheet, Text, View,Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as imagePicker from "expo-image-picker"
export default function App() {

const [image,setImage]=useState([])
     useEffect(()=>{
console.log(imagePicker)
        const {status}=  imagePicker.requestMediaLibraryPermissionsAsync()
       if(status !=="granted") {
           alert("not allow")
       }
         async function loadData(){
       const imageUri=await AsyncStorage.getItem("img")
console.log(imageUri,"eeeeeee")
             await setImage([...image,imageUri])
      await console.log(image,"staaaaaaaaaaaaaaate")
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
      await  AsyncStorage.setItem("img",image)
     console.log(result.uri)
     if(!result.cancelled){
         setImage(result.uri)
     }
  }


  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <Button title="Upload Photo" onPress={uploadImage}/>
        <Button title="Saving" onPress={testing} />
        <Button title="load" onPress={getItem} />
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

async function getItem(){
    try {
      let e  = await AsyncStorage.getItem("ah")
       await console.log(e.JSON.parse())
    }catch (error){
        console.log("Erooooooooor")
    }

}
async function testing(){
    try {
        let arr=[1,2,3,"eeeee"]
        await AsyncStorage.setItem("ah",JSON.stringify(arr))
    }catch (error){
        console.log("Erooooooooor")
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
