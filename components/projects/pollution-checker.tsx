import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { motion } from "framer-motion";
import mobileOne from "../../public/images/projectimages/pollution_1.png";
import mobileTwo from "../../public/images/projectimages/pollution_2.png";
import classes from "./projects.module.css";

type ProjectItemComponentProps = {
  mode: string;
  modeStyles: Record<string, any>;
};

export default function MyWebDevBlog({
  mode,
  modeStyles,
}: ProjectItemComponentProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ctaButton = modeStyles[mode].ctaButton;
  const secondaryButton = modeStyles[mode].secondaryButton;
  const backgroundColor = modeStyles[mode].projectBackgroundFour;
  const color = modeStyles[mode].color;

  return (
    <div style={{ backgroundColor: backgroundColor, color: color }}>
      <section className={classes.projectSection}>
        <div className={classes.mainContainer}>
          <div className={classes.projectTextAndImageContainer}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={classes.projectsTextContainer}
            >
              <h3>Pollution-Checker</h3>
              <div>
                <p>
                  Check the latest air pollution levels near you at the click of
                  a button, and get practical health advice based on those
                  levels recommended by the World Health Organisation (WHO).
                </p>
                <ul>
                  <li>React / Redux</li>
                  <li>World Air Quality Index (WAQI) API</li>
                  <li>Dynamic programming</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={classes.projectPicMainContainer}
            >
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileOne}
                alt="air pollution figures and a icon showing current weather"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={classes.buttonMainContainer}
          >
            <Button
              variant={secondaryButton}
              onClick={handleShow}
              className={classes.projectButton}
            >
              Demo
            </Button>
            <Button
              variant={ctaButton}
              onClick={handleClose}
              className={classes.projectButton}
            >
              <Link
                href="https://pollution-checker.netlify.app/"
                target="_blank"
              >
                Site
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <Modal.Title>
            <h2>Pollution-Checker</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              This SPA hosted on Netlify uses the World Air Quality Index (WAQI)
              API to check the levels of local air pollution and provide health
              implications and advice based on the results. The appearance of
              the app is dynamic based on the local air quality at that time.
              The call to retrieve the pollution data is made when the app first
              loads, meaning the results are instantaneous when the user presses
              the button. There is a basic animation using sun and cloud SVGs
              which behaves differently based on the pollution results.
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="homepage showing a big green button"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React / React Router DOM</li>
              <li>Redux / React-Redux / Redux Toolkit</li>
              <li>World Air Quality Index (WAQI) API</li>
              <li>CSS</li>
              <li>NPM</li>
              <li>Git and Github</li>
              <li>VSCode</li>
              <li>Netlify</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <Button
            variant={secondaryButton}
            onClick={handleClose}
            className={classes.projectButton}
          >
            Close
          </Button>
          <Button
            variant={ctaButton}
            onClick={handleClose}
            className={classes.projectButton}
          >
            <Link href="https://pollution-checker.netlify.app/" target="_blank">
              Site
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
