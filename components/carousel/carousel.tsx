import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Image from "next/image";
import reactDark from "../../public/images/react_test.png";
import classes from "./carousel.module.css";

type CarouselComponentProps = {
  mode: string;
  modeStyles: Record<string, any>;
};

export default function CarouselComponent({ mode, modeStyles }: CarouselComponentProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
//   const gradient = `linear-gradient(0deg, ${backgroundColor} 0%, #5D3FD3 100%)`;
  const srcOne = mode === "darkMode" ? reactDark : reactDark;

  return (
    <section style={{ backgroundColor: backgroundColor, color: color }} className={classes.section} id="projectID">
      <div className={classes.carousel_container}>
        <div style={{ color: color }}>
          <h2>THIS SITE IS:</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Dynamic and Interactive</h3>
              <p style={{ color: color }}>
                Made with React, powered by Vite and Rollup. Animations by
                TSParticles. Images via Gimp
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Dynamic and Interactive</h3>
              <p style={{ color: color }}>
                Made with React, powered by Vite and Rollup. Animations by
                TSParticles. Images via Gimp
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
          {/* <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcTwo}
            alt="Second slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Sleek and Responsive Design</h3>
            <p style={{color: color}}>React-Bootstrap componants, light/dark mode and responsive design for all screen sizes.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcThree}
            alt="Third slide"
            />

          <Carousel.Caption>
            <h3 style={{color: color}}>Seamless Deployment with Netlify</h3>
            <p style={{color: color}}>
            Single-page application harnessing the power and reliability of Netlify's continuous deployment</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcFour}
            alt="Fourth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Version Control with Git and GitHub</h3>
            <p style={{color: color}}>Leveraging industry-standard tools for a collaborative and flexible development workflow.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block w-100"
            src={srcFive}
            alt="Fifth slide"
            />
          <Carousel.Caption>
            <h3 style={{color: color}}>Optimized Development with NPM and VSCode</h3>
            <p style={{color: color}}>Efficient, scalable and maintainable code, managed by NPM, made with the powerful VSCode editor</p>
          </Carousel.Caption>
  </Carousel.Item>*/}
        </Carousel>
      </div>
    </section>
  );
}
