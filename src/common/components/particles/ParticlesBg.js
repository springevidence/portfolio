import React, {useCallback, useMemo} from 'react';
import Particles from "react-tsparticles";
import {loadSlim} from "tsparticles-slim";
import {loadFull} from "tsparticles";
import style from './ParticlesBg.css'


const ParticlesBg = () => {
    const options = useMemo(()=> {
        return {
            autoPlay: true,
            background: {
                image: "",
                position: "",
                repeat: "",
                size: "",
                opacity: 0.9
            },
            backgroundMask: {
                composite: "destination-out",
                cover: {
                    color: {
                        value: "#fff"
                    },
                    opacity: 1
                },
                enable: false
            },
            defaultThemes: {},
            delay: 0,
            fullScreen: {
                enable: false,
                zIndex: 0
            },
            detectRetina: true,
            duration: 0,
            fpsLimit: 120,
            manualParticles: [],
            particles: {
                bounce: {
                    horizontal: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    },
                    vertical: {
                        random: {
                            enable: false,
                            minimumValue: 0.1
                        },
                        value: 1
                    }
                },
                collisions: {
                    absorb: {
                        speed: 2
                    },
                    bounce: {
                        horizontal: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        },
                        vertical: {
                            random: {
                                enable: false,
                                minimumValue: 0.1
                            },
                            value: 1
                        }
                    },
                    enable: false,
                    maxSpeed: 50,
                    mode: "bounce",
                    overlap: {
                        enable: true,
                        retries: 0
                    }
                },
                color: {
                    value: "#ca4d3f",
                },
                groups: {},
                move: {
                    angle: {
                        offset: 0,
                        value: 90
                    },
                    attract: {
                        distance: 200,
                        enable: false,
                        rotate: {
                            x: 3000,
                            y: 3000
                        }
                    },
                    center: {
                        x: 50,
                        y: 50,
                        mode: "percent",
                        radius: 0
                    },
                    decay: 0,
                    distance: {},
                    direction: "none",
                    drift: 0,
                    enable: true,
                    gravity: {
                        acceleration: 9.81,
                        enable: false,
                        inverse: false,
                        maxSpeed: 50
                    },
                    path: {
                        clamp: true,
                        delay: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 0
                        },
                        enable: false,
                        options: {}
                    },
                    outModes: {
                        default: "out",
                        bottom: "out",
                        left: "out",
                        right: "out",
                        top: "out"
                    },
                    random: false,
                    size: false,
                    speed: 2,
                    spin: {
                        acceleration: 0,
                        enable: false
                    },
                    straight: false,
                    trail: {
                        enable: false,
                        length: 10,
                        fill: {}
                    },
                    vibrate: false,
                    warp: false
                },
                number: {
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080
                    },
                    limit: 0,
                    value: 100
                },
                opacity: {
                    random: {
                        enable: true,
                        minimumValue: 0.3
                    },
                    value: {
                        min: 0.3,
                        max: 0.8
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 0.5,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none",
                        minimumValue: 0.3
                    }
                },
                reduceDuplicates: false,
                shadow: {
                    blur: 0,
                    color: {
                        value: "#000"
                    },
                    enable: false,
                    offset: {
                        x: 0,
                        y: 0
                    }
                },
                shape: {
                    close: true,
                    fill: true,
                    options: {},
                    type: "circle"
                },
                size: {
                    random: {
                        enable: true,
                        minimumValue: 1
                    },
                    value: {
                        min: 1,
                        max: 3
                    },
                    animation: {
                        count: 0,
                        enable: true,
                        speed: 3,
                        decay: 0,
                        delay: 0,
                        sync: false,
                        mode: "auto",
                        startValue: "random",
                        destroy: "none",
                        minimumValue: 1
                    }
                },
                stroke: {
                    width: 0
                },
                zIndex: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    opacityRate: 1,
                    sizeRate: 1,
                    velocityRate: 1
                },
                destroy: {
                    bounds: {},
                    mode: "none",
                    split: {
                        count: 1,
                        factor: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: 3
                        },
                        rate: {
                            random: {
                                enable: false,
                                minimumValue: 0
                            },
                            value: {
                                min: 4,
                                max: 9
                            }
                        },
                        sizeOffset: true,
                        particles: {}
                    }
                },
                roll: {
                    darken: {
                        enable: false,
                        value: 0
                    },
                    enable: false,
                    enlighten: {
                        enable: false,
                        value: 0
                    },
                    mode: "vertical",
                    speed: 25
                },
                tilt: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: false,
                        speed: 0,
                        decay: 0,
                        sync: false
                    },
                    direction: "clockwise",
                    enable: false
                },
                twinkle: {
                    lines: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    },
                    particles: {
                        enable: false,
                        frequency: 0.05,
                        opacity: 1
                    }
                },
                wobble: {
                    distance: 5,
                    enable: false,
                    speed: {
                        angle: 50,
                        move: 10
                    }
                },
                life: {
                    count: 0,
                    delay: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 0,
                        sync: false
                    },
                    duration: {
                        random: {
                            enable: false,
                            minimumValue: 0.0001
                        },
                        value: 0,
                        sync: false
                    }
                },
                rotate: {
                    random: {
                        enable: false,
                        minimumValue: 0
                    },
                    value: 0,
                    animation: {
                        enable: false,
                        speed: 0,
                        decay: 0,
                        sync: false
                    },
                    direction: "clockwise",
                    path: false
                },
                orbit: {
                    animation: {
                        count: 0,
                        enable: false,
                        speed: 1,
                        decay: 0,
                        delay: 0,
                        sync: false
                    },
                    enable: false,
                    opacity: 1,
                    rotation: {
                        random: {
                            enable: false,
                            minimumValue: 0
                        },
                        value: 45
                    },
                    width: 1
                },
                links: {
                    blink: false,
                    color: {
                        value: "random"
                    },
                    consent: false,
                    distance: 100,
                    enable: true,
                    frequency: 1,
                    opacity: 1,
                    shadow: {
                        blur: 5,
                        color: {
                            value: "#000"
                        },
                        enable: false
                    },
                    triangles: {
                        enable: false,
                        frequency: 1
                    },
                    width: 1,
                    warp: false
                },

            },

        }
    }, [])
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return <Particles
        className={'particles'}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
    />
};

export default ParticlesBg;

//{
//             name: "Connect",
//             fullScreen: {
//                 enable: false
//             },
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
//                 links: {
//                     color: "#ffffff",
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
//                     type: "polygon",
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