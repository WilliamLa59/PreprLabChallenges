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
    InputRightElement,
    Input,
    Switch,
    FormLabel,
    Select,
    Radio,
    
} from "@chakra-ui/react"
import { SearchIcon, CloseIcon, ArrowUpDownIcon} from '@chakra-ui/icons'
import { Link, useLocation, useNavigate } from 'react-router-dom'

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
import { faBars,faUser, faQuestionCircle, faEnvelope, faNewspaper, faBell, faCog, faSignOut, faPeopleGroup, faWheelchair } from '@fortawesome/free-solid-svg-icons'

import './Navbar.scss'
import { transform } from 'framer-motion'

export const Navbar = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isShowingAccess, setIsShowingAcess] = useState(false);


    const { isOpen: dashboardIsOpen, onOpen: dashboardOnOpen, onClose: dashboardOnClose } = useDisclosure()
    const { isOpen: manageIsOpen, onOpen: manageOnOpen, onClose: manageOnClose } = useDisclosure()
    
    const prevScrollY = useRef(0);
    const location = useLocation();
    const [currentRoute, setCurrentRoute] = useState(location.pathname)
    const navigate = useNavigate();

    function handleClick (event) {
        if (event.target.style.backgroundColor === "green"){
            event.target.style.backgroundColor = "#edf2f7";
        }else{
            event.target.style.backgroundColor = "green";
        }
        
    }

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

    useEffect(() => {
        if(darkMode){
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        if(!darkMode){
            document.documentElement.setAttribute('data-theme', 'light');
        }
        // console.log("dark mode:" +darkMode);
    },[darkMode]);

    useEffect(() =>{
       setCurrentRoute(location.pathname);
    //    console.log(currentRoute);
    },[location.pathname])

  return (
    <div className='navbar-container' style={currentRoute === '/' || currentRoute === '/register' ? {display: 'none'} : {display: 'flex'}}>
        
        <div className='logo-container'>
            <img src={logo} alt="" onClick={() => {navigate("/challenges", {replace:true})}} style={{cursor: "pointer"}}/>

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
        
        <Button className="access-btn" onClick={() => setIsShowingAcess(!isShowingAccess)}><FontAwesomeIcon size='lg' icon={faWheelchair}/></Button>

        <div className="accessibility-nav" style={isShowingAccess ? { transform: 'scale(1)'} : { transform: 'scale(0.8)', opacity: '0', height: '0', overflow:"hidden"}}>
            <div className='accessibility-taskbar'>
                <div className='task-btns'>
                    <Button size="sm" onClick={() => setIsShowingAcess(!isShowingAccess)}><CloseIcon/></Button>
                    <Button size="sm"><ArrowUpDownIcon style={{transform:"rotate(90deg)"}}/></Button>
                </div>
                
                <div className='language-selector' isfullwidth='false'>
                    <Select placeholder="English">
                        <option value="2">Spanish</option>
                        <option value="3">Chinese</option>
                        <option value="4">Hindi</option>
                        <option value="5">Arabic</option>
                        <option value="6">Portuguese</option>
                        <option value="7">Bengali</option>
                        <option value="8">Russian </option>
                        <option value="9">Japanese </option>
                        <option value="10">Lahnda</option>

                    </Select>
                </div>
            </div>

            <div className='accessibility-header'>
                <h1>Accessibility Adjustments</h1>
                <div className='header-btns'>
                    <Button onClick={() => {window.location.reload(false)}}>Reset Settings</Button>
                    <Button>Statement</Button>
                    <Button>Hide Interface</Button>
                </div>
            </div>

            <div className='accessibility-body'>
                <div className='accessibility-search'>
                    <InputGroup>
                        <Input type="text" placeholder="Searchthe online dictionary..." size="md"/>
                        <InputRightElement children={<SearchIcon/>} />
                    </InputGroup>
                </div>
                <div className='accessibility-toggles'>
                    <h1 className='accessibility-panel-title'>Choose the right accessibility profile for you</h1>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                            <h2>Seizure Safe Profile</h2>
                            <p>Eliminates flashes and reduces color</p>
                        </div>
                    </div>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                        <h2>Vision Impared Profile</h2>
                        <p>Enhances the wbesite's visuals</p>
                        </div>
                    </div>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                        <h2>Cognitive Disability Profile</h2>
                        <p>Assists with reading and focusing</p>
                        </div>
                    </div>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                        <h2>ADHD Friendly Profile</h2>
                        <p>More focus and fewer distractions</p>
                        </div>
                    </div>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                        <h2>Blind Users (Screen-reader)</h2>
                        <p>Use the website with your screen-reader</p>
                        </div>
                    </div>
                    <div className='switch-option'>
                        <Switch size='lg' colorScheme='green'></Switch>
                        <div className='switch-option-text'>
                        <h2>Keyboard Navigation (Motor)</h2>
                        <p>Use the website with the keyboard</p>
                        </div>
                    </div>
                    
                </div>

                <div className='accessibility-content accessibility-panel'>
                    <h1 className='accessibility-panel-title'>Content Adjustments</h1>
                    <div className='accessibility-btn-grid6'>
                        <Button className="accessibility-btn" onClick={handleClick}>Readable Font</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Highlight Titles</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Highlight Links</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Text Magnifier</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Align Center</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Align Left</Button>
                    </div>
                </div>

                <div className='accessibility-colors accessibility-panel'>
                    <h1 className='accessibility-panel-title'>Color Adjustments</h1>
                    <div className='accessibility-btn-grid6'>
                        <Button className="accessibility-btn" onClick={handleClick}>Dark Contrast</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Light Contrast</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>High Contrast</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Low Saturation</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>High Saturation</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Monochrome</Button>
                    </div>
                </div>
                <div className='accessibility-orientation accessibility-panel'>
                    <h1 className='accessibility-panel-title'>Orientation Adjustment</h1>
                    <div className='accessibility-btn-grid4'>
                        <Button className="accessibility-btn" onClick={handleClick}>Mute Sounds</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Hide Images</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Stop Animations</Button>
                        <Button className="accessibility-btn" onClick={handleClick}>Highlight Focus</Button>
                    </div>
                </div>
            </div>
        </div>

        <div className="nav-items">
            <Button className="nav-btn explore-btn" variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'} leftIcon={<img src={explore} alt=''/>}>
                <p className='nav-btn-text'>Explore</p>
            </Button>

            <Menu isOpen={dashboardIsOpen}>
                <MenuButton className="nav-btn dashboard-btn" onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose} as={Button} variant='ghost' colorScheme={darkMode ? 'whiteAlpha' : 'gray'} leftIcon={<img className='nav-icon' src={dashboard} alt=''/>}><p className='nav-btn-text'>My Dashboard</p></MenuButton>
                <MenuList onMouseEnter={dashboardOnOpen} onMouseLeave={dashboardOnClose} bg={darkMode ? '#434343' : '#fff'}>
                    <Link to="/user/home"><MenuItem icon={<img className='nav-icon' src={user_dashboard} alt=''/>} style={darkMode? {color: "var(--nav-font-color)"} : {}}>User Dashboard</MenuItem></Link>
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
                <InputGroup>
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
                        <Link to='/'><MenuItem style={darkMode? {color: "var(--nav-font-color)"} : {}} icon={<FontAwesomeIcon icon={faSignOut} color="var(--general-font-color)"/>}>Log Out</MenuItem></Link>
                    </MenuList>
                    </React.Fragment>
                )}
            </Menu>
        </div>
    </div>
  )
}
