import React from 'react';
import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Привет!</span>
                    <h1>Меня зовут Тюрина Виктория</h1>
                    <p>И я Frontend-разработчик</p>
                </div>
                <div className={style.photoContainer}></div>
            </div>
        </div>
    );
};

export default Main;