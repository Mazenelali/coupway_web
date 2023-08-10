import Input from "../../../../components/inputs/InputsOfProfile"
import MyButton from "../../../../components/MyButton"
import React from "react";
function MyAddress() {
    const handleMyAddressChange = (e,key) => setMyAddress({...myAddress,[key]:e});
    const [myAddress,setMyAddress]=React.useState({
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
        'default_delivery':true,
        'default_billing':true
    });
    const saveMyAddress=()=>{
        console.log(myAddress)
    }
    return ( <div className="pb-4">
    <div className="w-full p-4  bg-white mt-16">
        <Input type="text"  label='First Name' defValue={myAddress['FN']} onChange={(e)=>handleMyAddressChange(e,'FN')}/>
        <Input type="text" label='Last Name' defValue={myAddress['LN']} onChange={(e)=>handleMyAddressChange(e,'LN')}/>
        <Input type="email" label='Email' defValue={myAddress['email']} onChange={(e)=>handleMyAddressChange(e,'email')}/>
        <Input type="tel"  label='Phone Number' defValue={myAddress['phone']} onChange={(e)=>handleMyAddressChange(e,'country')}/>
        <Input type="text"  placeholder='Address' defValue={myAddress['address']} onChange={(e)=>handleMyAddressChange(e,'address')}/>
        <Input type="text"  placeholder='Optional' defValue={myAddress['optional']} onChange={(e)=>handleMyAddressChange(e,'optional')}/>
        <Input type="text"  placeholder='Town/City' defValue={myAddress['town']} onChange={(e)=>handleMyAddressChange(e,'town')}/>
        <Input type="text"  placeholder='Country' defValue={myAddress['country_address']} onChange={(e)=>handleMyAddressChange(e,'country_address')}/>
        <Input type="text"  placeholder='Postcode' defValue={myAddress['postcode']} onChange={(e)=>handleMyAddressChange(e,'postcode')}/>
        <div className="flex justify-start items-center gap-2 mt-4 mb-4">
        {
            myAddress['default_delivery']? <input onChange={()=>setMyAddress({...myAddress,'default_delivery':!myAddress['default_delivery']})} checked className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-md" type="checkbox"  name="default_address" value="default_address"/>:        <input onChange={()=>setMyAddress({...myAddress,'default_delivery':!myAddress['default_delivery']})} className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-md" type="checkbox"  name="default_address" value="default_address"/>

        }
        <label >Save as your default delivery address</label>
        </div>
        <div className="flex justify-start items-center gap-2 mt-4 mb-4">
        {
            myAddress['default_billing']?<input onChange={()=>setMyAddress({...myAddress,'default_delivery':!myAddress['default_billing']})} checked className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-md" type="checkbox"  name="default_billing" value="default_billing"/>:        <input onChange={()=>setMyAddress({...myAddress,'default_delivery':!myAddress['default_billing']})} className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-md" type="checkbox"  name="default_billing" value="default_billing"/>
        }
        <label >Save as your default billing address</label>
        </div>
        
    </div>

    <div className="pl-4 pr-4"><MyButton name="SAVE ADDRESS" onClick={saveMyAddress} /></div>
    </div> );
}

export default MyAddress;