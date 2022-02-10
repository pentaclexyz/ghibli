import React from "react";
import Layout from "../components/layout";


import arietty from "../assets/images/gifs/arietty.gif";
import butterfly from "../assets/images/gifs/butterfly.gif";
import cat from "../assets/images/gifs/cat-gif.gif";
import dragon from "../assets/images/gifs/dragon.gif";
import ephemeris from "../assets/images/gifs/ephemeris.gif";
import farming from "../assets/images/gifs/farming.gif";
import forestspirit from "../assets/images/gifs/forest-spirit.gif";
import lake from "../assets/images/gifs/ghibli-lake-flower.gif";
import heart from "../assets/images/gifs/heart-swallow.gif";
import howl from "../assets/images/gifs/howl.gif";
import howlasleep from "../assets/images/gifs/howl-asleep.gif";
import howllook from "../assets/images/gifs/howl-look.gif";
import kaguya from "../assets/images/gifs/kaguya.gif";
import kaguya02 from "../assets/images/gifs/kaguya-2.gif";
import kaguya03 from "../assets/images/gifs/kaguya-3.gif";
import kaguyafarm from "../assets/images/gifs/kaguya-farm.gif";
import kiki01 from "../assets/images/gifs/kiki-boy.gif";
import kiki02 from "../assets/images/gifs/kiki-waves.gif";
import kiki03 from "../assets/images/gifs/kiki-window.gif";
import mononoke01 from "../assets/images/gifs/mononoke-butterflies.gif";
import mononoke02 from "../assets/images/gifs/mononoke-spirits.gif";
import mononoke03 from "../assets/images/gifs/run-mononoke.gif";
import nausicaa from "../assets/images/gifs/nausicaa-and-her-pet.gif";
import ponyo01 from "../assets/images/gifs/ponyo-hug-1.gif";
import ponyo02 from "../assets/images/gifs/ponyo-hug.gif";
import ponyo03 from "../assets/images/gifs/ponyo-kiss.gif";
import ponyo04 from "../assets/images/gifs/ponyo-moon.gif";
import ponyo05 from "../assets/images/gifs/ponyo-mum.gif";
import ponyo06 from "../assets/images/gifs/ponyo-running-3.gif";
import ponyo07 from "../assets/images/gifs/ponyo-wake-up.gif";
import ponyo08 from "../assets/images/gifs/ponyo.gif";
import poppyHill from "../assets/images/gifs/poppy-hill-rain.gif";
import rainbow from "../assets/images/gifs/rainbow-rowing.gif";
import runMononoke from "../assets/images/gifs/run-mononoke.gif";
import smoking from "../assets/images/gifs/smoking.gif";
import sophieNight from "../assets/images/gifs/sophie-night.gif";
import sophieRun from "../assets/images/gifs/sophie-run.gif";
import sosuke02 from "../assets/images/gifs/sosuke-02.gif";
import totoroPls from "../assets/images/gifs/totoro-pls.gif";
import totoroRain from "../assets/images/gifs/totoro-rain.gif";
import waterReflection from "../assets/images/gifs/water-reflection.gif";

const Studio_Ghibli =  "https://en.wikipedia.org/wiki/Studio_Ghibli";

const gifs = [
    {
        src: arietty,
        url: "https://en.wikipedia.org/wiki/Arrietty"
    },
    {
        src: butterfly,
        url: Studio_Ghibli
    },
    {
        src: cat,
        url: Studio_Ghibli
    },
    {
        src: dragon,
        url: "https://en.wikipedia.org/wiki/Spirited_Away"
    },

    {
        src: ephemeris,
        url: Studio_Ghibli
    },
    {
        src: farming,
        url: Studio_Ghibli
    },
    {
        src: forestspirit,
        url: "https://en.wikipedia.org/wiki/Princess_Mononoke"
    },
    {
        src: lake,
        url: "https://en.wikipedia.org/wiki/Kiki's_Delivery_Service"
    },
    {
        src: howl,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: howlasleep,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: howllook,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: kaguya,
        url: "https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya_(film)"
    },
    {
        src: kaguya02,
        url: "https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya_(film)"
    },
    {
        src: kaguya03,
        url: "https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya_(film)"
    },
    {
        src: kaguyafarm,
        url: "https://en.wikipedia.org/wiki/The_Tale_of_the_Princess_Kaguya_(film)"
    },
    {
        src: kiki01,
        url: "https://en.wikipedia.org/wiki/Kiki's_Delivery_Service"
    },
    {
        src: kiki02,
        url: "https://en.wikipedia.org/wiki/Kiki's_Delivery_Service"
    },
    {
        src: kiki03,
        url: "https://en.wikipedia.org/wiki/Kiki's_Delivery_Service"
    },
    {
        src: mononoke01,
        url: "https://en.wikipedia.org/wiki/Princess_Mononoke"
    },
    {
        src: mononoke02,
        url: "https://en.wikipedia.org/wiki/Princess_Mononoke"
    },
    {
        src: mononoke03,
        url: "https://en.wikipedia.org/wiki/Princess_Mononoke"
    },
    {
        src: nausicaa,
        url: "https://en.wikipedia.org/wiki/Nausicaä_of_the_Valley_of_the_Wind_(film)"
    },
    {
        src: ponyo01,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo02,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo03,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo04,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo05,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo06,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo07,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: ponyo08,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: poppyHill,
        url: Studio_Ghibli
    },
    {
        src: runMononoke,
        url: "https://en.wikipedia.org/wiki/Princess_Mononoke"
    },
    {
        src: smoking,
        url: Studio_Ghibli
    },
    {
        src: sophieNight,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: sophieRun,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: sosuke02,
        url: "https://en.wikipedia.org/wiki/Ponyo"
    },
    {
        src: totoroPls,
        url: "https://en.wikipedia.org/wiki/My_Neighbor_Totoro"
    },
    {
        src: totoroRain,
        url: "https://en.wikipedia.org/wiki/My_Neighbor_Totoro"
    },
    {
        src: waterReflection,
        url: Studio_Ghibli
    },
    {
        src: heart,
        url: "https://en.wikipedia.org/wiki/Howl's_Moving_Castle_(film)"
    },
    {
        src: rainbow,
        url: Studio_Ghibli
    },
];

export const Main = () => {
    return (
        <Layout>
            <section>
                {gifs.map(gif => {
                    return <img src={gif.src} alt="studio ghibli" onClick={() => {
                        if (gif.url === "https://en.wikipedia.org/wiki/Studio_Ghibli") {
                            alert("Here is the main Ghibli wiki, dont know which movie this gif is from");
                        }
                        window.open(gif.url);
                    }} />
                })}
            </section>
        </Layout>
    )
}
