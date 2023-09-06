import {HiOutlineInformationCircle} from "react-icons/hi"
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate();
  const handleClick = (url) => navigate(url);
    return ( <>
    <div className="bg-white mt-16 mb-4">
            <div onClick={()=>handleClick('/profile/aboutCoupway')} className=" flex gap-2 items-center pl-4 pr-2 pb-2 pt-2 "> <div className="text-light-green"><HiOutlineInformationCircle className="w-6 h-6"/></div> <div className="border-b-2 border-dark-gray w-11/12 pb-2 pt-2">About COUPWAY</div></div>
            <div onClick={()=>handleClick('/profile/termsandconditions')} className=" flex gap-2 items-center pl-4 pr-2 pb-2 pt-2 "> <div className="text-light-green"><HiOutlineInformationCircle className="w-6 h-6"/></div> <div className="border-b-2 border-dark-gray w-11/12 pb-2 pt-2">Terms and Conditions</div></div>
        </div></> );
}

export default AboutUs;