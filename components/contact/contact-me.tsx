import { useState, useEffect } from "react";
import { postData } from "../../utils/fetch";
import ContactForm from "./contact-form";
import Notification from "./notifcation";
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

type notificationData = {
  status: string | undefined;
  message: string | undefined;
};

export default function ContactMe({ mode, modeStyles }: ContactMeProps) {
  const [status, setStatus] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  let notificationData: notificationData = {
    status: undefined,
    message: undefined,
  };

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (status === "error" || status === "success") {
      timeoutId = setTimeout(() => {
        setStatus(null);
        setStatusMessage(null);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [status]);

  async function sendFormData(formData: formData) {
    setStatus("pending");
    const result = await postData("/api/contact-tim", formData);

    if (!result.success) {
      setStatus("error");
      setStatusMessage(result.message);
      return;
    }

    setStatus("success");
    console.log(result.message);
    return;
  }

  if (status === "pending") {
    notificationData = {
      status: "Sending",
      message: "Waiting for confirmation",
    };
  }

  if (status === "success") {
    notificationData = {
      status: "Success!",
      message: "I got your message. Thank you.",
    };
  }

  if (status === "error") {
    notificationData = {
      status: "Error",
      message: `Oh no. ${statusMessage}`,
    };
  }

  return (
    <section className={classes.formSection} id="contact">
      <div className={classes.formContainer}>
        <h2>Contact me</h2>
        {status && <Notification notificationData={notificationData} />}
        <ContactForm
          mode={mode}
          modeStyles={modeStyles}
          sendFormDataCaller={sendFormData}
          submitStatus={status}
        />
      </div>
    </section>
  );
}
