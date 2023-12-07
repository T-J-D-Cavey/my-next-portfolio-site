import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import ParticlesComponent from './particles';
import classes from './hero-banner.module.css'

type HeroBannerProps = {
  mode: string,
  modeStyles: Record<string, any>
}

export default function HeroBanner({mode, modeStyles}: HeroBannerProps) {

    const ctaButton = modeStyles[mode].ctaButton;
    const secondaryButton = modeStyles[mode].secondaryButton
    const nameStyle = mode === 'darkMode' ? '#202020': '#FAF9F6';

    return (
        <header className={classes.hero_section} id='hi'>
            <div className={classes.hero_container}>
                <h1>Hi, I'm <span style={{color: nameStyle}}>Tim Cavey</span>.
                    <br />
                    Web Developer.
                </h1>
                <Button variant={ctaButton} className={classes.button}>
                  <Link href='/#projects'>Show Me</Link>
                </Button>
                <Button variant={secondaryButton} className={classes.button}>
                  <Link href='/#contact'>Contact Me</Link>
                </Button>
                <ParticlesComponent />
            </div>
        </header>
    )
}
