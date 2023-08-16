import React from 'react';
import style from './ProjectItem.module.scss'


const ProjectItem = (props) => {

    return (
        <div className={style.project}>
            <div style={props.style} className={style.imageButtonWrapper}>
                <a href={'#'} className={style.link}>Смотреть</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.title}>{props.title}</h3>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default ProjectItem;