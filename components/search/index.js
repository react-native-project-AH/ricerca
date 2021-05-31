import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, TextInput, Button } from 'react-native';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { Icon } from 'react-native-elements';
import {PrivateContext} from '../../context/valid';

// import { Audio } from 'expo-av';
// AIzaSyAvcNX1GBJilOOjrs-Ch-CG9VX8yG-nRDk

function Search(props) {
    const [recording, setRecording] = React.useState();    
    const { transcript, resetTranscript } = useSpeechRecognition()



    const validation = useContext(PrivateContext);

    useEffect(()=>{
        let a = document.querySelector('#gsc-i-id1');
        if(a){
            a.value = transcript;
            a.style.background = 'none';
            secretPath()
        } 
    },[transcript])
    useEffect(()=>{
              var cx = '4050613ba5d231066';
              var gcse = document.createElement('script');
              gcse.type = 'text/javascript';
              gcse.async = true;
              gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(gcse, s);

    },[])

    const secretPath = ()=>{
        let secret = document.querySelector('#gsc-i-id1')?.value;
        if(secret.toUpperCase() !== "JORDAN"){
            document.querySelector('.gsc-search-button-v2').click();
        }else {
            validation.setValid(true)
        }
    }
    // const startRecording = async ()=> {
    //     try {
    //         console.log('Requesting permissions..');
    //         await Audio.requestPermissionsAsync()
    //         await Audio.setAudioModeAsync({
    //             allowsRecordingIOS: true,
    //             playsInSilentModeIOS: true,
    //       }); 
    //       console.log('Starting recording..');
    //       const recording = new Audio.Recording();
    //       await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
    //       await recording.startAsync(); 
    //       setRecording(recording);
    //       console.log('Recording started');
    //     } catch (err) {
    //         console.error('Failed to start recording', err);
    //     }
    // }
    
    // async function stopRecording() {
    //     console.log('Stopping recording..');
    //     setRecording(undefined);
    //     await recording.stopAndUnloadAsync();
    //     const uri = recording.getURI(); 
    //     console.log('Recording stopped and stored at', uri);
    // }
    
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }


    
    return (

        <View>
            
<div className="gcse-search"></div>

<Icon name='g-translate' onPress={SpeechRecognition.startListening}/>

            {/* <Formik initialValues={{ search: "" }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                >
                {formikProps => (
                    <Form>
                        <TextInput
                            placeholder="SEARCH"
                            onChangeText={formikProps.handleChange("search")}
                        />
                        <Button title="submit" onPress={formikProps.handleSubmit} />
                    </Form>
                )}

            </Formik> */}
            {/* <div>
               
                <button onClick={SpeechRecognition.stopListening}>Stop</button>
                <button onClick={resetTranscript}>Reset</button>
            </div> */}
            {/* <Button
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      /> */}
        </View>
    )
}
export default Search;