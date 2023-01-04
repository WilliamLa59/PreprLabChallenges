import React from 'react'

import logo from '../../assets/logo.png'

import './Project.scss'

export const Project = (props) => {
  return (
    <div className='project'>
        <h1>{props.title}</h1>
        <div className='project-content'>
            <img src={logo} alt="" />
            <p>{props.desc}</p>
        </div>
        <hr />
    </div>
  )
}
