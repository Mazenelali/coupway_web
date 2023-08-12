import React from "react";
import {MdModeEditOutline} from "react-icons/md"
import {RiDeleteBin6Line} from 'react-icons/ri'
function AddressCard({address}) {
  return (
    <div className="flex w-100 mb-4 ">
      <div  className="w-10/12  p-4">
        <p>{address.FN} {address.LN}</p>
        <p>{address.address}</p>
        <p>{address.town}</p>
        <p>{address.country}</p>
        <p>{address.phone}</p>
        {address.default_delivery&&<p className="text-dark-gray text-sm">This is your default delivery address</p>}
        {address.default_billing&&<p className="text-dark-gray text-sm">This is your default billing address</p>}
      </div>
      <div className=" w-2/12 p-4 flex flex-col gap-4">
        <MdModeEditOutline/>
        <RiDeleteBin6Line/>
      </div>
    </div>
  );
}

export default AddressCard;
