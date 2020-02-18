import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component{
    render(){
        const { title, description, image, link } = this.props.project;
        return(
            <div style={{display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='project file' style={{height: 170, width: 300}}></img>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component{
    render(){
        return(
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(project => {
                            return(
                            <Project key={project.id} project={project}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;