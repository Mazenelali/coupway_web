import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Search from "../components/Search";
import Filter from "../components/filter/Filter";

function Layout() {
    return (
        <main className="h-screen w-screen fixed top-0 right-0 z-0 ">
            <Search /> 
            <Filter />
            <div className=" h-[calc(100vh-32px)] overflow-scroll bg-light-gray  pt-[6.5rem]">
                    <Outlet /> 
            </div>
            <Navbar />
        </main>
    );
}

export default Layout;
