import {useState} from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import mobileOne from '../../public/images/projectimages/xchange_1.png';
import mobileTwo from '../../public/images/projectimages/xchange_2.png';
import classes from "./projects.module.css";


type ProjectItemComponentProps = {
    mode: string;
    modeStyles: Record<string, any>;
  };

  export default function MyWebDevBlog({mode, modeStyles}: ProjectItemComponentProps) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ctaButton = modeStyles[mode].ctaButton;
    const secondaryButton = modeStyles[mode].secondaryButton;
    const backgroundColor = modeStyles[mode].projectBackgroundOne;
    const color = modeStyles[mode].color;

    return (
      <div style={{backgroundColor: backgroundColor, color: color}}>
      <section className={classes.projectSection}>
        <div className={classes.mainContainer}>
        <div className={classes.projectTextAndImageContainer}>
          <div className={classes.projectsTextContainer}>
          <h3>xChange</h3>
            <div>
              <p>
                A web app that allows quick and easy conversion of the world's
                top currencies.
              </p>
              <ul>
                <li>TypeScript</li>
                <li>FreeCurrency API</li>
                <li>TS-Particles</li>
              </ul>
            </div>
          </div>
          <div className={classes.projectPicMainContainer}>
            <Image width={600} height={1000} className={classes.projectPicMain} src={mobileOne} alt='Inputs for currency and amounts' />
          </div>
        </div>
        <div className={classes.buttonMainContainer}>

        <Button variant={secondaryButton} onClick={handleShow} className={classes.projectButton}>
          Demo
        </Button>
        <Button variant={ctaButton} onClick={handleClose} className={classes.projectButton}>
              <Link href='https://xchange-cavey-app.netlify.app/' target='_blank'>Site</Link>
        </Button>
        </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: backgroundColor, color: color}}>
          <Modal.Title>
            <h2>xChange</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: '#FAF9F6', color: '#202020'}}>
          <div className={classes.modalTextContainer}>
          <p>
              xChange connects to the{" "}
              <Link href="https://freecurrencyapi.com/docs" target="_blank">
                Free currency API{" "}
              </Link>
              for daily exchange rates of the world's top currencies. Choose any
              of the available base and target currencies and get that day's
              conversion rate. Use one of the inputs and the app will
              automatically create the equivilent amount of the other currency
              based on the conversion rate. Interact with the tsparticles
              animation. Open up a Bootstrap modal containing links to the API
              documentation and disclaimers. Fast and Responsive for any screen
              size.
            </p>
          <div className={classes.modalPicContainer}>
            <Image width={600} height={1000} className={classes.projectPicMain} src={mobileTwo} alt='Information about site' />
          </div>
          <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>React / TypeScript</li>
              <li>Redux / React-Redux / Redux Toolkit</li>
              <li>Vite / Rollup</li>
              <li>React Bootstrap</li>
              <li>TS-Particles</li>
              <li>Git / Github</li>
              <li>VSCode</li>
              <li>Netlify</li>
            </ul>
          </div>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: backgroundColor, color: color}}>
          <Button variant={secondaryButton} onClick={handleClose} className={classes.projectButton}>
            Close
          </Button>
          <Button variant={ctaButton} onClick={handleClose} className={classes.projectButton}>
            <Link href='https://xchange-cavey-app.netlify.app/' target='_blank'>Site</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
}