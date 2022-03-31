import React from 'react'

import './Card.scss'

export const Card = (props) => {
  return (
    <div className='card-container'>
        
        <div className='card'>

            <div className='card-img'>
                <img src={props.img} alt="" />
            </div>
            
            <div className='card-content'>
                <h1 className='card-name'>{props.name}</h1>
                <p className='id'>{props.id}</p>
                <p className='card-desc'>{props.desc}</p>
                <div className='btn-container'>
                    <a className='view-btn' href="">View</a>
                </div>
            </div>
        </div>
        <hr className='card-spacer'/>
    </div>
   
  )
}
