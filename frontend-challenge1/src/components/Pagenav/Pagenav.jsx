import React, { useState } from 'react'
import { Button } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom'

import './Pagenav.scss'

export const Pagenav = () => {
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState(location.pathname)

  return (
    <div className='pagenav-container'>
        <div className='content-container'>
            Explore
        </div>
        <div className='nav-container'>
            <Button className="pagenav-btn" style={currentRoute === '/' ? {color: "#27ae60", backgroundColor: "#f5f5f5"} : {color: "##8b8b8b", backgroundColor: "#fff"}}><Link to='/'>Challenges</Link></Button>
            <Button className="pagenav-btn" style={currentRoute === '/labs' ? {color: "#27ae60", backgroundColor: "#f5f5f5"} : {color: "##8b8b8b", backgroundColor: "#fff"}}><Link to='/labs'>Labs</Link></Button>
            <Button className="pagenav-btn" style={currentRoute === '/projects' ? {color: "#27ae60", backgroundColor: "#f5f5f5"} : {color: "##8b8b8b", backgroundColor: "#fff"}}><Link to='/projects'>Projects</Link></Button>
        </div>
    </div>
  )
}
