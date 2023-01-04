import React, { useState } from 'react'
import { Input, Textarea, Button, Select, CloseIcon } from '@chakra-ui/react'
import uploadimg from '../../assets/upload_img.png'

import "./Createproject.scss"

export const Createproject = (props) => {

    const [project, setProject] = useState({
        title: "",
        content: ""
    }); 

    function handleChange(event) {
        const { name, value } = event.target;

        setProject((prevProject) => {
            return {...prevProject, [name]: value};
        });
    }

    function submitProject(event) {
        props.onCreate(project);
        setProject({
            title: "",
            content: ""
        });
        event.preventDefault();
    }
  return (
    <div className="create-background-wrapper">
        <div className="create-container">
            <div className='create-header'>
                <h1 className="create-title">STEP 1: CREATE A NEW PROJECT</h1>
                
            </div>
            
            <hr />
            <form>
                <div className="upload-container">
                    <div className="upload-img">
                        <img src={uploadimg} alt="" />
                    </div>
                    <div className="upload-form">
                        <h1>Drag & drop</h1>
                        <h2>or</h2>
                        <Button>Choose a project cover image</Button>
                        <p>The cover image will be cropped to fit 625 x 355 pixels</p>
                        <h2>or</h2>
                        <Input type="text" placeholder="Insert embedded video code"/>
                    </div>
                </div>
                <p className='upload-subtext'>You will be able to creat your pitch and upload files later</p>
                <div className="create-form">
                    <div className='general-info'>
                        <Input name="title" value={project.title || ""} onChange={handleChange} placeholder="Project Name*"/>
                        <Textarea name="desc"  rows="11" value={project.desc || ""} onChange={handleChange} placeholder="Project Overview* (maximun 300 characters)"/>
                        <Input className="start-date" name="startdate" placeholder="Project Start Date *"/>
                    </div>
                    <div className='detailed-info'>
                        <Select placeholder='Category'>
                            <option value="32">Small-Mid Sized Business</option>
                            <option value="33">Community Organization</option>
                            <option value="34">Association</option>
                            <option value="35">Not-for-profit</option>
                            <option value="36">Employment Service Organization</option>
                            <option value="37">Settlement Organization</option>
                            <option value="38">District School Board</option>
                            <option value="39">Economic Development Office</option>
                            <option value="40">Board of Trade</option>
                            <option value="41">Chamber of Commerce</option>
                            <option value="42">Everyone</option>
                        </Select>
                        <Select placeholder="Industry">
                            <option value="1">Automotive</option>
                            <option value="2">Finance</option>
                            <option value="3">Consumer</option>
                            <option value="4">Education</option>
                            <option value="5">Engineering</option>
                            <option value="6">Energy</option>
                            <option value="7">Oil and gas</option>
                            <option value="8">Consumer Packaged Goods</option>
                            <option value="9">Financial Services</option>
                            <option value="10">Food and beverage</option>
                            <option value="11">Government</option>
                            <option value="12">Healthcare</option>
                            <option value="13">Insurance</option>
                            <option value="14">Legal</option>
                            <option value="15">Manufacturing</option>
                            <option value="16">Media</option>
                            <option value="17">Online</option>
                            <option value="18">Raw materials</option>
                            <option value="19">Real estate</option>
                            <option value="20">Industrials</option>
                            <option value="21">Retail</option>
                            <option value="22">Jewelry</option>
                            <option value="23">Technology</option>
                            <option value="24">Telecommunications</option>
                            <option value="25">Transportation (Travel)</option>
                            <option value="26">Electronics</option>
                            <option value="27">Not-for-profit</option>
                            <option value="28">Life sciences</option>
                            <option value="30">Hospitality</option>
                            <option value="31">Environment</option>
                        </Select>
                        <Select placeholder="Verticals">
                            <option value="30">LOHAS and wellness</option>
                            <option value="31">MarTech</option>
                            <option value="32">Mortgage Tech</option>
                            <option value="33">Nanotechnology</option>
                            <option value="35">Pet Technology</option>
                            <option value="36">Real Estate Technology</option>
                            <option value="37">Restaurant Technology</option>
                            <option value="38">Ridesharing</option>
                            <option value="39">Robotics and drones</option>
                            <option value="40">SaaS (software as a service)</option>
                            <option value="41">Space Technology</option>
                            <option value="42">TMT (Technology, media and telecommunications)</option>
                            <option value="43">Virtual reality</option>
                            <option value="44">Wearables</option>
                            <option value="47">Machine Learning &amp; Artificial Intelligence</option>
                            <option value="48">Virtual Reality / Augmented Reality / Mixed Reality</option>
                            <option value="49">ElderTech</option>
                            <option value="50">EdTech</option>
                            <option value="51">Blockchain</option>
                            <option value="52">FinTech</option>
                            <option value="53">MedTech</option>
                            <option value="54">CleanTech</option>
                            <option value="55">AdTech</option>
                            <option value="56">Cybersecurity</option>
                        </Select>

                        <Select placeholder='Type'>
                            <option value="1">Hackathon</option>
                            <option value="2">Sponsored Challenge</option>
                            <option value="3">Startup</option>
                            <option value="4">Passion</option>
                            <option value="8">Capstone</option>
                            <option value="9">Personal</option>
                            <option value="10">Assessment</option>
                            <option value="11">Innovation</option>
                            <option value="12">Learning</option>
                            <option value="13">Work</option>
                        </Select>

                        <Select placeholder='Stage'>
                            <option value="3">Prototype</option>
                            <option value="4">Validation</option>
                            <option value="5">Experimentation</option>
                            <option value="6">Pre-incubation</option>
                            <option value="7">Incubation</option>
                            <option value="8">Acceleration</option>
                            <option value="10">Scale-up</option>
                            <option value="13">Concept</option>
                            <option value="14">Idea</option>
                        </Select>

                        <Select placeholder="Status">
                            <option value="1">Active</option>
                            <option value="2">On-Hold</option>
                            <option value="3">Fundraising</option>
                            <option value="4">Closed</option>
                            <option value="8">Started</option>
                            <option value="9">Submitted</option>
                            <option value="10">Under Assessment</option>
                            <option value="11">Assessment Complete</option>
                        </Select>

                        <Select placeholder="Currently Recruiting">
                            <option value="1">Currently Recruiting</option>
                            <option value="0">Not Currently Recruiting</option>
                        </Select>
                    </div>
                    
                    
                </div>
                <Button onClick={submitProject}>Create</Button>
            </form>
        </div>
    </div>
  )
}
