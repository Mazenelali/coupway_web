import { useState } from "react";
import { BsLightbulb } from "react-icons/bs";
import {LuNewspaper} from "react-icons/lu"

function DetailsProduct({data}) {

    return (
        <div className="w-screen h-full flex pb-32">
            <div className=" w-[15%] pt-10 h-full"></div>
            <div className="w-[85%] pt-6 h-full flex flex-col border-l-[1.5px] border-gray-300">
                <SectionsProduct icon = {<BsLightbulb/>} title ="what you get" data = {data.whatGet}  />
                <SectionsProduct icon = {<LuNewspaper/>} title ="about this deal" data = {data.aboutDeals}  />
                <SectionsProduct icon = {<LuNewspaper/>} title ="the fine print" data = {data.finePrint}  />
            </div>
        </div>
    );
}


// this is section component 
function SectionsProduct({icon,title,data}) {
    const [isVisible ,setIsVisible] = useState(false)

    const showHide = ()=>{
        setIsVisible(!isVisible)
    }

    return (
        <div className=" w-full p-4 flex flex-col">
            <div className=" flex items-center relative">
                <div onClick={showHide} className="h-[20px] w-[20px] bg-white border-[1px] border-gray-300 rounded-full absolute -left-[26.7px] text-light-green flex items-center justify-center text-sm">
                    {icon}
                </div>
                <p className=" uppercase text-light-green text-base font-bold">
                    {title}
                </p>
            </div>
                { isVisible&&<p className=" text-sm text-dark-gray">
                {data}
                </p>}
        </div>
    );
}

export default DetailsProduct;
