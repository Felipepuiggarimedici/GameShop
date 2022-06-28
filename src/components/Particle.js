//Using tsparticles from https://www.npmjs.com/package/react-tsparticles and the preset fire from https://www.npmjs.com/package/tsparticles-preset-fire
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {Engine } from "tsparticles-engine";
import { loadFirePreset } from "tsparticles-preset-fire";

function Particle() {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFirePreset(main);
      };
    const options = {
        preset: "fire",
        "fullScreen": {
            "enable": true,
            "zIndex": -10
        },
        /*particles: {
            "color": {
              "value": "#ffffff",
            },
        }*/
    };
    return <>
    <Particles
    id='tsparticles' init={particlesInit} options={options} 
    />
    </>
}
export default Particle;