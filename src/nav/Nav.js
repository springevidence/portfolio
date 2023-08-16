import React from 'react';
import style from './Nav.module.scss'

const Nav = () => {
    return (
        <div className={style.nav}>
            <a href="" className={style.link}>Главное</a>
            <a href="" className={style.link}>Навыки</a>
            <a href="" className={style.link}>Проекты</a>
            <a href="" className={style.link}>Контакты</a>
        </div>
    );
};

export default Nav;