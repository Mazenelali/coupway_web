import { useState } from "react";
import { GoX } from "react-icons/go";
import DealsSide from "./sideFilter/DealsSide";
import PriceSide from "./sideFilter/PriceSide";
import SortBySide from "./sideFilter/SortBySide";
import DistanceSide from "./sideFilter/DistanceSide";

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
                <DealsSide />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'price' ? '-translate-x-56' : ''}`}>
                <PriceSide />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'sortBy' ? '-translate-x-56' : ''}`}>
                <SortBySide />
            </div>
            <div className={`w-56 h-[calc(100vh-136px)] z-10 bg-white absolute transition-all top-[6.5rem] -right-56 ${ activeFilter === 'distance' ? '-translate-x-56' : ''}`}>
                <DistanceSide />
            </div>
        </div>
    );
}

export default Filter;
