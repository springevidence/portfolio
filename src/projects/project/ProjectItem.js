import React from 'react';
import style from './ProjectItem.module.css'
import Button from "../../common/button/Button";

const ProjectItem = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageButtonWrapper}>
                <img src={props.link} alt={props.alt} className={style.img}/>
                <Button type={'projectButton'} title={'Смотреть'}/>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default ProjectItem;