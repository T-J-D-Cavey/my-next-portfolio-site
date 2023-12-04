import { useState, useEffect } from "react";
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
  newsletter: boolean;
};

export default function ContactMe({ mode, modeStyles }: ContactMeProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setStatus(null);
      setErrorMessage(null);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [status, errorMessage]);

  async function sendFormData(formData: formData) {
    setStatus("pending");
    const result = await postData("/api/contact-tim", formData);

    if (!result.success) {
      setStatus("error");
      setErrorMessage(result.message);
      return;
    }

    setStatus("success");
    console.log(result.message)
    return;
  }

  return (
    <section className={classes.formSection} id="contactID">
      <h2>Contact me</h2>
      <ContactForm mode={mode} modeStyles={modeStyles} sendFormDataCaller={sendFormData}/>
    </section>
  );
}
