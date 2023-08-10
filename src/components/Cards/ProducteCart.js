function ProducteCart(props) {
    return (
        <div className={` ${ props.MakeSmal === true ? `w-[167px] h-32`:`w-[350px] h-56`} flex items-center  justify-center bg-gradient-to-br from-dark-gray from-20% via-light-gray via-30% to-white to-90% ` }>
            <div
                className={` w-[96%] h-[94%] bg-white relative  border-dark-gray overflow-hidden  before:absolute before:-bottom-1 before:-left-5 before:right-0 ${ props.MakeSmal === true ? `before:w-[200%]   before:h-[65px]` : `before:w-[200%]   before:h-[110px]`} before:-rotate-6 
        before:bg-gradient-to-br from-light-gray from-5% via-light-gray via-30% to-white to-90% `}
            >
                <img
                    src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className=" w-full h-full object-cover"
                />
                <div className={`${props.MakeSmal === true ? `h-12 w-[170px] text-[8px]`: `h-24 w-[350px]`} absolute -left-1 bottom-2  px-2 text-gray-700 flex flex-col`}>
                    <div className="self-end pt-1 pr-2">
                        <span className="block ">Deal Price</span>
                        <span className="block text-light-green ">
                            {" "}
                            <span className="line-through mr-1">
                                {" "}
                                <span className=" text-black">$100</span>{" "}
                            </span>{" "}
                            $80
                        </span>
                    </div>
                    <div className="block">
                        <p className= {`${ props.MakeSmal ===true ? `text-[9px]` :`text-lg`}`}>Lorem ipsum dolor sit amet.</p>
                        <p className= { ` text-light-green font-bold ${ props.MakeSmal ===true ? `text-[10px]` :`text-lg`}`}>
                            Lorem ipsum{" "}
                            <span className= { ` text-gray-400 ${ props.MakeSmal ===true ? `text-[6px]` :`text-xs`}`}>
                                Lorem, ipsum.
                            </span>
                        </p>
                    </div>
                </div>
               {!props.MakeSmal && <div className="  bg-light-gray absolute top-2 right-0 ">
                    <p className=" text-white pl-1" > PREMIUM </p>
                </div>}
            </div>
        </div>
    );
}

export default ProducteCart;
