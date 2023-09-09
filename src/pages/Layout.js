import React, { useEffect, useState } from "react";
import { Outlet, useLocation ,useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import Search from "../components/Search";
import Filter from "../components/filter/Filter";
import Header from "../components/header";


function Layout() {
    const [isVisibleSearchBar, setIsVisibleSearchBar] = useState(true);
    const [isVisibleFilterBar, setIsVisibleFilterBar] = useState(true);
    const [showArrow, setShowArrow] = useState(false);
    const [title, setTitle] = useState("");
    const [backLocation, setBackLocation] = useState("");
    const [ShowNave , setShowNav] = useState(true)
    const location = useLocation();
    const currentPath = location.pathname;
    const params = useParams()

    useEffect(() => {
        setIsVisibleSearchBar(currentPath === "/home" || currentPath === "/search" );
        setIsVisibleFilterBar(currentPath === "/home")
        setShowNav(currentPath === `/product/${params.id}`);
        const pathTitleMap = {
            "/notification": "Notification",
            "/basket": "Basket",
            "/profile/mycoupons": "My Coupons",
            "/profile/mycoupons/purchasedDeals": "Purchased Deals",
            "/profile/mycoupons/reservedDeals": "Reserved Deals",
            "/profile/mycoupons/usedDeals": "Used Deals",
            "/profile/mydetails": "My Details",
            "/profile/changePassword": "Change Password",
            "/profile/contactUs": "Contact Us",
            "/profile/aboutus": "About Us",
            "/profile/setting": "Settings",
            "/profile/signIn": "Sign In",
        };

        setTitle(pathTitleMap[currentPath] || "");

        const pathsWithArrow = [
            "/profile/mycoupons/purchasedDeals",
            "/profile/mycoupons/usedDeals",
            "/profile/mycoupons/reservedDeals",
            "/profile/mydetails",
            "/profile/contactUs",
            "/profile/setting",
            "/profile/signIn",
            "/profile/aboutus",
            "/profile/changePassword",
            "/profile/mycoupons",
        ];

        setShowArrow(pathsWithArrow.includes(currentPath));

        const profilePaths = {
            "/profile/mycoupons/purchasedDeals": "/profile/mycoupons",
            "/profile/mycoupons/usedDeals": "/profile/mycoupons",
            "/profile/mycoupons/reservedDeals": "/profile/mycoupons",
            "/profile/mydetails": "/profile",
            "/profile/contactUs": "/profile",
            "/profile/setting": "/profile",
            "/profile/signIn": "/profile",
            "/profile/aboutus": "/profile",
            "/profile/changePassword": "/profile",
            "/profile/mycoupons": "/profile",
        };
        

        setBackLocation(profilePaths[currentPath] || "");
    }, [currentPath]);

    return (
        <main className="h-screen w-screen fixed top-0 right-0 z-0">
            {isVisibleSearchBar &&
                <Search />
            }
            {
                isVisibleFilterBar &&
                <Filter/>
            }
            {!isVisibleSearchBar && (
                <Header
                    title={title}
                    isVisible={showArrow}
                    navigateTo={backLocation}
                />
            )}
            <div className={` ${currentPath === `/product/${params.id}` ? `h-screen bg-white` : `h-[calc(100vh-32px)]  bg-light-gray`} overflow-scroll `}>
                <Outlet />
            </div>
            { !ShowNave && (<Navbar />)}
        </main>
    );
}

export default Layout;
