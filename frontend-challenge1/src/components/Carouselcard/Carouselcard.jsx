import React from 'react'

import "./Carouselcard.scss"

export const Carouselcard = (props) => {
  return (
    <div className='carousel-card'>
        <img className="carousel-img" src={props.img} alt="" />
        <h1 className="carousel-title">{props.title}</h1>
        <p className="carousel-desc">{props.desc}</p>
    </div>
  )
}
