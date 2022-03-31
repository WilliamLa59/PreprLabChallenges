import React from 'react'
import { Card } from '../Card/Card'
import { Pagenav } from '../Pagenav/Pagenav'

import './Projects.scss'

import project1 from '../../assets/project-cards/project1.png'
import project2 from '../../assets/project-cards/project2.png'
import project3 from '../../assets/project-cards/project3.png'
import project4 from '../../assets/project-cards/project4.png'
import project5 from '../../assets/project-cards/project5.png'

export const Projects = () => {
  return (
    <div className='projects-container'>
      <div className='projects-header'>
        <h2>Welcome, William La</h2>
      </div>
      <Pagenav/>
      <div className='card-list'>
        <Card img={project1} id="Project" name="StyleMe" desc="Landing Page for Team 13's StyleMe"/>
        <Card img={project2} id="Project" name="Xenon" desc="Landing Page for Team 10's Xenon"/>
        <Card img={project3} id="Project" name="FoodCycle" desc="Landing Page for Team 3's FoodCycle"/>
        <Card img={project4} id="Project" name="Fitsall" desc="Landing Page for Team 6's Fitsall"/>
        <Card img={project5} id="Project" name="SmallBasket" desc="Landing Page for Team 8's SmallBasket"/>
      </div>
    </div>
  )
}
