import Input from "../../../../components/inputs/InputsOfProfile"
import MyButton from "../../../../components/MyButton"
import React from "react";
function MyDetails() {
    const handleMyDetailsChange = (e,key) => setMyDetails({...myDetails,[key]:e});
    const handleGenderChange=(val)=>setMyDetails({...myDetails,'gender':val})
    const saveMyDetails=()=>{
        console.log(myDetails)
    }
    const [myDetails,setMyDetails]=React.useState({
        "FN":"Maria",
        "LN":"Khoury",
        "email":"maria@khoury.com",
        "phone":"00961112233",
        "date":"1970-01-01",
        "gender":"female",

    });
    return ( <div className="pb-4">
    <div className="w-full p-4  bg-white mt-16">
        <Input type="text"  label='First Name' defValue={myDetails['FN']} onChange={(e)=>handleMyDetailsChange(e,'FN')}/>
        <Input type="text" label='Last Name' defValue={myDetails['LN']} onChange={(e)=>handleMyDetailsChange(e,'LN')}/>
        <Input type="email" label='Email' defValue={myDetails['email']} onChange={(e)=>handleMyDetailsChange(e,'email')}/>
        <Input type="tel"  label='Phone Number' defValue={myDetails['phone']} onChange={(e)=>handleMyDetailsChange(e,'phone')}/>
    </div>
    <div className="w-full p-4  bg-white mt-4">
        <button><a className="text-label-gray font-bold" href="mydetails/myaddress">My Address</a></button>
    </div>
    <div className="w-full p-4  bg-white mt-4 mb-4">
        <Input type="date"  label='Date of Birth' defValue={myDetails['date']} onChange={(e)=>handleMyDetailsChange(e,'date')}/>
        <div className="flex justify-between">
        {myDetails['gender']==='male'? <><div className="flex justify-start items-center gap-2">  
                <label >Male</label>
                <input  onChange={(e)=>handleGenderChange('male')} checked className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-full" type="radio"  name="gender" value="male"/>
            </div>
            <div className="flex justify-start items-center gap-2">
                <label>Female</label>
                <input onChange={(e)=>handleGenderChange('female')} className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-full" type="radio"  name="gender" value="female"/>
            </div></>:<><div className="flex justify-start items-center gap-2">  
                <label >Male</label>
                <input   onChange={(e)=>handleGenderChange('male')} className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-full" type="radio"  name="gender" value="male"/>
            </div>
            <div className="flex justify-start items-center gap-2">
                <label>Female</label>
                <input onChange={(e)=>handleGenderChange('female')} checked className="appearance-none w-6 h-6 border-dashed border-2 border-dark-gray checked:bg-dark-green checked:border-dark-green rounded-full" type="radio"  name="gender" value="female"/>
            </div></>} 
            
        </div>
    </div>
    <div className="pl-4 pr-4"><MyButton name="SAVE CHANGES" onClick={saveMyDetails} /></div>
    
    </div> );
}

export default MyDetails;