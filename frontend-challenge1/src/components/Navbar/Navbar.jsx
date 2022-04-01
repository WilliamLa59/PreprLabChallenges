import React, {useEffect, useState, useRef} from 'react'
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
    Switch,
    FormLabel,
    FormControl,
    color,
    
} from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

import logo from '../../assets/logo.png'
import explore from '../../assets/explore.png'
import dashboard from '../../assets/web-browser.png'
import user_dashboard from '../../assets/user.png'
import settings from '../../assets/settings.png'
import user from '../../assets/user.png'
import user_profile from '../../assets/user_profile.png'

import labs from '../../assets/labs.png'
import challenges from '../../assets/challenges.png'
import organizations from '../../assets/organizations.png'
import projects from '../../assets/projects.png'
import teammatching from '../../assets/teammatching.png'
import achievements from '../../assets/achievements.png'
import resources from '../../assets/resources.png'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faUser, faQuestionCircle, faEnvelope, faNewspaper, faBell, faCog, faSignOut, faPeopleGroup } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'


export const Navbar = () => {
    const[isShowing, setIsShowing] = useState(false);
    
    const { isOpen: dashboardIsOpen, onOpen: dashboardOnOpen, onClose: dashboardOnClose } = useDisclosure()
    const { isOpen: manageIsOpen, onOpen: manageOnOpen, onClose: manageOnClose } = useDisclosure()
    
    const prevScrollY = useRef(0);

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {                                           //Scroll Event Listener taken from here: 
        const handleScroll = () => {                            //https://javascript.plainenglish.io/how-to-update-a-state-in-a-react-component-in-a-scroll-event-listener-b04ecc7e26e6
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY) {
                setIsShowing(false);
            }
            if (prevScrollY.current > currentScrollY) {
                setIsShowing(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isShowing]);

    useEffect(()=> {
        
        if(darkMode){
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        if(!darkMode){
            document.documentElement.setAttribute('data-theme', 'light');
        }
        // console.log("dark mode:" +darkMode);
    },[darkMode]);

  return (
    <div className='navbar-container' >
        
        <div className='logo-container'>
            <img src={logo} alt="" />

            <FontAwesomeIcon className="nav-bars" icon={faBars} onClick={() => setIsShowing(!isShowing)}/>
        </div>
       
        
        <div className="side-nav" style={isShowing ? {left: "0px"} : {left: "-75vw"}}>
            <img className='side-nav-profile'src={user_profile} alt="" />
            <a className='profile-link' href="">William La</a>

            <div className="darkmode-switch">
                <FormLabel htmlFor='darkmode' style={darkMode? {color: "var(--nav-font-color)"} : {}}>Dark Mode</FormLabel>
                <Switch id="darkmode" colorScheme="gray" onChange={() => setDarkMode(!darkMode)}/>
            </div>

            <div className='side-nav-btns'>
                <h3 className='side-nav-divider'>Browse</h3>
                <ul>
                    <li className='side-nav-item'>
                        <img className='side-nav-icon' src={explore} alt="" />
                        Explore
                    </li>
                    <li>
                        <a className='side-nav-item' href="/labs">
                            <img className='side-nav-icon' src={labs} alt="" />
                            Labs
                        </a>
                    </li>
                    <li >
                        <a className='side-nav-item' href="/">
                            <img className='side-nav-icon' src={challenges} alt="" />
                            Challenges
                        </a>
                    </li>
                    <li className='side-nav-item'>
                        <img className='side-nav-icon' src={organizations} alt="" />
                        Organizations
                    </li>
                </ul>
                <h3 className='side-nav-divider'>My Activity</h3>
                <ul>
                    <li>
                        <a className='side-nav-item' href="/projects">
                            <img className='side-nav-icon' src={projects} alt="" />
                            Projects
                        </a>
                    </li>
                    <li className='side-nav-item'>
                        <FontAwesomeIcon className='side-nav-icon'icon={faPeopleGroup}/>
                        Team Matching
                    </li>
                    <li className='side-nav-item'>
                        <img className='side-nav-icon' src={achievements} alt="" />
                        Achievements
                    </li>
                    <li className='side-nav-item'>
                        <img className='side-nav-icon' src={resources} alt="" />
                        Resources
                    </li>
                    <li className='side-nav-item no-icon'>
                        Help Center
                    </li>
                    <li className='side-nav-item no-icon'>
                        v8.0.1
                    </li>
                </ul>
            </div>
        </div>   
      

        <div className="nav-items">
            <Button className="nav-btn explore-btn" variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'} leftIcon={<img src={explore} alt=''/>}>
                <p className='nav-btn-text'>Explore</p>
            </Button>

            <Menu isOpen={dashboardIsOpen}>
                <MenuButton className="nav-btn dashboard-btn" onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose} as={Button} variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'} leftIcon={<img className='nav-icon' src={dashboard} alt=''/>}><p className='nav-btn-text'>My Dashboard</p></MenuButton>
                <MenuList onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose} bg={darkMode ? '#434343' : '#fff'}>
                    <MenuItem icon={<img className='nav-icon' src={user_dashboard} alt=''/>} style={darkMode? {color: "var(--nav-font-color)"} : {}}>User Dashboard</MenuItem>
                </MenuList>
            </Menu>

            <Menu isOpen={manageIsOpen}>
                <MenuButton className="nav-btn manage-btn" onMouseEnter={manageOnOpen} onMouseLeave={manageOnClose} as={Button} variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'} leftIcon={<img className='nav-icon' src={settings} alt=''/>}><p className='nav-btn-text'>Manage</p></MenuButton>
                <MenuList onMouseEnter={manageOnOpen} onMouseLeave={manageOnClose} bg={darkMode ? '#434343' : '#fff'}>
                    <MenuItem icon={<img className='nav-icon' src={user} alt=''/>} style={darkMode? {color: "var(--nav-font-color)"} : {}}>Profile</MenuItem>
                </MenuList>
            </Menu>

            <br />

            <div className='input-container'>
                <InputGroup width="400px">
                    <InputLeftElement children={<SearchIcon/>} />
                    <Input type="text" placeholder="Search Challenges, Labs, Projects and People" size="md" width="375px"/>
                </InputGroup>
            </div>
            

            <Menu>
                {({ isOpen }) => (
                    <React.Fragment>
                    <MenuButton className='dropdown-btn' isActive={isOpen} as={Button} variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'}>
                        <img className='nav-profile-icon' src={user_profile} alt="" />
                    </MenuButton>
                    <MenuList bg={darkMode ? '#434343' : '#fff'}>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}}><img className='dropdown-profile-icon' src={user_profile} alt=''></img>William La</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faUser} color="var(--general-font-color)"/>}>My Info</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faQuestionCircle} color="var(--general-font-color)"/>}>Help</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faEnvelope} color="var(--general-font-color)"/>}>Inbox</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faNewspaper} color="var(--general-font-color)"/>} >Newsfeed</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faBell} color="var(--general-font-color)"/>}>Notifications 0</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faCog} color="var(--general-font-color)"/>}>Settings</MenuItem>
                        <MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faSignOut} color="var(--general-font-color)"/>}>Log Out</MenuItem>
                    </MenuList>
                    </React.Fragment>
                )}
            </Menu>
        </div>
    </div>
  )
}
