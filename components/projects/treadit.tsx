import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import mobileOne from "../../public/images/projectimages/treadit_1.png";
import mobileTwo from "../../public/images/projectimages/treadit_2.png";
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
  const backgroundColor = modeStyles[mode].projectBackgroundOne;
  const color = modeStyles[mode].color;

  return (
    <div style={{ backgroundColor: backgroundColor, color: color }}>
      <section className={classes.projectSection}>
        <div className={classes.mainContainer}>
          <div className={classes.projectTextAndImageContainer}>
            <div className={classes.projectsTextContainer}>
              <h3>Treadit</h3>
              <div>
                <p>
                  A Reddit-replica for hikers. Browse a list of the best outdoor
                  & adventure sub-reddits, or create your own filters and scroll
                  the results.
                </p>
                <ul>
                  <li>React and Redux</li>
                  <li>Reddit API</li>
                  <li>Jest and Cypress testing</li>
                </ul>
              </div>
            </div>
            <div className={classes.projectPicMainContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileOne}
                alt="homeage banner and nav bar"
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
              <a href="https://treadit.netlify.app/" target="_blank">
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
            <h2>Treadit</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              This SPA hosted on Netlify uses the Reddit JSON API to
              asynchronously fetch Reddit posts based on the user's filter and
              search parameters. It has a default filter applied, and contains
              personally selected sub-reddits that appeal to hikers, walkers and
              lovers of adventure and the great outdoors. The user interface is
              a feed of the post results and includes its content, media and
              engagement metrics. The pictures in these posts are very often
              beautifully scenic and dynamic by design. Unit, component and
              end-to-end (E2E) tests using Jest and Cypress frameworks.
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="hiking posts with comment and like volumes showing"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React / React Router DOM</li>
              <li>Redux / React-Redux / Redux Toolkit</li>
              <li>Reddit JSON API</li>
              <li>Cypress testing library</li>
              <li>Jest testing library</li>
              <li>Mock Server Worker</li>
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
            <a href="https://treadit.netlify.app/" target="_blank">
              Visit site
            </a>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
