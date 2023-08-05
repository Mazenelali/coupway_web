import { HiOutlineSearch } from "react-icons/hi";
import { VscLocation } from "react-icons/vsc";

function Search() {
    return (
        
        <div className="w-screen flex items-center fixed top-0 z-10 justify-center h-16 bg-light-green ">
            <div className="flex items-center w-[80%] h-[35px] mt-2 bg-white shadow-inner shadow-gray-300">
                <label className="p-2">
                    <HiOutlineSearch className=" text-light-green text-xl" />
                </label>
                <input
                    type="text"
                    placeholder="Sea Food Restaurant"
                    className=" border-none w-[53%] bg-transparent placeholder:text-xs placeholder:opacity-90"
                />
                <span className="w-[1.6px] h-[60%] rounded bg-slate-500 opacity-40"></span>
                <div className=" w-28 h-[35px]  flex items-center">
                    <span className="p-1">
                        <VscLocation className=" text-light-green text-xl" />
                    </span>
                    <span className=" text-xs opacity-50 text-gray-700">Location</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
