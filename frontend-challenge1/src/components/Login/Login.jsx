import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
            navigate("/", {replace: true});
        }else{
            alert("Username or password don't match");
        }
    }

  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="input1" 
            placeholder='User Name or Email'
            value={inputs.input1 || ""} 
            onChange={handleChange}
            />
            <input 
            type="password" 
            name="input2" 
            placeholder='Password *'
            value={inputs.input2 || ""} 
            onChange={handleChange}
            />
            <input type="submit" />
        </form>
    </div>
  )
}
