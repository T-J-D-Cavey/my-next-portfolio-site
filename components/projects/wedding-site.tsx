import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import mobileOne from "../../public/images/projectimages/wedding_1.png";
import mobileTwo from "../../public/images/projectimages/wedding_2.png";
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
            <div className={classes.projectsTextContainer}>
              <h3>My Wedding Site</h3>
              <div>
                <p>
                  Find dates and details of my wedding, RSVP and contribute to
                  our honeymoon fund.
                </p>
                <ul>
                  <li>English / Mandarin conversion</li>
                  <li>Framer Motion animations</li>
                  <li>Password protected</li>
                </ul>
              </div>
            </div>
            <div className={classes.projectPicMainContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileOne}
                alt="Tim and Carmen smilling"
              />
            </div>
          </div>
          <div className={classes.buttonMainContainer}>
            <Button
              variant={secondaryButton}
              onClick={handleShow}
              className={classes.projectButton}
            >
              See details
            </Button>
            <Button
              variant={ctaButton}
              onClick={handleClose}
              className={classes.projectButton}
            >
              <a
                href="https://timandcarmen-ourwedding2024.netlify.app/"
                target="_blank"
              >
                Visit site
              </a>
            </Button>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          style={{ backgroundColor: backgroundColor, color: color }}
        >
          <Modal.Title>
            <h2>My Wedding Site</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              This site will be shared with the friends and family of my fiance
              and myself, with details of our English and Malaysian weddings. It
              outlines dates, locations, plans for each day, and RSVP google
              forms, as well as a PayPal button which allows the invited guest
              to contribute to our honeymoon fund. This site is written in
              English and Mandarin, and uses the i18next library to allow the
              user to switch language at the tap of a button. The site is
              password protectect, using local storage to ensure the guest only
              has to submit the password correctly once. Wedding bells sound
              effects will great your first visit, and framer motion scroll
              animations with bootstrap modals ensure a pleasant visit.
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="Details of the UK wedding"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>TypeScript / React</li>
              <li>Vite / Rollup</li>
              <li>Redux / React Redux / Redux Toolkit</li>
              <li>React Bootstrap</li>
              <li>Framer Motion</li>
              <li>i18Next</li>
              <li>VSCode</li>
              <li>Git and Github</li>
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
            <a
              href="https://timandcarmen-ourwedding2024.netlify.app/"
              target="_blank"
            >
              Visit site
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
