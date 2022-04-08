import React, { useState } from 'react'
import { Project } from '../Project/Project';
import { Createproject } from "../Createproject/Createproject";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import "./Dashboard.scss"

export const Dashboard = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [projects, setProjects] = useState([]);

    function addProject(newProject) {
        setProjects(prevProject => {
            return [...prevProject, newProject];
        });
        setIsOpen(!isOpen)   
    }
    
  return (
    <div className='dashboard-background-wrapper'>
        <div className='dashboard-container'>
            <div className='project-dash dashboard'>
                <div className='dashboard-header'>
                    <h1>Projects</h1>
                    <Button height="25px" bg="#28a745" color="white" onClick={()=>{setIsOpen(!isOpen)}}>Create</Button>
                </div>
                <div className="createproject-container"style={isOpen ? {display: "inline"} : {display: "none"}}>
                    <CloseIcon className="create-closeicon"onClick={()=>{setIsOpen(!isOpen)}}/>
                    <Createproject onCreate={addProject}/>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>My Projects</Tab>
                        <Tab>Needs Assessing</Tab>
                        <Tab>Invited</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                            {projects.reverse().map((projectItem, index) => {
                                return (
                                    <Project
                                            key={index}
                                            id={index}
                                            title={projectItem.title}
                                            desc={projectItem.desc}
                                        />
                                );
                            })}  
                            <Project title="WL - Frontend Challenge 2" desc="William La WD Challenge2 ..."/>
                            <Project title="William La WD Challenge1" desc="WL - Frontend Challenge1 ..."/>
                            <Project title="WL - Career Planning 7" desc="WL - Career Planning 7 ..."/>
                            <Project title="WL - Career Planning 6" desc="WL - Career Planning 6 ..."/>
                            <Project title="WL - Career Planning 5" desc="WL - Career Planning 5 ..."/>
                            <Project title="WL - Career Planning 4" desc="WL - Career Planning 4 ..."/>
                            <Project title="WL - Career Planning 3" desc="WL - Career Planning 3 ..."/>
                            <Project title="WL - Career Planning 2" desc="WL - Career Planning 2 ..."/>
                            <Project title="WL - Career Planning 1" desc="WL - Career Planning 1 ..."/>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Assessments needed</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Project invitations</p>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </div>
            
            <div className='challenge-dash dashboard'>
                <div className='dashboard-header'>
                    <h1>Challenges</h1>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>My Challenges</Tab>
                        <Tab>Invited</Tab>
                        <Tab>Following</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                            <Project title="F.U.N Program - Team marketing Challenge" desc="..."/>
                            <Project title="F.U.N Program - Team Landing Page Challenge" desc="..."/>
                            <Project title="F.U.N Program - Industry Future Challenge" desc="..."/>
                            <Project title="Frontend Developer Challenge 4: Accessibilitiy Integration" desc="..."/>
                            <Project title="Frontend Developer Challenge 3: Dashboard and Project Creation" desc="..."/>
                            <Project title="Frontend Developer Challenge 2: Login System" desc="..."/>
                            <Project title="Frontend Developer Challenge 1: Web Page Creation" desc="..."/>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Challenge invitations</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Challenge invitations</p>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </div>

            <div className='lab-dash dashboard'>
                <div className='dashboard-header'>
                    <h1>Labs</h1>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>My Labs</Tab>
                        <Tab>Invited</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                            <Project title="F.U.N Lab - Spring 2022" desc="..."/>
                            <Project title="Career Planning Lab" desc="..."/>
                            <Project title="Web Developer Career Lab" desc="..."/>
                            <Project title="Full Stack Developer Career Lab" desc="..."/>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Challenge invitations</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

            <div className='inbox-dash dashboard'>
                <div className='dashboard-header'>
                    <h1>My Inbox</h1>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>My Chats</Tab>
                        <Tab>Friend Requests</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                        <p>No pending Chats</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Friends Request</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

            <div className='discussion-dash dashboard wide-dash'>
                <div className='dashboard-header'>
                    <h1>Discussions</h1>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>Projects</Tab>
                        <Tab>Challenges</Tab>
                        <Tab>Labs</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                            <p>No pending Project Discussions</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Challenge Discussions</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Lab Discussions</p>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </div>

            <div className='recommend-dash dashboard'>
                <div className='dashboard-header'>
                    <h1>Recommendations</h1>
                </div>
                <Tabs isFitted>
                    <TabList>
                        <Tab>Labs</Tab>
                        <Tab>Challenges</Tab>
                        <Tab>Resources</Tab>
                    </TabList>
                
                    <TabPanels overflowY="scroll" maxHeight="30vh">
                        <TabPanel>
                            <p>No pending Lab Recommendations</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Challenge Recommendations</p>
                        </TabPanel>
                        <TabPanel>
                            <p>No pending Resource Recommendations</p>
                        </TabPanel>

                    </TabPanels>
                </Tabs>
            </div>
        </div>
    </div>
    
  )
}
