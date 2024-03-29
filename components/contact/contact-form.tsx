import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useEffect} from "react";
import classes from "./contact-form.module.css";

type ContactFormProps = {
  mode: string;
  modeStyles: Record<string, any>;
  sendFormDataCaller: (formData: formData) => void;
  submitStatus: string | null;
};

type formData = {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
};

export default function ContactForm({ mode, modeStyles, sendFormDataCaller, submitStatus }: ContactFormProps) {
  const ctaButton = modeStyles[mode].ctaButton;

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);;
  const newsletterInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if(submitStatus === "success") {
      nameInputRef.current!.value = "";
      emailInputRef.current!.value = "";
      messageInputRef.current!.value = "";
      newsletterInputRef.current!.checked = false;
    }
    return;
  }, [submitStatus])
  
  function formSubmitHandler(e:React.FormEvent) {
    e.preventDefault();
    const formData = {
      name: nameInputRef.current!.value,
      email: emailInputRef.current!.value,
      message: messageInputRef.current!.value,
      newsletter: newsletterInputRef.current!.checked,
    }
    sendFormDataCaller(formData);
  }
  return (
    <>
      <Form onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter name" ref={nameInputRef} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailInputRef} required/>
          <p className={classes.formText}>
            We'll never share your email with anyone else.
          </p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter message" ref={messageInputRef} required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get email for every new blog post" ref={newsletterInputRef}/>
        </Form.Group>
        <Button variant={ctaButton} type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}