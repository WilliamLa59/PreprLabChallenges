import React, {useState} from 'react'
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
    Button,
    InputGroup,
    InputLeftElement,
    Input,
    Icon,
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

import logo from '../../assets/logo.png'
import explore from '../../assets/explore.png'
import dashboard from '../../assets/web-browser.png'
import user_bashboard from '../../assets/user.png'
import settings from '../../assets/settings.png'
import user from '../../assets/user.png'
import search from '../../assets/search_icon.png'
import user_profile from '../../assets/user_profile.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'


export const Navbar = () => {
    const[isShowing, setIsShowing] = useState(false);
    
    const { isOpen: dashboardIsOpen, onOpen: dashboardOnOpen, onClose: dashboardOnClose } = useDisclosure()
    const { isOpen: manageIsOpen, onOpen: manageOnOpen, onClose: manageOnClose } = useDisclosure()

  return (
    <div className='navbar-container'>

        <img src={logo} alt="" />

        <FontAwesomeIcon className="nav-bars" icon={faBars} onClick={() => setIsShowing(!isShowing)}/>
        
        <div className="side-nav" style={isShowing ? {left: "0px"} : {left: "-50vw"}}>
            <img className='side-nav-profile'src={user_profile} alt="" />
            <a href="">William La</a>
            <h3>Browse</h3>
            <ul>
                <li>
                    Explore
                </li>
                <li>
                    Labs
                </li>
                <li>
                    Challenges
                </li>
                <li>
                    Organizations
                </li>
            </ul>
            <h3>My Activity</h3>
            <ul>
                <li>
                    Projects
                </li>
                <li>
                    Team Matching
                </li>
                <li>
                    Achievements
                </li>
                <li>
                    Resources
                </li>
                <li>
                    Help Center
                </li>
                <li>
                    v8.0.1
                </li>
            </ul>
        </div>   
      

        <div className="nav-items">
            <Button className="nav-btn" width='100px' variant='ghost' leftIcon={<img src={explore} alt=''/>}>
                Explore
            </Button>

            <Menu isOpen={dashboardIsOpen}>
                <MenuButton className="nav-btn" onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose} as={Button} width='145x' variant='ghost' leftIcon={<img className='nav-icon' src={dashboard} alt=''/>}> My Dashboard</MenuButton>
                <MenuList onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose}>
                    <MenuItem>User Dashboard</MenuItem>
                </MenuList>
            </Menu>

            <Menu className="nav-btn" isOpen={manageIsOpen}>
                <MenuButton className="nav-btn" onMouseEnter={manageOnOpen} onMouseLeave={manageOnClose} as={Button} width='110px' variant='ghost' leftIcon={<img className='nav-icon' src={settings} alt=''/>}>Manage</MenuButton>
                <MenuList onMouseEnter={manageOnOpen} onMouseLeave={manageOnClose}>
                    <MenuItem>Profile</MenuItem>
                </MenuList>
            </Menu>

            <InputGroup className='input-container' width="400px">
                <InputLeftElement children={<SearchIcon/>} />
                <Input type="text" placeholder="Search Challenges, Labs, Projects and People" size="md" width="375px"/>
            </InputGroup>

            <Menu>
                {({ isOpen }) => (
                    <React.Fragment>
                    <MenuButton isActive={isOpen} as={Button} variant='ghost'>
                        <img className='nav-profile-icon' src={user_profile} alt="" />
                    </MenuButton>
                    <MenuList>
                        <MenuItem>William La</MenuItem>
                        <MenuItem>Help</MenuItem>
                        <MenuItem>Inbox</MenuItem>
                        <MenuItem>Newsfeed</MenuItem>
                        <MenuItem>Notifications 0</MenuItem>
                        <MenuItem>Settings</MenuItem>
                        <MenuItem>Log Out</MenuItem>
                    </MenuList>
                    </React.Fragment>
                )}
            </Menu>
        </div>
    </div>
  )
}
