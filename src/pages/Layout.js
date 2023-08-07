import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Search from "../components/Search";
import Filter from "../components/filter/Filter";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Layout() {
    const [isVisible, setIsVisble] = useState(true);

    const location = useLocation();
    const currentPath = location.pathname;

    useEffect(() => {
        setIsVisble(currentPath === "/home");
    }, [currentPath]);

    return (
        <main className="h-screen w-screen fixed top-0 right-0 z-0 ">
            {isVisible && (
                <>
                    <Search /> <Filter />
                </>
            )}
            <div className=" h-[calc(100vh-32px)]  overflow-scroll bg-light-gray ">
                <Outlet />
            </div>
            <Navbar />
        </main>
    );
}

export default Layout;
