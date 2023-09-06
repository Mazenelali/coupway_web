import ProducteCart from "../components/Cards/ProducteCart";
import { useState, useEffect } from "react";
import axios from "axios";

function Home() {
    const { REACT_APP_URL } = process.env;

    const [dataOffer, setDataOffer] = useState(null);

    const getDataOffer = () => {
        axios.get(`${REACT_APP_URL}/getalloffers`).then((response) => {
            setDataOffer(response.data)
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        });
    };
    useEffect(()=>{
        getDataOffer()
    },[])

    
    return (
        <div className="p-4 w-screen h-full gap-5 pt-[7.5rem] flex flex-col items-center ">
            <div>
                {dataOffer ? <ProducteCart data={dataOffer[0]} /> : "WAIT"}
            </div>
            <div className=" flex flex-wrap gap-2 justify-center">
                {!dataOffer ?[] :dataOffer.map((ele, index) => (
                    <div key={index}>
                        {dataOffer ? <ProducteCart MakeSmal={true} onClick={console.log("kjhgf")} data={ele} key={index} /> : "WAIT"}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
