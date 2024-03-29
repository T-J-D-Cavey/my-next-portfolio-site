import Button from 'react-bootstrap/Button';
import Image from 'next/image';
import moon from '../../public/images/moonIcon.png';
import sun from '../../public/images/sunIcon.svg';
import classes from './light-dark.module.css'

type LightDarkButtonProps = {
    mode: string,
    changeMode: () => void,
    modeStyles: Record<string, any>
}

export default function LightDarkButton({mode, changeMode, modeStyles}: LightDarkButtonProps) {

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        changeMode();
    }
    const src = mode === 'darkMode' ? moon : sun;
    let ctaButton = modeStyles[mode].ctaButton;

    return (
        <div>
              <Button variant={ctaButton} className={classes.modeButton} onClick={clickHandler}>
                <Image src={src} width={24} height={24} alt="Sun and moon icon"/>
              </Button>
        </div>
    )
}