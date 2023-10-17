import React from 'react';
import style from './Main.module.scss'
import Flip from 'react-reveal/Flip';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'
import ParticlesBg from "../common/components/particles/ParticlesBg";


const Main = () => {
    const defaultOptions = {
        reverse:        false,
        max:            15,
        perspective:    1000,
        scale:          1.1,
        speed:          2000,
        transition:     true,
        axis:           null,
        reset:          true,
        easing:         "cubic-bezier(.03,.98,.52,.99)"
    }
    return (
        <div id='main' className={style.mainBlock}>
            <ParticlesBg/>
            <div className={style.container}>
                <Flip bottom>
                    <div className={style.greeting}>
                        <span>Привет!</span>
                        <h1>Меня зовут Тюрина Виктория</h1>
                        <ReactTypingEffect
                            text={["И я Frontend-разработчик"]}
                        />
                    </div>
                </Flip>
                <div className={style.photoContainer}>
                        <Tilt options={defaultOptions}>
                            <div className={style.photoImg}>
                            </div>
                        </Tilt>
                </div>
            </div>
        </div>
    );
};

export default Main;