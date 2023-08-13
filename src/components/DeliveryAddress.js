import React from 'react';
import AddressBookCard from './AddressBookCard';
// import Button from './Button';

const DeliveryAddress = () => {


  return(<div className="bg-white my-5 py-4 px-5">
    <h2 className="uppercase text-lg font-bold">delivery address</h2>
    <AddressBookCard editable={false} />
    <button>Change</button>
    
  </div>
);}

const styles = {
  changeAddressButton: {
    // Define your button styles here
  },
  changeAddressLabelStyle: {
    // Define your text styles here
  },
};

export default DeliveryAddress;
