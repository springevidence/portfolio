import React from 'react';
import style from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <span className={style.name}>Тюрина Виктория</span>
                <div className={style.socialBlock}>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                    <div className={style.socialItem}></div>
                </div>
                <span className={style.copyrightTitle}>© 2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;