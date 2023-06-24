import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import SkillItem from "./skill/SkillItem";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <SkillItem title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                    <SkillItem title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                    <SkillItem title={'Java Script'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consequuntur dicta ea expedita pariatur? Blanditiis distinctio eius eos, et fugit illum iste, itaque, mollitia officia possimus quas ratione sapiente ut?'}/>
                </div>
            </div>

        </div>
    );
};

export default Skills;