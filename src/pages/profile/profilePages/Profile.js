import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
import {RiLock2Line} from "react-icons/ri"
import{LiaShoppingBagSolid} from "react-icons/lia"
import {MdSettingsPhone} from "react-icons/md"
import {MdOutlinePayment} from "react-icons/md"
import {BsFillStickyFill} from "react-icons/bs"
import {MdGroups2} from "react-icons/md"
import {BsInfoCircleFill} from "react-icons/bs"
import {IoSettingsSharp} from "react-icons/io5"
import {PiSignOut} from "react-icons/pi"

function Profile() {
    const [userType, setUserType] = useState("user");

    const socialLinks =
        userType === "user"
            ? [
                { icon: <LiaShoppingBagSolid/>, link: "mycoupons", word: "My Coupons" },
                { icon: <BsFillStickyFill/>, link: "mydetails", word: "My Details" },
                { icon: <RiLock2Line/>, link: "changePassword", word: "Change Password" },
                { icon: <MdSettingsPhone/> , link: "contactUs", word: "Contact Us" },
                { icon: <MdOutlinePayment/>, link: "paymentMethod", word: "Payment Method" },
                { icon: <MdGroups2/>, link: "socialAccounts", word: "Social Accounts" },
                { icon: <BsInfoCircleFill/>, link: "aboutus", word: "About Us" },
            ]
            : [
                { icon: <MdSettingsPhone/>, link: "contactUs", word: "Contact Us" },
                { icon: <MdGroups2/>, link: "socialAccounts", word: "Social Accounts" },
                { icon: <BsInfoCircleFill/>, link: "aboutus", word: "About Us" },
            ];

    const settings = [
        { icon: <IoSettingsSharp/>, link: "setting", word: "Settings" },
        { icon: <PiSignOut/>, link: "signIn", word: "Sign In" },
    ];

    return (
        <div className="w-screen h-[calc(100vh-32px)] relative z-10 overflow-hidden flex items-center justify-center">
            <div className="w-[120%] h-40 absolute -top-8 -left-4 z-10 bg-light-green -rotate-6 shadow-[inset_0px_-14px_20px_0px_#00000024]">
                <div className="absolute top-14 left-11 flex items-center gap-3 text-white  rotate-6 ">
                    <CgProfile className="text-6xl" />
                    <span className="font-bold">Hi There!</span>
                </div>
                <div className="absolute -bottom-16 -left-4 w-[120%] h-16 bg-dark-gray opacity-20"></div>
            </div>
            <div className="w-full flex gap-3 mt-32 flex-col relative z-10">
                <div className="bg-white">
                    {socialLinks.map((element, index) => (
                        <Link
                            className="flex gap-1 justify-end items-center"
                            key={index}
                            to={element.link}
                        >
                            <span className="text-light-green text-xl">{element.icon}</span> 
                            <span className="pl-6 w-3/4 border-b-[1px] py-3 border-light-gray flex items-center">
                                {element.word}
                            </span>
                            <MdOutlineArrowForwardIos className="text-light-green" />
                        </Link>
                    ))}
                </div>
                <div className="bg-white">
                    {settings.map((item, index) => (
                        <Link 
                            className="flex gap-1 justify-end items-center"
                            key={index}
                            to = {item.link}
                        >
                            <span className="text-light-green text-xl">{item.icon}</span> 
                            <span className="pl-6 w-3/4 border-b-[1px] py-3 border-light-gray">
                                {item.word}
                            </span>
                            <MdOutlineArrowForwardIos className="text-light-green" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;
