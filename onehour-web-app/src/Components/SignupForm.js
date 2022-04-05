import {useEffect, useState} from "react"
import validation from "./validation";

const SignupForm = ({submitForm}) => {
    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        phoneNumber:"",
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
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);

    return (
        <div className="container">
            <div className="header">
                <h1 className="one">One Hour</h1>
                
                    <a className="sign" href="#">Sign in</a>
                    <a className="create" href="#">Create an account</a>
                    <a className="cart" href="#">Cart</a>
                
            </div>
            <h4 className="get">
                Get your fresh product
            </h4>
            <p className="createp">
                Create your one hour account in just a few clicks
            </p>              
            <div className= "formWrapper">
            <div className="heading">
                <h5 className="createaccount">
                    Create account
                </h5>
                <form className = "myForm">
                    <div>
                        <input name="firstName" className="input1" type="text" 
                        value={values.firstName}  onChange={handleChange} placeholder="First Name"/>
                    
                    {errors.firstName && <p className="error">{errors.firstName}</p>}
                    
                    </div>

                    <div>
                        <input Name="lastName" className="input2" type="text" 
                        value={values.lastName} onChange={handleChange} placeholder="Last Name"/>
                        {errors.lastName && <p className="error">{errors.lasttName}</p>}
                        </div>
                    <div>
                        <input Name="phoneNumber" className="input3" type="number" 
                        value={values.phoneNumber}  onChange={handleChange} placeholder="Phone Number"/>
                    
                    {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
                    </div>

                    <div>
                        <input Name="email" className="input4" type="email" 
                        value={values.email}  onChange={handleChange} placeholder="Email"/>
                    
                    {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div>
                        <input Name="password" className="input5" type="password" 
                        value={values.password}  onChange={handleChange} 
                        placeholder="Password   (not less than 8 characters)"/>
                    
                    {errors.password && <p className="error">{errors.password}</p>}
                    </div>

                    <p className="accept">By clicking sign up you agree our <a href="#">Terms of Services</a></p>
                    <div className ="submitdiv">
                        <button className ="submit" onClick={handleFormSubmit}>Register</button>
                    </div>
                </form>
                <div className="footer">
                    <h4 className="footer1">One Hour</h4>
                    <div className="facebook">
                    <a href="#"><img src="http://assets.stickpng.com/thumbs/584ac2d03ac3a570f94a666d.png"width={40} height={40} /></a>
                    </div>
                    <div className="instagram">
                    <a href="#"><img src="https://i.pinimg.com/736x/94/40/9a/94409a775c02d7658dd6e7ba88429b63.jpg" width={40} height={40} /></a>
                    </div>
                    <div className="twitter">
                    <a href="#"><img src="https://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png" width={40} height={40} /></a>
                    </div>
                    
                </div>
                </div>
            </div>

       
        </div>
    
    );
    };
    
    export default SignupForm;