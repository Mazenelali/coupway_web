import { useState } from "react";
import { BsLightbulb } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import Feedbacks from "./Feedback";
import {BiCommentDetail} from "react-icons/bi"
import {MdOutlineArrowDropUp} from "react-icons/md"
import {MdOutlineArrowDropDown} from "react-icons/md"
import {ImLocation} from "react-icons/im"
import {BiMapAlt} from "react-icons/bi"
import Location from "./Location";
import Map from "./Map";



function DetailsProduct({ what_you_get, about_this_deal, The_fine_print ,feedbacks ,callFeedbacks,location }) {
    return (
        <div className="w-screen bg-white h-full  flex">
            <div className=" w-[15%] pt-10 h-full"></div>
            <div className="w-[85%] pt-6 h-full flex flex-col border-l-[1.5px] border-gray-300">
                <SectionsProduct
                    icon={<BsLightbulb />}
                    title="what you get"
                    data={what_you_get}
                />
                <SectionsProduct
                    icon={<LuNewspaper />}
                    title="about this deal"
                    data={about_this_deal}
                />
                <SectionsProduct
                    icon={<LuNewspaper />}
                    title="the fine print"
                    data={The_fine_print}
                />
                <SectionsProduct
                    icon={<BiCommentDetail/>}
                    title="customer reviews"
                    data={<Feedbacks feedbacks = {feedbacks} getFeedback = {callFeedbacks} />}
                />
                <SectionsProduct
                    icon={<ImLocation/>}
                    title ='location'
                    data={<Location/>}
                />
                <SectionsProduct
                icon={<BiMapAlt/>}
                title='map'
                data ={<Map location = {location}/>}
                />
            </div>
        </div>
    );
}

// this is section component
function SectionsProduct({ icon, title, data }) {
    const [isVisible, setIsVisible] = useState(false);

    const showHide = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className=" w-full p-4 flex flex-col">
            <div className=" flex items-center relative">
                <div
                    onClick={showHide}
                    className="h-[20px] w-[20px] bg-white border-[1px] border-gray-300 rounded-full absolute -left-[26.7px] text-light-green flex items-center justify-center text-sm"
                >
                    {icon}
                </div>
                <p className=" uppercase text-light-green text-base font-bold flex justify-between w-full" onClick={showHide}>
                    <span>{title}</span>
                    <span className=" text-light-green text-xl">
                        {isVisible === false ? <MdOutlineArrowDropUp/> : <MdOutlineArrowDropDown/>}
                </span>
                </p>
            </div>
            {isVisible && <p className=" text-sm text-dark-gray">{data}</p>}
        </div>
    );
}

export default DetailsProduct;
