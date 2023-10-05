function ProducteCart({ data, MakeSmal , onClick }) {
    const {REACT_APP_URL} = process.env
    return (
        <div onClick={onclick}
            className={` ${
                MakeSmal === true
                    ? `w-full h-32 bg-white`
                    : `w-full h-56 bg-gradient-to-br from-dark-gray from-20% via-light-gray via-30% to-white to-90%`
            } flex items-center  justify-center `}
        >
            <div
                className={` w-[96%] h-[94%] bg-white relative   overflow-hidden  before:absolute before:-bottom-1 before:-left-5 before:right-0 ${
                    MakeSmal === true
                        ? `before:w-[200%]   before:h-[65px] before:bg-white `
                        : `before:w-[200%]   before:h-[110px] before:bg-gradient-to-br from-light-gray from-5% via-light-gray via-30% to-white to-90%`
                } before:-rotate-6`}
            >
                <img
                    src={`http://127.0.0.1:8000${data.main_picture}`}
                    alt=""
                    className=" w-full h-full object-cover"
                />
                <div
                    className={`${
                        MakeSmal === true
                            ? `h-12 w-full text-[8px]`
                            : `h-24 w-full`
                    } absolute -left-1 bottom-2  px-2 text-gray-700 flex flex-col`}
                >
                    <div className="self-end pt-1 pr-2">
                        <span className="block ">Deal Price</span>
                        <span className="block text-light-green ">
                            {" "}
                            <span className="line-through mr-1">
                                {" "}
                                <span className=" text-black">
                                    ${data.old_price}
                                </span>{" "}
                            </span>{" "}
                            ${data.new_price}
                        </span>
                    </div>
                    <div className="block">
                        <p
                            className={`${
                                MakeSmal === true ? `text-[9px]` : `text-lg`
                            }`}
                        >
                            {data.title}
                        </p>
                        <p
                            className={` text-light-green font-bold ${
                                MakeSmal === true ? `text-[10px]` : `text-lg`
                            }`}
                        >
                            {data.highlights}{" "}
                            <span
                                className={` text-gray-400 ${
                                    MakeSmal === true ? `text-[6px]` : `text-xs`
                                }`}
                            >
                                {data.location.name}
                            </span>
                        </p>
                    </div>
                </div>
                {!MakeSmal && (
                    <div className="  bg-light-gray absolute top-2 right-0 ">
                        <p className=" text-white pl-1"> PREMIUM </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProducteCart;
