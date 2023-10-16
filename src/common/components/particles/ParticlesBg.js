// import React, {useCallback, useMemo} from 'react';
// import Particles from "react-tsparticles";
// import {loadSlim} from "tsparticles-slim";
// import {loadFull} from "tsparticles";
// import style from './ParticlesBg.module.scss'
//
//
// const ParticlesBg = () => {
//     const options = useMemo(()=> {
//         return {
//             name: "Connect",
//             interactivity: {
//                 events: {
//                     onClick: {
//                         enable: true,
//                         mode: "push",
//                     },
//                     onDiv: {
//                         elementId: "repulse-div",
//                         enable: false,
//                         mode: "repulse",
//                     },
//                     onHover: {
//                         enable: true,
//                         mode: "connect",
//                         parallax: {
//                             enable: false,
//                             force: 60,
//                             smooth: 10,
//                         },
//                     },
//                 },
//             },
//             particles: {
//                 // color: {
//                 //     value: "#b64639",
//                 // },
//                 links: {
//                     color: "#ffffff",
//                     // consent: false,
//                     distance: 150,
//                     enable: false,
//                     opacity: 0.4,
//                     width: 1,
//                 },
//                 move: {
//                     enable: true,
//                     speed: 2,
//                 },
//                 number: {
//                     density: {
//                         enable: true,
//                     },
//                     limit: 500,
//                     value: 300,
//                 },
//                 opacity: {
//                     value: 0.5,
//                 },
//                 shape: {
//                     type: "circle",
//                 },
//                 stroke: {
//                     color: "#fff",
//                     width: 1,
//                 },
//                 size: {
//                     value: {
//                         min: 1,
//                         max: 10,
//                     },
//                 },
//             },
//             polygon: {
//                 draw: {
//                     enable: false,
//                     lineColor: "#ffffff",
//                     lineWidth: 0.5,
//                 },
//                 move: {
//                     radius: 10,
//                 },
//                 scale: 1,
//                 type: "none",
//                 url: "",
//             },
//
//         }
//     }, [])
//     const particlesInit = useCallback(async engine => {
//         console.log(engine);
//         await loadFull(engine);
//         await loadSlim(engine);
//     }, []);
//
//     const particlesLoaded = useCallback(async container => {
//         await console.log(container);
//     }, []);
//
//
//     return <Particles
//         className={style.particles}
//         canvasClassName={style.particlesCanvas}
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={options}
//     />
// };
//
// export default ParticlesBg;
//
// //  {
// //             particles: {
// //                 number: {
// //                     value: 50,
// //                     density: {
// //                         enable: true,
// //                     },
// //                 },
// //                 color: {
// //                     value: "#b64639",
// //                 },
// //                 shape: {
// //                     type: "circle",
// //                 },
// //                 opacity: {
// //                     value: 1,
// //                 },
// //                 size: {
// //                     value: 15,
// //                 },
// //                 move: {
// //                     enable: true,
// //                     speed: 8,
// //                 },
// //             },
// //             // background: {
// //             //     color: "",
// //             // },
// //         }