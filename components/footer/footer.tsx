import Image from "next/image";
import Link from "next/link";
import githubIcon from "../../public/images/footer/githubIcon.svg";
import linkedInIcon from "../../public/images/footer/linkedInIcon.svg";
import blogIcon from "../../public/images/footer/blogIcon.png";
import twitterXIcon from "../../public/images/footer/twitterxIcon.svg";
import upArrow from "../../public/images/footer/upChevron.png";
import classes from "./footer.module.css";

type FooterProps = {
  mode: string;
  modeStyles: Record<string, any>;
}

export default function Footer({mode, modeStyles}: FooterProps) {
  const oppositeMode = mode === 'darkMode' ? 'lightMode' : 'darkMode';
  const backgroundColor= modeStyles[oppositeMode].background;
  return (
    <footer className={classes.footer} style={{backgroundColor: backgroundColor}}>
      <ul className={classes.footerContainer}>
        <li className={classes.iconContainer}>
            <Link href="https://github.com/T-J-D-Cavey" target="_blank">
            <Image width={50} height={50} src={githubIcon} alt="Github icon"/>
            </Link>
        </li>
        <li className={classes.iconContainer}>
        <Link href="https://uk.linkedin.com/in/timothy-cavey-69b453169" target="_blank">
            <Image width={50} height={50} src={linkedInIcon} alt="LinkedIn icon"/>
            </Link>
        </li>
        <li className={classes.iconContainer}>
        <Link href="https://my-web-dev-blog.vercel.app/" target="_blank">
            <Image width={50} height={50} src={blogIcon} alt="Blog T icon"/>
            </Link>
        </li>
        <li className={classes.iconContainer}>
        <Link href="https://twitter.com/TJDCavey" target="_blank">
            <Image width={50} height={50} src={twitterXIcon} alt="Twitter X Icon"/>
            </Link>
        </li>
      </ul>
      <div className={classes.iconContainer}>
      <Link href="#hi">
            <Image width={50} height={50} src={upArrow} alt=""/>
            </Link>
      </div>
    </footer>
  );
}
