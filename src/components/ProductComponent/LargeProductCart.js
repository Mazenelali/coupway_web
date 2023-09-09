import Switch from "./Switch";
import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from "react-icons/pi";
import { BsShareFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function LargeProductCart({
    location,
    company,
    city,
    highlights,
    old_price,
    new_price,
    id,
}) {
    const [iconofBasket, setIconofBasket] = useState(<PiShoppingCartSimple />);

    function addToBasket() {
        const data = JSON.parse(localStorage.getItem("MyBasket"));
        const isProductInBasket = data && data.some((item) => item.id === id);
        if (isProductInBasket) {
            const updatedBasket = data.filter((item) => item.id !== id);
            localStorage.setItem("MyBasket", JSON.stringify(updatedBasket));
            setIconofBasket(<PiShoppingCartSimple />);
        } else {
            const existingBasket =
                JSON.parse(localStorage.getItem("MyBasket")) || [];
            const product = {
                location: location,
                company: company,
                highlights: highlights,
                old_price: old_price,
                new_price: new_price,
                id: id,
            };
            existingBasket.push(product);
            localStorage.setItem("MyBasket", JSON.stringify(existingBasket));
            console.log("Product added to the basket.");
            setIconofBasket(<PiShoppingCartSimpleFill />);
        }
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("MyBasket"));
        const isProductInBasket = data && data.some((item) => item.id === id);
        if (isProductInBasket) {
            setIconofBasket(<PiShoppingCartSimpleFill />);
        }
    }, [id]);

    return (
        <div className=" w-full h-80 overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)] relative">
            <div className=" absolute top-4 flex gap-3 right-6 text-3xl font-black text-light-green">
                <span onClick={addToBasket}>{iconofBasket}</span>
                <BsShareFill />
            </div>
            <img
                src="https://images.pexels.com/photos/566345/pexels-photo-566345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" w-full h-56"
            />
            <div className=" h-[180px] bg-white w-[120%] absolute flex  justify-center -bottom-8 -right-5 -rotate-[8deg] ">
                <div className=" w-full h-28 mt-[22px] ml-[48px] rotate-[8deg] flex flex-col ">
                    <div className=" py-1 ml-6 flex gap-2">
                        <Switch />
                        <span className="text-sm text-dark-gray">
                            Notify me when similar offers availble
                        </span>
                    </div>
                    <div className=" flex flex-col ml-6">
                        <p className=" text-xl">{highlights}</p>
                        <p className="text-sm text-dark-gray">
                            <span className="text-light-green text-[18px]">
                                {company}
                            </span>{" "}
                            {location}
                        </p>
                    </div>
                    <div className=" flex gap-[4px] items-center py-1 basis-24 ">
                        <div className=" flex flex-col items-center basis-1/4">
                            <p className=" text-[14px] text-dark-gray">
                                Availble
                            </p>
                            <span className="text-[12px]">availble</span>
                        </div>
                        <span className=" w-[1px] h-8  bg-dark-gray "></span>
                        <div className=" flex flex-col items-center basis-1/4">
                            <p className=" text-[14px]  text-dark-gray">
                                Time remaining
                            </p>
                            <span className="text-[12px]">time remaining</span>
                        </div>
                        <span className=" w-[1px] h-8 bg-dark-gray "></span>
                        <div className=" flex flex-col items-center basis-1/4">
                            <p className=" text-[14px] text-dark-gray">
                                Full Value
                            </p>
                            <span className="text-[12px]">${old_price}</span>
                        </div>
                        <span className=" w-[1px] h-8 bg-dark-gray "></span>
                        <div className=" flex flex-col items-center basis-1/4">
                            <p className=" text-[14px] text-dark-gray">
                                Deal price
                            </p>
                            <span className=" text-light-green text-[12px] ">
                                ${new_price}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LargeProductCart;
