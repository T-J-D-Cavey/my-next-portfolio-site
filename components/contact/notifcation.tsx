import Spinner from 'react-bootstrap/Spinner';
import Image from 'next/image';
import crossIcon from "../../public/images/cross_icon.png";
import tickIcon from "../../public/images/tick_icon.png";
import classes from "./contact-form.module.css";

type NotificationProps = {
  notificationData: {
    status: string | undefined;
    message: string | undefined;
  };
};

export default function Notification({ notificationData }: NotificationProps) {
  console.log("this renders");

  return (
    <div className={classes.notificationContainer}>
      <div className={classes.flexContainer}>
        <h3>{notificationData.status} </h3>
        {notificationData.status === "Sending" && <Spinner animation="grow" variant="light" />}
        {notificationData.status === "Success!" && <div className={classes.iconContainer}><Image width={50} height={50} src={tickIcon} alt="Success"/></div>}
        {notificationData.status === "Error" && <div className={classes.iconContainer}><Image width={50} height={50} src={crossIcon} alt="Error"/></div>}
        {notificationData.message && <p>{notificationData.message}</p>}
      </div>
    </div>
  );
}
