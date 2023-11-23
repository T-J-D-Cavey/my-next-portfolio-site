import { useState } from "react";

import LightDarkButton from "../components/lightdark/light-dark";
import HeroBanner from "../components/hero/hero-banner";
import Carousel from "../components/carousel/carousel";
import ProjectList from "../components/projects/projects-list";
import ContactForm from "../components/contact/contact-form";
import Footer from "../components/footer/footer";

import { modeStyles } from "../styles/styles-object";
export default function Home() {
  const [mode, setMode] = useState("darkMode");

  const changeModeHandler = () => {
    const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
    setMode(oppositeMode);
  }

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
  return (
    <main style={{backgroundColor: backgroundColor, color: color}}>
      <LightDarkButton mode={mode} changeMode={changeModeHandler} modeStyles={modeStyles}/>
      <HeroBanner mode={mode} modeStyles={modeStyles}/>
      <Carousel mode={mode} modeStyles={modeStyles}/>
      <ProjectList />
      <ContactForm />
      <Footer />
    </main>
  );
}
