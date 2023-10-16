import React from 'react';
import style from './Main.module.scss'
// import {loadFull} from "tsparticles";
// import {loadSlim} from "tsparticles-slim";
import Flip from 'react-reveal/Flip';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'

const Main = () => {
    // const options = useMemo(() => {
    //     return {
    //         name: "Connect",
    //         interactivity: {
    //             events: {
    //                 onClick: {
    //                     enable: true,
    //                     mode: "push",
    //                 },
    //                 onDiv: {
    //                     elementId: "repulse-div",
    //                     enable: false,
    //                     mode: "repulse",
    //                 },
    //                 onHover: {
    //                     enable: true,
    //                     mode: "connect",
    //                     parallax: {
    //                         enable: false,
    //                         force: 60,
    //                         smooth: 10,
    //                     },
    //                 },
    //             },
    //         },
    //         particles: {
    //             // color: {
    //             //     value: "#b64639",
    //             // },
    //             links: {
    //                 color: "#ffffff",
    //                 // consent: false,
    //                 distance: 150,
    //                 enable: false,
    //                 opacity: 0.4,
    //                 width: 1,
    //             },
    //             move: {
    //                 enable: true,
    //                 speed: 2,
    //             },
    //             number: {
    //                 density: {
    //                     enable: true,
    //                 },
    //                 limit: 500,
    //                 value: 300,
    //             },
    //             opacity: {
    //                 value: 0.5,
    //             },
    //             shape: {
    //                 type: "circle",
    //             },
    //             stroke: {
    //                 color: "#fff",
    //                 width: 1,
    //             },
    //             size: {
    //                 value: {
    //                     min: 1,
    //                     max: 10,
    //                 },
    //             },
    //         },
    //         polygon: {
    //             draw: {
    //                 enable: false,
    //                 lineColor: "#ffffff",
    //                 lineWidth: 0.5,
    //             },
    //             move: {
    //                 radius: 10,
    //             },
    //             scale: 1,
    //             type: "none",
    //             url: "",
    //         },
    //
    //     }
    // }, [])
    // const particlesInit = useCallback(async engine => {
    //     console.log(engine);
    //     await loadFull(engine);
    //     await loadSlim(engine);
    // }, []);
    // const particlesLoaded = useCallback(async container => {
    //     await console.log(container);
    // }, []);

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
            {/*<ParticlesBg/>*/}
            {/*<Particles*/}
            {/*    className={style.particles}*/}
            {/*    id="tsparticles"*/}
            {/*    init={particlesInit}*/}
            {/*    loaded={particlesLoaded}*/}
            {/*    options={options}*/}
            {/*/>*/}
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