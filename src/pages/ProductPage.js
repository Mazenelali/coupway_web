import DetailsProduct from "../components/ProductComponent/DetailsProduct";
import LargeProductCart from "../components/ProductComponent/LargeProductCart";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";

import MyButton from "../components/MyButton";

function ProductPage() {
    const [dataProduct, setDataProduct] = useState(null);
    const [dataFeeback, setFeedback] = useState(null);
    const params = useParams();
    const { REACT_APP_URL } = process.env;
    const userData = useAuthUser();

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

    async function buyDeals() {
        const dataDeals = [
            {
                coupons_ordered: 1,
                user_id: userData().username.id,
                offer_id: dataProduct.id,
            },
        ];

        const messagesSent = {
            preview_url: true,
            to: +96176488474,
            text: {
                body: "You have to check out this amazing messaging service https://www.whatsapp.com/",
            },
        };

        console.log(dataDeals);
        await axios
            .post(`${REACT_APP_URL}/createorder/`, dataDeals)
            .then((response) => {
                axios
                    .post(`https://v1/messages`, messagesSent)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
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
                main_picture={dataProduct.main_picture}
                id={dataProduct.id}
            />
            <DetailsProduct
                what_you_get={dataProduct.compensations}
                about_this_deal={dataProduct.description}
                The_fine_print={dataProduct.fine_print}
                feedbacks={dataFeeback}
                location={dataProduct.location}
                callFeedbacks={getFeedback}
            />
            <div className="w-[80%] text-xl " onClick={buyDeals}>
                <MyButton name="RESERVE DEAL" />
            </div>
        </div>
    );
}

export default ProductPage;
