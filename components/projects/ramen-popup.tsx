import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { motion } from "framer-motion";
import mobileOne from "../../public/images/projectimages/ramen_1.png";
import mobileTwo from "../../public/images/projectimages/ramen_2.png";
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
  const backgroundColor = modeStyles[mode].projectBackgroundThree;
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
              className={classes.projectsTextContainer}>
              <h3>Ramen pop-up</h3>
              <div>
                <p>
                  A simple and stylish site to promote the upcoming locations
                  and dates for Miura Anjin's pop-up ramen restaurant.
                </p>
                <ul>
                  <li>React with Vite</li>
                  <li>OpenLayers mapping library</li>
                  <li>CSS animations</li>
                </ul>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }} 
              className={classes.projectPicMainContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileOne}
                alt="Bowl of Ramen and chef name and picture"
              />
            </motion.div>
          </div>
          <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }} 
              className={classes.buttonMainContainer}>
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
              <Link href="https://miura-anjin-ramen.netlify.app/" target="_blank">
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
            <h2>Ramen pop-up</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              Miura Anjin's pop-up ramen restaurant now has an online presence.
              This talented ramen chef is able to share this SPA when they want
              to spread the word about their latest pop-up restaurant date and
              location. This site is designed to be quick to update with new
              locations and dates. Changes to the remote repository on Github
              are updated on Netlify's servers within a few minutes. This app
              uses the Open Layers mapping library for an embedded map widget
              showing the location of the latest pop-up site.
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="Map of Bristol showing location of pop up"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React with Vite</li>
              <li>OpenLayers mapping library</li>
              <li>CSS</li>
              <li>NPM</li>
              <li>Git / Github</li>
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
            <Link href="https://miura-anjin-ramen.netlify.app/" target="_blank">
              Site
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
