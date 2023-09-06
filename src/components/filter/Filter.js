import { useState } from "react";
import { GoX } from "react-icons/go";
import DrawerSide from "./sideFilter/DrawerSide";

function Filter() {
    const [activeFilter, setActiveFilter] = useState(null);

    const handleFilterClick = (filter) => {
        setActiveFilter((prevFilter) =>
            prevFilter === filter ? null : filter
        );
    };

    return (
        <div className=" overflow-hidden ">
            <div className="w-screen h-10 fixed z-10 top-16 border-b-[1px] border-gray-400 flex items-center bg-white justify-center space-x-4">
                <button
                    className={`text-xs border-dashed border-[1px] border-gray-400 text  space-x-1 max-w-[70px] h-6 flex items-center ${
                        activeFilter === "deals"
                            ? "text-light-green border-light-green"
                            : "text-gray-400"
                    }`}
                    onClick={() => handleFilterClick("deals")}
                >
                    {activeFilter === "deals" && <GoX />}{" "}
                    <span className=" p-1">Deals</span>
                </button>
                <button
                    className={`text-xs border-dashed border-[1px] border-gray-400 text  space-x-1 max-w-[70px] h-6 flex items-center ${
                        activeFilter === "sortBy"
                            ? "text-light-green border-light-green"
                            : "text-gray-400"
                    }`}
                    onClick={() => handleFilterClick("sortBy")}
                >
                    {activeFilter === "sortBy" && <GoX />}{" "}
                    <span className=" p-1">Sort by</span>
                </button>
                <button
                    className={`text-xs border-dashed border-[1px] border-gray-400 text  space-x-1 max-w-[70px] h-6 flex items-center ${
                        activeFilter === "price"
                            ? "text-light-green border-light-green"
                            : "text-gray-400"
                    }`}
                    onClick={() => handleFilterClick("price")}
                >
                    {activeFilter === "price" && <GoX />}{" "}
                    <span className=" p-1">Price</span>
                </button>
                <button
                    className={`text-xs border-dashed border-[1px] border-gray-400 text  space-x-1 max-w-[70px] h-6 flex items-center ${
                        activeFilter === "distance"
                            ? "text-light-green border-light-green"
                            : "text-gray-400"
                    }`}
                    onClick={() => handleFilterClick("distance")}
                >
                    {activeFilter === "distance" && <GoX />}{" "}
                    <span className=" p-1">Distance</span>
                </button>
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'deals' ? '-translate-x-56' : ''}`}>
                <DrawerSide title="Deals" option = {["Preuminm Deals" , "Deals"]} />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'sortBy' ? '-translate-x-56' : ''}`}>
                <DrawerSide title="Price" option = {["Price:Low to High","Price:Hight to Low","Posted Today","Posted Within 3 Day","Posted Within 1 Week","Posted Within 1 Month"]} />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'price' ? '-translate-x-56' : ''}`}>
                <DrawerSide title="Sort by" option = {["0$ - 10$","10$ - 25$","25$ - 65$","65$ - 100$","100$ - 150$","150$ +",]} />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'distance' ? '-translate-x-56' : ''}`}>
                <DrawerSide  title="Distance" option = {["Within 1 Klm" , "Within 5 Klm" , "Within 10 Klm" , "Within 20 Klm" , "Within 50 Klm" , "Any Distance" , ]} />
            </div>
        </div>
    );
}

export default Filter;
