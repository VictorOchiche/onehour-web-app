import {useState} from "react"
import Login from "./Login";
import LoginFormSuccess from "./LoginFormSuccess";

const LoginForm = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);
    
    const submitForm = () => {
        setFormIsSubmitted(true);
    }

return (
<div>
    {!formIsSubmitted ? 
    (<LoginForm submitForm ={submitForm}/>)
     : <LoginFormSuccess/>}
</div>

);
};

export default Login;