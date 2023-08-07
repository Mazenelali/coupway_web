import Logo from "../Screenshot_from_2023-08-04_12-42-41-removebg-preview.png"
import {CgMail} from "react-icons/cg"
import {RiArrowRightDoubleLine} from "react-icons/ri"
import { useNavigate } from "react-router-dom";

function WelcomePage() {

    const navigate = useNavigate()

    return (
        <div
            className=" w-screen h-screen bg-[url(https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=1600)] bg-no-repeat bg-cover overflow-hidden  relative"
        >
            <div className=" w-screen h-screen flex items-center justify-center "> <img src ={Logo} alt=""/></div>
            <div className=" w-[120%] h-44 flex  bg-light-green  -rotate-6  absolute -bottom-20 text-white  -left-6  overflow-hidden">
                    <div className=" w-1/2 h-full bg-dark-green flex items-center justify-center"><CgMail className="mb-20 rotate-6 text-4xl cursor-pointer ml-4" onClick={()=>navigate('/register')}/></div>
                    <div className=" w-1/2 h-full bg-light-green flex items-center justify-center"> <RiArrowRightDoubleLine className="mt-1 rotate-6 text-5xl cursor-pointer mr-10 mb-10" onClick={()=>navigate('/home')}/> </div>
            </div>
        </div>
    );
}

export default WelcomePage;
