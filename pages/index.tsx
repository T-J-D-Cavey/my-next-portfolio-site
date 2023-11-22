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

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
  return (
    <>
      <LightDarkButton mode={mode} changeMode={() => {}} modeStyles={modeStyles}/>
      <HeroBanner />
      <Carousel />
      <ProjectList />
      <ContactForm />
      <Footer />
    </>
  );
}
