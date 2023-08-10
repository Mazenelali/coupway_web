import { useState } from "react";
function SizeSide({sizes,current_size,handler}) {
    const [size,setSize]=useState("")
    return (
        <div className=" w-full h-full justify-center items-center ">
            <div className=" w-full ">
                <div className=" w-full mb-4 mt-4 h-20 flex flex-col items-center justify-center">
                    <sapn className="font-bold mb-2 mt-2"> SIZE </sapn>
                    <input type='text' className="border-2 border-dashed border-dark-gray p-2 w-10/12 self-center" onChange={(e)=>setSize(e.target.value)} placeholder="search country"/>

                </div>
                <div className="mb-4">
                    <p className=" pl-4 border-b-2 border-dark-gray w-8/12">Current Size</p>
                    <p className=" pl-4 text-light-green text-sm">{current_size}</p>
                </div>
                <div>
                    <p className=" pl-4 border-b-2 border-dark-gray w-8/12">Other Sizes</p>
                    {sizes.filter(ele=> ele.includes(size)).slice(0,10).map((size,index)=>{
                        return <div className=" pl-4 border-b-2 border-dark-gray w-8/12 text-dark-gray text-sm pt-1 pb-1" onClick={()=>handler(size)} key={size}>{size}</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default SizeSide;
