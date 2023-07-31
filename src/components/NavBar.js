import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { HiOutlineSearch } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { MdOutlineHome } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { BsPersonFill } from "react-icons/bs";
import { MdFavorite } from "react-icons/md";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [activeLink, setActiveLink] = useState("/"); 

    let NavLinks = [
        {
            icon: <MdOutlineHome />,
            path: "/",
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
            icon: <MdOutlineFavoriteBorder />,
            path: "/favorite",
            active: <MdFavorite />,
        },
        {
            icon: <BsPerson />,
            path: "/profile",
            active: <BsPersonFill />,
        },
    ];

    return (
        <nav className="w-full h-8 flex text-2xl justify-center items-center space-x-10 text-slate-50 bg-light-green">
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
