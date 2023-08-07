import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css'
import ProjectItem from "./project/ProjectItem";
import Title from "../common/components/title/Title";

const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title/>
                <div className={style.projects}>
                    <ProjectItem
                    title={'First project'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                    <ProjectItem
                    title={'Second project'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;