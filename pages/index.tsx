import { useState } from "react";

import LightDarkButton from "../components/lightdark/light-dark";
import HeroBanner from "../components/hero/hero-banner";
import Carousel from "../components/carousel/carousel";
import ProjectList from "../components/projects/projects-list";
import ContactMe from "../components/contact/contact-me";
import Footer from "../components/footer/footer";

import { modeStyles } from "../styles/styles-object";
export default function Home() {
  const [mode, setMode] = useState("darkMode");

  const changeModeHandler = () => {
    const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
    setMode(oppositeMode);
  }

  // Should add framer motion scroll events to this

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
  return (
    <div style={{backgroundColor: backgroundColor, color: color}}>
      <LightDarkButton mode={mode} changeMode={changeModeHandler} modeStyles={modeStyles}/>
      <HeroBanner mode={mode} modeStyles={modeStyles}/>
      <Carousel mode={mode} modeStyles={modeStyles}/>
      <ProjectList mode={mode} modeStyles={modeStyles}/>
      <ContactMe mode={mode} modeStyles={modeStyles}/>
      <Footer mode={mode} modeStyles={modeStyles}/>
    </div>
  );
}

// I have added these to allow framer motion scroll events. Will hope to remove if a better workaround is found:
function getStaticProps() {}

function getStaticPaths() {}
