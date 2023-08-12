import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function MyCoupons() {
    const couponsOptins = [{
        option:"pruchade deals",
        link :"pruchadeDeals"
    },{
        option:"reserved deals",
        link :"reservedDeals"
    },{
        option:"used deals",
        link :"usedDeals"
    },];


    return (
        <div className=" w-full flex justify-center bg-white mt-14">
            <div className=" w-3/4">
                {couponsOptins.map(({option ,link} , index)=><Link to={link} key={index} className="block uppercase bord pr-3 py-6 border-b-[1px] border-dark-gray text-sm text-dark-gray font-bold">
                    {" "}
                    {option}{" "}
                </Link>)}
            </div>
        </div>
    );
}

export default MyCoupons;
