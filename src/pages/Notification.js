import NotificationCard from "../components/NotificationCard";

function Notification() {
    return ( 
        <div className=" p-2 flex flex-col gap-2">
        <NotificationCard/>
        <NotificationCard/>
        </div>
     );
}

export default Notification;