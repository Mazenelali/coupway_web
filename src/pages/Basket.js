//we using the same cart for the basket
import NotificationCard from "../components/Cards/NotificationCard";
function Favorite() {

    const data =  JSON.parse(localStorage.getItem('MyBasket'))

    return ( <div className="p-2 flex flex-col gap-2 pt-14">
        {!data ? "not baket yet" : data.map((item , index)=>
        <div key={index}>
            <NotificationCard data = {item} />
        </div>
        )}
    </div> );
}

export default Favorite;