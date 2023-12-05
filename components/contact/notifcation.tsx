import Spinner from 'react-bootstrap/Spinner';
import classes from "./contact-form.module.css";

type NotificationProps = {
  notificationData: {
    status: string | undefined;
    message: string | undefined;
  };
};

// need to add tick icon for success and cross icon for error

export default function Notification({ notificationData }: NotificationProps) {
  console.log("this renders");

  return (
    <div className={classes.notificationContainer}>
      <div>
        <h3>{notificationData.status} </h3>
        {notificationData.status === "Sending" && <Spinner animation="grow" variant="light" />}
        {notificationData.message && <p>{notificationData.message}</p>}
      </div>
    </div>
  );
}
