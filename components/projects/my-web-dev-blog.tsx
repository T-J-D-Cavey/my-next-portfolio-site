import { useState } from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "next/image";
import { motion } from "framer-motion";
import mobileOne from "../../public/images/projectimages/blog_1.png";
import mobileTwo from "../../public/images/projectimages/blog_2.png";
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
              <h3>My Web Dev Blog</h3>
              <div>
                <p>
                  Blog posts about my self-taught journey into web development,
                  sharing insights and reflections that might be of interest to
                  someone who's doing the same.
                </p>
                <ul>
                  <li>Next.js and React</li>
                  <li>API routes and database</li>
                  <li>Node.js</li>
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
                alt="Blog homepage, a picture of Tim"
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
              <Link href="https://my-web-dev-blog.vercel.app/" target="_blank">
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
            <h2>My Web Dev Blog</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FAF9F6", color: "#202020" }}>
          <div className={classes.modalTextContainer}>
            <p>
              This blog site hosts my monthly posts about specific web
              development topics and learnings. It's been made using Next.js
              with static page generation for improved performance and SEO. It's
              still React, so after the fast initial page load it's client-side
              rendering from there, with all the interactivity and speed that
              React brings. This site utilizes Vercel's serverless functions for
              full-stack capabilities. It has two API routes. One for handling
              email addresses for signing up to my newsletter, the other for a
              contact form. User input is validated on the client and server.
              Data safely stored on a MongoDB database using Node.js. Articles have
              React Syntax Highlighter for displaying attractive code snippets
              within dynamically generated blog articles written in markdown and
              converted using React Markdown.
            </p>
            <div className={classes.modalPicContainer}>
              <Image
                width={600}
                height={1000}
                className={classes.projectPicMain}
                src={mobileTwo}
                alt="Screenshot of a blog post. A graph and a code snippet"
              />
            </div>
            <h4>TECHNOLOGIES USED:</h4>
            <ul>
              <li>Next.js</li>
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>React Markdown</li>
              <li>React Syntax Highlighter</li>
              <li>Bootstrap</li>
              <li>Vercel</li>
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
            <Link href="https://my-web-dev-blog.vercel.app/" target="_blank">
              Site
            </Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
