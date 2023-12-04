import classes from './contact-form.module.css'

type NotificationProps = {
    notificationData: {
        status: string | undefined;
        message: string | undefined;
    }
    mode: string;
    modeStyles: Record<string, any>;
}

export default function Notification({notificationData}: NotificationProps) {
    console.log('this renders')

    return (
        <div className={classes.notificationContainer}>
            <p>{notificationData.status}</p>
            {/* Add spinner here */}
            {notificationData.message && <p>{notificationData.message}</p>}
        </div>
    )

}