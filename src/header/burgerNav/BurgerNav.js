import React, {useState} from 'react';
import style from './BurgerNav.module.scss'
import {Link} from 'react-scroll';


const BurgerNav = () => {
    const [isBurgerNavOpen, setBurgerNavOpen] = useState(false)
    const showBurgerNav = () => {
        setBurgerNavOpen(!isBurgerNavOpen)
        console.log(isBurgerNavOpen)
    }
    return (
        <div className={style.burgerNav}>
            <div className={isBurgerNavOpen? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
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
            <div onClick={showBurgerNav} className={style.burgerBtn}>
                <div className={isBurgerNavOpen? `${style.wrapper} ${style.active}` : style.wrapper}>
                    <span className={style.menuLine}></span>
                    <span className={style.menuLine}></span>
                    <span className={style.menuLine}></span>
                </div>

            </div>
        </div>
    );
};

export default BurgerNav;