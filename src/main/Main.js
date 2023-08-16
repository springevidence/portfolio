import React from 'react';
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
// import userImage from "../assets/image/user.png";

const Main = () => {
    // const user = {
    //     backgroundImage: `url(${userImage})`,
    //     borderRadius: '20px'
    // }
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greeting}>
                    <span>Привет!</span>
                    <h1>Меня зовут Тюрина Виктория</h1>
                    <p>И я Frontend-разработчик</p>
                </div>
                <div  className={style.photoContainer}></div>
            </div>
        </div>
    );
};

export default Main;