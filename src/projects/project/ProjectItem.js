import React from 'react';
import style from './ProjectItem.module.css'

const ProjectItem = (props) => {
    return (
        <div className={style.project}>
            <div className={style.imageButtonWrapper}>
                <a href={'#'} className={style.link}>Смотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    );
};

export default ProjectItem;