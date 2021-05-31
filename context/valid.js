import React,{useState} from 'react';


export const PrivateContext = React.createContext();
function ValidProvider(props){

    const [valid, setValid] = useState(false);

    const state = {
        valid,
        setValid
    }

    return (
        <PrivateContext.Provider value = {state}>
        {props.children}
        </PrivateContext.Provider>
    )
}
export default ValidProvider;