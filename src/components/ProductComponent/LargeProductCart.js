import Switch from "./Switch";

function LargeProductCart({data}) {
    return (
        <div className=" w-full h-80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative">
            <img
                src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" w-full h-56"
            />
            <div className=" h-[180px] bg-white w-[120%] absolute flex  justify-center -bottom-8 -right-5 -rotate-[8deg] ">
                <div className=" w-[375px] h-28 mt-[22px] ml-[48px] rotate-[8deg] flex flex-col ">
                    <div className=" py-1 flex gap-2">
                        <Switch />
                        <span className="text-sm text-dark-gray">Notify me when similar offers availble</span>
                    </div>
                    <div className=" flex flex-col">
                        <p className=" text-xl">{data.title}</p>
                        <p className="text-sm text-dark-gray"><span className="text-light-green text-[18px]">{data.type}</span> {data.location} </p>
                    </div>
                    <div className=" flex gap-[6px] items-center py-1 ">
                        <div className=" flex flex-col items-center"><p className=" text-base text-dark-gray">Availble</p><span>{data.availble}</span></div>
                        <div className=" w-[1px] h-8  bg-dark-gray "></div>
                        <div className=" flex flex-col items-center"><p className=" text-base text-dark-gray">Time remaining</p><span>{data.timeRemaining}</span></div>
                        <div className=" w-[1px] h-8 bg-dark-gray "></div>
                        <div className=" flex flex-col items-center"><p className=" text-base text-dark-gray">Full Value</p><span>{data.fullValue}</span></div>
                        <div className=" w-[1px] h-8 bg-dark-gray "></div>
                        <div className=" flex flex-col items-center"><p className=" text-base text-dark-gray">Deal price</p><span className=" text-light-green">{data.dealPrice}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeProductCart;
