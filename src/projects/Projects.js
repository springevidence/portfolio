import React from 'react';
import style from './Projects.module.scss'
import ProjectItem from "./project/ProjectItem";
import Title from "../common/components/title/Title";
import todoImage from '../assets/image/todolist.jpeg';
import socialImage from '../assets/image/social-network.png';

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
        borderRadius: '20px'
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
        borderRadius: '20px'
    }
    return (
        <div id='projects' className={style.projectBlock}>
            <div className={style.container}>
                <Title text={'Мои проекты'}/>
                <div className={style.projects}>
                    <ProjectItem style={todolist}
                    title={'Todolist'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                    <ProjectItem style={social}
                    title={'Social Network'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;