function DrawerSide({title,option}) {
    return (
        <div className=" w-full h-full justify-center items-center ">
            <div className=" w-full ">
                <div className=" w-full h-20 flex flex-col items-center justify-center">
                    <sapn className="font-bold"> {title} </sapn>
                </div>
                <div className=" flex  flex-col opacity-50 gap-1 p-2 pl-0 w-[90%] ">
                   {option.map((eachOption , index)=> <button key={index} className=" flex flex-col items-start border-b-[1px] border-dark-gray ">
                        {" "}
                        <span className="mb-1 text-dark-gray ml-4">
                            {eachOption}
                        </span>{" "}
                        
                    </button>)}
                </div>
            </div>
        </div>
    );
}

export default DrawerSide;
