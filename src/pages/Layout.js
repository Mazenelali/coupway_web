import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";
import Search from "../components/Search";

function Layout() {
    return (
        <main className="h-screen flex-col ">
            <Search/>
            <div className=" h-[calc(100vh-9rem)]">
            <Outlet />
            </div>
            <Navbar />
        </main>
    );
}

export default Layout;
