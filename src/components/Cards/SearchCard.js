
import { MdOutlineArrowForwardIos } from "react-icons/md";

function SearchCard({name , image }) {
    return ( 
        <div
        className="bg-white w-full h-24 flex justify-around items-center "
    >
        <div className="w-[60%] flex">
            <p className="uppercase ml-4">{name}</p>
        </div>
        <div className=" w-28 h-full ">
            <img
                src={image}
                className=" w-full h-full"
                alt={name}
            />
        </div>
        <div>
            <MdOutlineArrowForwardIos className=" text-light-green" />
        </div>
    </div>
     );
}

export default SearchCard;