//import {useState} from "react"
const formValidation = (values) => {
    let error ={};
    if (!values.email){
        error.email = "Email is required."
    }  else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email="email id invalid."
    }
    if (!values.password){
        error.password="password is required."
    }  else if(values.password.length < 8){
        error.password=" password must not be less than eight characters."
    }


    return error;
    }
    
    export default formValidation;