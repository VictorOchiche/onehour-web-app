import {useEffect, useState} from "react";
import formValidation from "./formValidation";
import Facebook from "../Facebook_icon.png";
import Instagram  from "../Instagram_icon.jpeg";
import Twitter from "../Twitter_icon.jpg"; 

const Login = ({submitForm}) => {
    const [values, setValues] = useState({
        email:"",
        password:"",
    });
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false)


    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        })
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(formValidation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [ errors]);

    return (
        <div className="container">
            <div className="header">
                <h1 className="one">One</h1><h1 className="hour">Hour</h1> 
                
                    <a className="sign" href="/">Sign in</a>
                    <a className="create" href="/">Create an account</a>
                    <a className="cart" href="/">Cart</a>
                
            </div>
            <h4 className="get">
                Get your fresh product
            </h4>
            <p className="createp">
                We deliver the best products in town,<br />
                Order today!!!
            </p>              
            <div className= "formWrapper">
            <div className="heading">
                <h4 className="createaccount">
                    LOG IN
                </h4>
                <form className = "myForm">
                    

                    <div>
                        <input Name="email" className="input4" type="email" 
                        value={values.email}  onChange={handleChange} placeholder="Enter Email / Phone number "/>
                    
                    {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <input Name="password" className="input5" type="password" 
                        value={values.password}  onChange={handleChange} 
                        placeholder=" Enter Your Password"/>
                    
                    {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <p className="accept"><a href="/">Forgot password?</a></p>
                    <div className ="submitdiv">
                        <button className ="submit" onClick={handleFormSubmit}>Login</button>
                    </div>
                </form>
                <div className="footer">
                    <h4 className="footer1">One Hour</h4>
                    <div className="footer-icon">
                        <img src={Facebook} alt="Facebook icon" />
                        <img src={Instagram} alt="Instagram icon" />
                        <img src={Twitter} alt="Twitter icon" />
                        

                </div>
                
                </div>
                </div>
            </div>
            </div>
 
       
    
    );
    };
    
    export default Login;