import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiShoppingCartSimple } from "react-icons/pi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineHome } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [activeLink, setActiveLink] = useState("/home"); 


    
    let NavLinks = [
        {
            icon: <MdOutlineHome />,
            path: "/home",
            active: <IoMdHome />,
        },
        {
            icon: <HiOutlineSearch />,
            path: "/search",
            active: <HiOutlineSearch />,
        },
        {
            icon: <IoMdNotificationsOutline />,
            path: "/notification",
            active: <IoMdNotifications />,
        },
        {
            icon: <PiShoppingCartSimple />,
            path: "/basket",
            active: <PiShoppingCartSimpleFill />,
        },
        {
            icon: <BsPerson />,
            path: "/profile",
            active: <BsPersonFill />,
        },
    ];

    return (
        <nav className="w-screen h-8 flex text-2xl justify-center fixed bottom-0 z-10  items-center space-x-10 text-slate-50 bg-light-green">
            {NavLinks.map((eachLink) => (
                
                <NavLink
                    key={eachLink.path}
                    to={eachLink.path}
                    onClick={() => setActiveLink(eachLink.path)}
                >
                    {eachLink.path === activeLink
                        ? eachLink.active
                        : eachLink.icon}
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
