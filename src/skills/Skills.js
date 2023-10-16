import React from 'react';
import style from './Skills.module.scss'
import SkillItem from "./skill/SkillItem";
import Title from "../common/components/title/Title";
import htmlImage from '../assets/image/html.svg';
import cssImage from '../assets/image/css.svg';
import jsImage from '../assets/image/javascript.svg';
import reactImage from '../assets/image/react.svg';
import reduxImage from '../assets/image/redux.svg';
import storybookImage from '../assets/image/storybook.svg';
import Fade from 'react-reveal/Fade';

const Skills = () => {
    const htmlImg = {
        backgroundImage: `url(${htmlImage})`
    }
    const cssImg = {
        backgroundImage: `url(${cssImage})`
    }
    const jsImg = {
        backgroundImage: `url(${jsImage})`
    }
    const reactImg = {
        backgroundImage: `url(${reactImage})`,
        height: '68px'
    }
    const reduxImg = {
        backgroundImage: `url(${reduxImage})`
    }
    const storybookImg = {
        backgroundImage: `url(${storybookImage})`
    }
    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.container}>
                <Title text={'Навыки'}/>
                <Fade left>
                    <div className={style.skills}>
                        <SkillItem style={htmlImg} title={'HTML'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

                        <SkillItem style={cssImg} title={'CSS'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>

                        <SkillItem style={jsImg} title={'Java Script'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>

                        <SkillItem style={reactImg} title={'React'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>

                        <SkillItem style={reduxImg} title={'Redux'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '}/>

                        <SkillItem style={storybookImg} title={'Storybook'}
                                   description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    </div>
                </Fade>

            </div>
        </div>
    );
};

export default Skills;