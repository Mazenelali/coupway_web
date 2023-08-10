import { useState } from "react";
function DealsSide({countries,current_country,handler}) {
    const [country,setCountry]=useState("")
    return (
        <div className=" w-full h-full justify-center items-center ">
            <div className=" w-full ">
                <div className=" w-full mb-4 mt-4 h-20 flex flex-col items-center justify-center">
                    <sapn className="font-bold mb-2 mt-2"> COUNTRY </sapn>
                    <input type='text' className="border-2 border-dashed border-dark-gray p-2 w-10/12 self-center" onChange={(e)=>setCountry(e.target.value)} placeholder="search country"/>

                </div>
                <div className="mb-4">
                    <p className=" pl-4 border-b-2 border-dark-gray w-8/12">Current Country</p>
                    <p className=" pl-4 text-light-green text-sm">{current_country}</p>
                </div>
                <div>
                    <p className=" pl-4 border-b-2 border-dark-gray w-8/12">Other Countries</p>
                    {countries.filter(ele=> ele.includes(country)).slice(0,10).map((country,index)=>{
                        return <div className=" pl-4 border-b-2 border-dark-gray w-8/12 text-dark-gray text-sm pt-1 pb-1" onClick={()=>handler(country)} key={country}>{country}</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default DealsSide;
