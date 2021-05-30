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
           try {

               const imageUri=await AsyncStorage.getItem("img")
               if(imageUri.length){
               let e= JSON.parse(imageUri)
          setImage(e)
console.log(image,"dddddddddddd")
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
     // let dd=image
     setImage([...image,result.uri])
     console.log(image)
      await  AsyncStorage.setItem("img",JSON.stringify([...image,result.uri]))


  }


  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <Button title="Upload Photo" onPress={uploadImage}/>
        <Button title="Saving" onPress={testing} />
        <Button title="load" onPress={getItem} />
      <StatusBar style="auto" />

        {image.length ? <>
            {console.log("finaaaal loooog",image)}
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
        console.log(JSON.parse(e))
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
