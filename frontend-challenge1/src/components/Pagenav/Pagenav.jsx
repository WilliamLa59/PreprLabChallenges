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
            <Button className="pagenav-btn" style={currentRoute === '/' ? {color: "#27ae60", backgroundColor: "var(--active-btn-color)"} : {color: "var(--general-font-color)", backgroundColor: "var(--btn-color)"}}><Link to='/'>Challenges</Link></Button>
            <Button className="pagenav-btn" style={currentRoute === '/labs' ? {color: "#27ae60", backgroundColor: "var(--active-btn-color)"} : {color: "var(--general-font-color)", backgroundColor: "var(--btn-color)"}}><Link to='/labs'>Labs</Link></Button>
            <Button className="pagenav-btn" style={currentRoute === '/projects' ? {color: "#27ae60", backgroundColor: "var(--active-btn-color)"} : {color: "var(--general-font-color)", backgroundColor: "var(--btn-color)"}}><Link to='/projects'>Projects</Link></Button>
        </div>
    </div>
  )
}
