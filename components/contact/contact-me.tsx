import {useState, useEffect } from "react";
import { postData } from "../../utils/fetch";
import ContactForm from "./contact-form";
import classes from "./contact-form.module.css";

type ContactMeProps = {
  mode: string;
  modeStyles: Record<string, any>;
};

type formData = {
  name: string;
  email: string;
  message: string;
  newsletter: boolean
}

export default function ContactMe({ mode, modeStyles }: ContactMeProps) {

  async function sendFormData(formData: formData) {
    // const result = await postData()
  }

  return (
    <section className={classes.formSection} id="contactID">
        <h2>Contact me</h2>
        <ContactForm mode={mode} modeStyles={modeStyles}/>
    </section>
  );
}
