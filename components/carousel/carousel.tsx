import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Image from "next/image";
import reactDark from "../../public/images/react_test.png";
import classes from "./carousel.module.css";

type CarouselComponentProps = {
  mode: string;
  modeStyles: Record<string, any>;
};

export default function CarouselComponent({
  mode,
  modeStyles,
}: CarouselComponentProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  const backgroundColor = modeStyles[mode].background;
  const color = modeStyles[mode].color;
  const srcOne = mode === "darkMode" ? reactDark : reactDark;

  return (
    <section
      style={{ backgroundColor: backgroundColor, color: color }}
      className={classes.section}
      id="projectID"
    >
      <div className={classes.carousel_container}>
        <div style={{ color: color }}>
          <h2>ABOUT THIS SITE:</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Interactive and Dynamic</h3>
              <p style={{ color: color }}>
                Built with React for a fast and interactive user experience,
                client-side.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>SEO-Optimized Efficiency</h3>
              <p style={{ color: color }}>
                This Next.js application uses pregenerated pages optimised for
                search engine crawlers and rapid load times.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Back-End Data Storage</h3>
              <p style={{ color: color }}>
                A RESTful API endpoint for seamless handling of messages,
                securely stored in a MongoDB database with Node.js.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Sleek and Responsive</h3>
              <p style={{ color: color }}>
                React-Bootstrap componants, light/dark mode and responsive
                design for all screen sizes.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={srcOne} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Optimised Development</h3>
              <p style={{ color: color }}>
                Made using modern web development tools: Typescript and GIT version control.  
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
