import React from 'react';
import style from './Nav.module.scss'
import { Link} from 'react-scroll';
const Nav = () => {
    return (
        <div className={style.nav}>
            <Link className={style.link}
                activeClass={style.active}
                to="main"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Главное</Link>
            <Link className={style.link}
                activeClass={style.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Навыки</Link>
            <Link className={style.link}
                activeClass={style.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={1}
                duration={500}
            >Проекты</Link>
            <Link className={style.link}
                activeClass={style.active}
                to="contacts"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >Контакты</Link>
        </div>
    );
};

export default Nav;