import React from 'react';
import style from './Button.module.css'
const Button = (props) => {
    const finalClassName = style.button +
        (props.type === 'projectButton' ? ' ' + style.projects
            : props.type === 'contactButton' ? ' ' + style.contacts : '')
    return (
        <button className={finalClassName}>{props.title}</button>
    );
};

export default Button;