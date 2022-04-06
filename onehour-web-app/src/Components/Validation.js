import {useState} from "react"
const validation = (values) => {
    let error ={};
    if (!values.firstName){
        error.firstName="firstName id required."

    }
    if (!values.lastName){
        error.lasttName="lastName id required."

    }
    if (!values.phoneNumber){
        error.phoneNumber="phoneNumber id required."
    }
    if (!values.email){
        error.email="Email id required."
    }  else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email="email id invalid."
    }
    if (!values.password){
        error.password="password id required."
    }  else if(values.password.length < 8){
        error.password=" password must not be less than eight characters."
    }


    return error;
    }
    
    export default validation;