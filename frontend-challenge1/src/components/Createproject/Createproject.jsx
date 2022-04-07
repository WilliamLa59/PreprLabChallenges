import React, { useState } from 'react'

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
    <div>
        <form >
            <input name="title" value={project.title || ""} onChange={handleChange} placeholder="Title"/>
            <input name="desc" value={project.desc || ""} onChange={handleChange} placeholder="Desc"/>
            <button onClick={submitProject}>Create</button>
        </form>
    </div>
  )
}
