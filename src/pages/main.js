import React, { useState } from "react";
import Layout from "../components/layout";


const baseUrl = 'https://cms.0xalice.dev';
const Img = ({ path, thumb, id }) => {
  const [ref, setRef] = useState();
  const { isIntersecting } = useIntersectionObserve(ref, {
    rootMargin: '200px 0px 600px 0px',
  });
  return (
    <img
      id={id}
      ref={setRef}
      src={isIntersecting ? path : thumb}
      alt="Studio Ghibli Animation"
      loading="lazy"
    />
  );
};


export const Main = () => {
    return (
        <Layout>
            <section>
                <img src={arietty} alt="studio ghibli"/>
                <img src={butterfly} alt="studio ghibli"/>
                <img src={cat} alt="studio ghibli"/>
                <img src={dragon} alt="studio ghibli"/>
                <img src={ephemeris} alt="studio ghibli"/>
                <img src={farming} alt="studio ghibli"/>
                <img src={forestspirit} alt="studio ghibli"/>
                <img src={lake} alt="studio ghibli"/>
                <img src={heart} alt="studio ghibli"/>
                <img src={howl} alt="studio ghibli"/>
                <img src={howlasleep} alt="studio ghibli"/>
                <img src={howllook} alt="studio ghibli"/>
                <img src={kaguya} alt="studio ghibli"/>
                <img src={kaguya02} alt="studio ghibli"/>
                <img src={kaguya03} alt="studio ghibli"/>
                <img src={kaguyafarm} alt="studio ghibli"/>

                <img src={kiki01} alt="studio ghibli"/>
                <img src={kiki02} alt="studio ghibli"/>
                <img src={kiki03} alt="studio ghibli"/>
                <img src={mononoke01} alt="studio ghibli"/>
                <img src={mononoke02} alt="studio ghibli"/>
                <img src={mononoke03} alt="studio ghibli"/>
                <img src={nausicaa} alt="studio ghibli"/>
                <img src={ponyo01} alt="studio ghibli"/>
                <img src={ponyo02} alt="studio ghibli"/>
                <img src={ponyo03} alt="studio ghibli"/>
                <img src={ponyo04} alt="studio ghibli"/>
                <img src={ponyo05} alt="studio ghibli"/>
                <img src={ponyo06} alt="studio ghibli"/>
                <img src={ponyo07} alt="studio ghibli"/>
                <img src={ponyo08} alt="studio ghibli"/>
                <img src={poppyHill} alt="studio ghibli"/>
                <img src={rainbow} alt="studio ghibli"/>
                <img src={smoking} alt="studio ghibli"/>
                <img src={runMononoke} alt="studio ghibli"/>
                <img src={sophieNight} alt="studio ghibli"/>
                <img src={sophieRun} alt="studio ghibli"/>
                <img src={totoroPls} alt="studio ghibli"/>
                <img src={totoroRain} alt="studio ghibli"/>
                <img src={waterReflection} alt="studio ghibli"/>
                <img src={sosuke02} alt="studio ghibli"/>
            </section>
        </Layout>
    )
}
