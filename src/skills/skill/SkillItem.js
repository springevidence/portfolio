import React from 'react';
import style from './SkillItem.module.scss'

const SkillItem = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default SkillItem;