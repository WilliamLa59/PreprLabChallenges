import React, { useState } from 'react'
import { Button, Input } from '@chakra-ui/react'
import Carousel from 'react-elastic-carousel'

import logo from "../../assets/logo.png";
import one from "../../assets/register-page/1.png";
import two from "../../assets/register-page/2.png";
import three from "../../assets/register-page/3.png";
import four from "../../assets/register-page/4.png";
import five from "../../assets/register-page/5.png";
import six from "../../assets/register-page/6.png";


import './Register.scss'
import { Carouselcard } from '../Carouselcard/Carouselcard';


export const Register = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Account not actually created. This is just a demonstration\n User Entered Info: \n"+JSON.stringify(inputs));
    }

  return (
    <div className='register-background-wrapper'>
      
      
      <div className='register-container'>
        <div className='register-carousel'>
          <Carousel>
            <Carouselcard img={one} title={"Welcome to Prepr"} desc={"Explore challenges, join a Lab, create projects and showcase your skills all in one place."}/>
            <Carouselcard img={two} title={"Explore Challenges"} desc={"Explore our collection of challenges in the Network and select a ones that you're most passionate about working on."}/>
            <Carouselcard img={three} title={"Discover and Join Labs Near You"} desc={"Labs are places where like-minded people co-create together by co-learning to co-Lab and co-solve real-world challenges."}/> 
            <Carouselcard img={four} title={"Build you Verified Project Profile"} desc={"Build and manage your portfolio of projects on the Prepr Lab Network."}/>
            <Carouselcard img={five} title={"Showcase Your Skills & Achivements"} desc={"Earn Prepr Points by tackling challenges, joining labs, creating projects, building teams and providing feedback on other projects."}/>
            <Carouselcard img={six} title={"Time To Unlock Your Learning Potential"} desc={"Future proof your skills by completing challenges and get your projects showcased!"}/>
          </Carousel>
        </div>
        <div className='register-form'>
          <div className='register-logo-container'>
            <img src={logo} alt="" />
          </div>
          <hr />
          <div className='register-input-container'>
            <form>
              <Input 
                type="text" 
                name="firstname" 
                placeholder='First Name *'
                value={inputs.firstname || ""} 
                onChange={handleChange}
              />
              <Input 
                type="text" 
                name="lastname" 
                placeholder='Last Name *'
                value={inputs.lastname || ""} 
                onChange={handleChange}
              />
              <Input 
                type="text" 
                name="username" 
                placeholder='Username *'
                value={inputs.username || ""} 
                onChange={handleChange}
              />
              <Input 
                type="password" 
                name="password1" 
                placeholder='Password *'
                value={inputs.password1 || ""} 
                onChange={handleChange}
              />
              <Input 
                type="password" 
                name="password2" 
                placeholder='Confirm Password *'
                value={inputs.password2 || ""} 
                onChange={handleChange}
              />
              <Input 
                type="email" 
                name="email" 
                placeholder='Email *'
                value={inputs.email || ""} 
                onChange={handleChange}
              />
              <Input 
                type="number" 
                name="phone" 
                placeholder='Phone Number *'
                value={inputs.phone || ""} 
                onChange={handleChange}
              />
              <Button onClick={handleSubmit}>Register</Button>
            </form>
          </div>
          <p>Already have an account?</p>
          <a href="/">Login</a>
        </div>
      </div>
    </div>
  )
}
