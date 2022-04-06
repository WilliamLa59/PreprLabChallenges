import React, { useState } from 'react'


import './Register.scss'

export const Register = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(inputs));
    }

  return (
    <div className='register-container'>
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            name="firstname" 
            placeholder='First Name *'
            value={inputs.firstName || ""} 
            onChange={handleChange}
        />
        <input 
          type="text" 
          name="lastname" 
          placeholder='Last Name *'
          value={inputs.lastName || ""} 
          onChange={handleChange}
        />
        <input 
          type="text" 
          name="username" 
          placeholder='Username *'
          value={inputs.username || ""} 
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password1" 
          placeholder='Password *'
          value={inputs.password1 || ""} 
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password2" 
          placeholder='Confirm Password *'
          value={inputs.password2 || ""} 
          onChange={handleChange}
        />
        <input 
          type="email" 
          name="email" 
          placeholder='Email *'
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        <input 
          type="number" 
          name="phone" 
          placeholder='Phone Number *'
          value={inputs.phone || ""} 
          onChange={handleChange}
        />
        <input type="submit" />
    </form>
    </div>
  )
}
