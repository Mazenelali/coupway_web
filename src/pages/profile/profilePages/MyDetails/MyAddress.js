import AddressCard from "../../../../components/Cards/AddressCard"
import { useState } from "react";

function MyAddress() {
    const [myAddress,setMyAddress]=useState([{
        "FN":"Maria",
        "LN":"Khoury",
        "email":"maria@khoury.com",
        "phone":"00961112233",
        "country":"Lebanon",
        "address":"3rd Floor, Gardenia Building,",
        'optional':"Sabtieh",
        'town':"Beirut",
        'country_address':"Lebanon",
        'postcode':"00961",
        'default_delivery':true,
        'default_billing':true 
    },{
        "FN":"Maria",
        "LN":"Khoury",
        "email":"maria@khoury.com",
        "phone":"00961112233",
        "country":"Lebanon",
        "address":"",
        'optional':"",
        'town':"",
        'country_address':"",
        'postcode':"",
        'default_delivery':false,
        'default_billing':false
    }]);

    return ( <div className="p-4">
        {myAddress.map((address,index) => { return <AddressCard key={index} address={address}/>})}
    </div> );
}

export default MyAddress;