import React from 'react'

import './Challenge.scss'

export const Challenge = (props) => {
  return (
    <div className='challenge'>
        
        <div className='challenge-card'>

            <div className='challenge-img'>
                <img src={props.img} alt="" />
            </div>
            
            <div className='challenge-content'>
                <h1 className='challenge-name'>{props.name}</h1>
                <p className='id'>Challenge</p>
                <p className='challenge-desc'>{props.desc}</p>
                <div className='btn-container'>
                    <a className='view-btn' href="">View</a>
                </div>
            </div>
        </div>
        <hr className='card-spacer'/>
    </div>
   
  )
}
