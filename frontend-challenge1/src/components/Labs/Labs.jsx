import React from 'react'
import { Card } from '../Card/Card'
import { Pagenav } from '../Pagenav/Pagenav'

import './Labs.scss'

import lab1 from '../../assets/lab-cards/lab1.png'
import lab2 from '../../assets/lab-cards/lab2.png'
import lab3 from '../../assets/lab-cards/lab3.png'
import lab4 from '../../assets/lab-cards/lab4.png'
import lab5 from '../../assets/lab-cards/lab5.png'
import lab6 from '../../assets/lab-cards/lab6.png'
import lab7 from '../../assets/lab-cards/lab7.png'


export const Labs = () => {
  return (
    <div className='labs-container'>
      <div className='labs-header'>
        <h2>Welcome, William La</h2>
      </div>
      <Pagenav/>  
      <div className='card-list'>
        <Card img={lab1} id="Lab" name="FUN Lab - Spring 2022" desc="Welcome to the Spring 2022 cohort of the F.U.N. program! We are so excited to help you launch your career over the next few months. This Lab is going to be your resource hub where we will be sharing resources and key updates. Check back regularly!"/>
        <Card img={lab2} id="Lab" name="Mid-Senior Full Stack Developer Lab" desc="In this lab, you can find the challenges that help you understand the process for Front end developer, Back end developer and DB design & optimizer"/>
        <Card img={lab3} id="Lab" name="Industry Future Challenge 2022 Lab" desc="Industry Future Challenge 2022 Lab"/>
        <Card img={lab4} id="Lab" name="Getting Started Using the PreprLabs Network" desc="Welcome to the PreprLabs Network! Use this Lab to learn how to navigate the platform and get the most out of your upskilling experience."/>
        <Card img={lab5} id="Lab" name="Volunteer Onboarding Lab" desc="Complete the included Challenges in order to orient yourself as a volunteer with Prepr."/>
        <Card img={lab6} id="Lab" name="Metrix Systems Thinking Lab" desc="Systems thinking is a way of seeing problems holistically and understanding how systems create the patterns and events we see around us. Join us in the Systems Thinking Lab to learn how to define problems, ask better questions and make more effective decisions."/>
        <Card img={lab7} id="Lab" name="Getting Started Lab for Corporate Innovation" desc="If you're here then you're operating or working for a corporation with a need to innovate competitively. So we've prepared a series of Challenges just for you! The Challenges in this Lab are designed to help your corporation and your members learn how you can get the most out of our platform absolut..."/>
      </div>
    </div>
  )
}
