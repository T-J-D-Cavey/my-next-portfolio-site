import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import mobileOne from "../../public/images/projectimages/click_a_bug_1.png";
import mobileTwo from "../../public/images/projectimages/click_a_bug_2.png";
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
  const backgroundColor = modeStyles[mode].projectBackgroundTwo;
  const color = modeStyles[mode].color;

  return (
    <div style={{ backgroundColor: backgroundColor, color: color }}>
      <section className={classes.projectSection}>
        <div className={classes.mainContainer}>
          <div className={classes.projectTextAndImageContainer}>
            <div className={classes.projectsTextContainer}>
              <h3>Click-A-Bug</h3>
              <div>
                <p>
                  An online game to test your reactions: can you save the
                  professor from the bugs in his servers?
                </p>
                <ul>
                  <li>React web app game</li>
                  <li>Complex state managed by Redux</li>
                  <li>Retro 80's style and design</li>
                </ul>
              </div>
            </div>
            <div className={classes.projectPicMainContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileOne}
                alt="Information about the game and a animated professor with bugs"
              />
            </div>
          </div>
          <div className={classes.buttonMainContainer}>
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
              <Link href="https://click-a-bug.netlify.app/" target="_blank">
                Site
              </Link>
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
            <h2>Click-a-bug</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              Click-a-bug is a single-page-application (SPA) showcasing React
              and Redux managing an app with a complex state. The app imitates a
              'whack-a-mole' game, where users see a grid (of servers) and have
              to 'click' (or tap) on any bugs that appear whilst avoiding
              clicking on anything else that pops up. Features include a
              countdown timer, a score and a lives-left metric. Click on the
              wrong thing or take too long and the bugs will take over!
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="live shot of the whack a mole style game"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React / React Router DOM</li>
              <li>Redux / React Redux / Redux Toolkit</li>
              <li>CSS</li>
              <li>NPM</li>
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
            <Link href="https://click-a-bug.netlify.app/" target="_blank">
              Site
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
