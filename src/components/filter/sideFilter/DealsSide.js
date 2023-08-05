function DealsSide() {
    return (
        <div className=" w-full h-full justify-center items-center ">
            <div className=" w-full ">
                <div className=" w-full h-20 flex flex-col items-center justify-center">
                    <sapn className="font-bold"> Deals </sapn>
                </div>
                <div className=" flex  flex-col opacity-70 gap-1 p-2 w-3/4">
                    <button className=" flex flex-col items-start ">
                        {" "}
                        <span className="mb-1 text-dark-gray ml-2">
                            Preuminm Deals
                        </span>{" "}
                        <th className=" h-[0.1px] w-[168px] bg-dark-gray" />{" "}
                    </button>
                    <button className=" flex flex-col items-start ">
                        {" "}
                        <span className="mb-1 text-dark-gray ml-2">
                            Deals
                        </span>{" "}
                        <th className=" h-[0.1px] w-[168px] bg-dark-gray" />{" "}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DealsSide;
