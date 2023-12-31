import React from 'react';
import style from './Footer.module.scss'
import telegramIcon from './../assets/icons/telegram.svg'
import instagramIcon from './../assets/icons/instagram.svg'
import linkedinIcon from './../assets/icons/linkedin.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <span className={style.name}>Тюрина Виктория</span>
                <div className={style.socialBlock}>
                    <div className={style.socialItem}>
                        <a href={' https://t.me/afireinsideee'} target={'_blank'}>
                            <img src={telegramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialItem}>
                        <a href={'https://instagram.com/viktoria_tiurina?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr'} target={'_blank'}>
                            <img src={instagramIcon} alt=""/>
                        </a>
                    </div>
                    <div className={style.socialItem}>
                        <a href={''}>
                            <img src={linkedinIcon} alt=""/>
                        </a>
                    </div>
                </div>
                <span className={style.copyrightTitle}>© 2023 Все права защищены</span>
            </div>
        </div>
    );
};

export default Footer;