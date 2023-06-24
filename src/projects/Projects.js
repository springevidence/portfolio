import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css'
import ProjectItem from "./project/ProjectItem";

const Projects = () => {
    return (
        <div className={style.projectBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects}>
                    <ProjectItem link={'https://images.steelcase.com/image/upload/c_fill,q_auto,f_auto,h_656,w_1166/v1584641917/www.steelcase.com/2020/03/19/20-0136326.jpg'}
                    alt={'project img'}
                    title={'First project'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                    <ProjectItem link={'https://images.steelcase.com/image/upload/c_fill,q_auto,f_auto,h_656,w_1166/v1584641917/www.steelcase.com/2020/03/19/20-0136326.jpg'}
                    alt={'project img'}
                    title={'Second project'}
                    description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>

                </div>
            </div>
        </div>
    );
};

export default Projects;