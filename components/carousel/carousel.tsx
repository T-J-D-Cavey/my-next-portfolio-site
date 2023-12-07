import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Image from "next/image";
import react_icon from "../../public/images/carousel/reactjs.png";
import next_icon from "../../public/images/carousel/nextpurpleslide.png";
import mongodb_icon from "../../public/images/carousel/mongodb.png";
import bootstrap_icon from "../../public/images/carousel/bootstrap.png";
import typescript_icon from "../../public/images/carousel/typescript.png";
import github_icon from "../../public/images/carousel/githubslide.png";
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

  const color = modeStyles[mode].color;

  return (
    <section className={classes.section} id="projects">
      <div className={classes.carousel_container}>
        <div style={{ color: color }}>
          <h2>ABOUT THIS SITE:</h2>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className={classes.item}>
            <Image
              width={600}
              height={600}
              src={react_icon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Interactive and Dynamic</h3>
              <p style={{ color: color }}>
                Built with React for a fast and interactive user experience,
                client-side.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image width={600} height={600} src={next_icon} alt="First slide" />
            <Carousel.Caption>
              <h3 style={{ color: color }}>SEO-Optimized Efficiency</h3>
              <p style={{ color: color }}>
                This Next.js application uses pregenerated pages optimised for
                search engine crawlers and rapid load times.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image
              width={600}
              height={600}
              src={mongodb_icon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Back-End Data Storage</h3>
              <p style={{ color: color }}>
                A RESTful API endpoint for seamless handling of messages,
                securely stored in a MongoDB database with Node.js.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image
              width={600}
              height={600}
              src={bootstrap_icon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Sleek and Responsive</h3>
              <p style={{ color: color }}>
                React-Bootstrap componants, light/dark mode and responsive
                design for all screen sizes.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image
              width={600}
              height={600}
              src={typescript_icon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Optimised Development</h3>
              <p style={{ color: color }}>
                Made using modern web development tools: Typescript, NPM and GIT
                version control.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.item}>
            <Image
              width={600}
              height={600}
              src={github_icon}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ color: color }}>Seamless Deployment</h3>
              <p style={{ color: color }}>
                Leveraging Vercel's continueous deployment with Github for an
                automated deployment process and hassle-free updates.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
}
