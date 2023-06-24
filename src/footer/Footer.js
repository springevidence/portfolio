import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <span>Тюрина Виктория</span>
                <div className={style.footerBlock}>

                </div>
                <span className={style.copyrightTitle}>© 2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;