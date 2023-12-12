import Link from "next/link";
import Button from "react-bootstrap/Button";
import ParticlesComponent from "./particles";
import { motion } from "framer-motion";
import classes from "./hero-banner.module.css";

type HeroBannerProps = {
  mode: string;
  modeStyles: Record<string, any>;
};

export default function HeroBanner({ mode, modeStyles }: HeroBannerProps) {
  const ctaButton = modeStyles[mode].ctaButton;
  const secondaryButton = modeStyles[mode].secondaryButton;
  const nameStyle = mode === "darkMode" ? "#202020" : "#FAF9F6";

  return (
    <header className={classes.hero_section} id="hi">
      <div className={classes.hero_container}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span style={{ color: nameStyle }}>Tim Cavey</span>.
          <br />
          Web Developer.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>

        <Button variant={ctaButton} className={classes.button}>
          <Link href="/#projects">Show Me</Link>
        </Button>
        <Button variant={secondaryButton} className={classes.button}>
          <Link href="/#contact">Contact Me</Link>
        </Button>
        </motion.div>
        <ParticlesComponent />
      </div>
    </header>
  );
}
