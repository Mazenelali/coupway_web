import DetailsProduct from "../components/ProductComponent/DetailsProduct";
import LargeProductCart from "../components/ProductComponent/LargeProductCart";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

import MyButton from "../components/MyButton";



function ProductPage() {
    const [dataProduct, setDataProduct] = useState(null);
    const [dataFeeback, setFeedback] = useState(null);
    console.log(dataFeeback);
    console.log(dataProduct);
    const params = useParams();
    const { REACT_APP_URL } = process.env;

    function getEachProduct() {
        axios
            .get(`${REACT_APP_URL}/getalloffers/${params.id}`)
            .then((response) => {
                setDataProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function getFeedback() {
        axios
            .get(`${REACT_APP_URL}/getalloffers/${params.id}/provide-feedback`)
            .then((response) => {
                setFeedback(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getEachProduct();
        getFeedback();
    }, []);
    if (!dataProduct || !dataFeeback) return "hii";
    return (
        <div className=" flex flex-col items-center pb-10">
            <LargeProductCart
                location={dataProduct.location.name}
                company={dataProduct.company.name}
                city={dataProduct.company.city}
                highlights={dataProduct.highlights}
                old_price={dataProduct.old_price}
                new_price={dataProduct.new_price}
                id = {dataProduct.id}
            />
            <DetailsProduct
                what_you_get={dataProduct.compensations}
                about_this_deal={dataProduct.description}
                The_fine_print={dataProduct.fine_print}
                feedbacks={dataFeeback}
                callFeedbacks = {getFeedback}
            />
            <div className="w-[80%] text-xl ">
                <MyButton name="RESERVE DEAL"  />
            </div>
        </div>
    );
}

export default ProductPage;
