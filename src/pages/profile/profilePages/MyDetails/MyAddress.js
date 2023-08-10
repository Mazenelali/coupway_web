import Input from "../../../../components/inputs/InputsOfProfile"
import AddressCard from "../../../../components/AddressCard"
import React from "react";
function MyAddress() {
    const [myAddress,setMyAddress]=React.useState([{
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