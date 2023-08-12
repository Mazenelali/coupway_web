import NotificationCard from "../components/Cards/NotificationCard";

function Notification() {
    return ( 
        <div className=" p-2 flex pt-14 flex-col gap-2">
        <NotificationCard/>
        <NotificationCard/>
        </div>
     );
}

export default Notification;