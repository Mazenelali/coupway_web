import { MdOutlineArrowForwardIos } from "react-icons/md";

function CouponsCard({borderGray , borderLightBlue}) {
    return (
        <div className={`w-full flex  ${borderGray ? `border-dashed border-2 border-dark-gray`: ``} ${borderLightBlue ? `border-dashed border-2 border-light-green`: ``} p-1 items-center bg-white`}>
            <div className=" w-2/6 ">
                <img
                    src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className=" p-2">
                <div className=" flex gap-4 text-dark-gray text-sm">
                    <p>Deal Price</p>
                    <span className=" text-light-green flex gap-1">
                        <p className=" line-through">
                            <span className="text-dark-gray">$100</span>
                        </p>{" "}
                        $80{" "}
                    </span>
                </div>
                <div>
                    {" "}
                    <p className="text-[13px]">
                        20% discount on seafood dishes
                    </p>
                </div>
                <div className="flex items-center gap-1">
                    <p className=" text-[12px] text-light-green"> Society Bistro</p>
                    <span className=" text-[10px] text-dark-gray">
                        saifi suites , Achrafieh
                    </span>
                </div>
            </div>
            <div>
                <MdOutlineArrowForwardIos className="text-light-green" />
            </div>
        </div>
    );
}

export default CouponsCard;
