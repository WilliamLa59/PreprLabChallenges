import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from '@chakra-ui/react'

import logo from "../../assets/logo.png";


import './Login.scss'

export const Login = () => {

    let navigate = useNavigate();

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((inputs.input1 === "williamla@example.com" || inputs.input1 === "williamla") && inputs.input2 ==="password123"){
            alert("Signing In");
            navigate("/challenges", {replace: true});
        }else{
            alert("Username or password don't match");
        }
    }
    
  return (
    <div className="login-background-wrapper">
        <div className='login-container'>
            <div className='login-logo-container'>
                <img src={logo} alt="" />
            </div>
            <hr />
            <div className='login-input-container'>
                <form>
                    <Input 
                    type="text" 
                    name="input1" 
                    placeholder='User Name or Email'
                    value={inputs.input1 || ""} 
                    onChange={handleChange}
                    />
                    <Input 
                    type="password" 
                    name="input2" 
                    placeholder='Password *'
                    value={inputs.input2 || ""} 
                    onChange={handleChange}
                    />
                    <p className='forgot-text' onClick={() => {alert("Please contact an Admin")}}>Forgot?</p>
                    <Button onClick={handleSubmit}>Login</Button>
                </form>
            </div>
            
            <p>Don't have an account?</p>
            <a href="/register">Sign up</a>
        </div>
    </div>
    
  )
}
