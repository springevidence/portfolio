import React from 'react';
import style from './Projects.module.scss'
import ProjectItem from "./project/ProjectItem";
import Title from "../common/components/title/Title";
import todoImage from '../assets/image/todolist.jpeg';
import socialImage from '../assets/image/social-network.png';
import minesweeperImage from '../assets/image/minesweeper.jpeg';

const Projects = () => {
    const social = {
        backgroundImage: `url(${socialImage})`,
        borderRadius: '20px'
    }
    const todolist = {
        backgroundImage: `url(${todoImage})`,
        borderRadius: '20px'
    }
    const minesweeper = {
        backgroundImage: `url(${minesweeperImage})`,
        borderRadius: '20px'
    }
    return (
        <div id='projects' className={style.projectBlock}>
            <div className={style.container}>
                <Title text={'Мои проекты'}/>
                <div className={style.projects}>
                    <ProjectItem style={todolist}
                                 href = {''}
                    title={'Todolist'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? '}/>
                    <ProjectItem style={social}
                                 href = {''}
                    title={'Social Network'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? '}/>
                    <ProjectItem style={minesweeper}
                                 href = {'https://springevidence.github.io/minesweeper/'}
                    title={'Minesweeper'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? '}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;