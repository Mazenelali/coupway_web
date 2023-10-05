import FoodAndDrink from "../asessts/94a0759a-1f03-43ac-96ce-e3e3d946fbba.jpeg";
import HealthAndFitness from "../asessts/94a0759a-1f03-43ac-96ce-e3e3d946fbba.jpeg";
import BeautyAndSpa from "../asessts/508990ca-45a0-4b92-b339-ff383f41b7f8.jpeg";
import Fashion from "../asessts/e8d14f4f-42f3-4bc4-a8d6-a313fe69a423.jpeg";
import Activities from "../asessts/fe12bbce-65da-483b-b6c5-cdfacff84417.jpeg";
import GetAways from "../asessts/da699368-cda6-4f71-8bf1-2bc5b1f776a8.jpeg";
import Electronics from "../asessts/f0bdd2b4-aba7-43de-91e3-d29577e39951.jpeg";
import Home from "../asessts/af7e7729-6f48-482c-b5be-e0a6d681c005.jpeg";
import DrawerSide from "../components/filter/sideFilter/DrawerSide";
import SearchCard from "../components/Cards/SearchCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Searchs() {
    const { REACT_APP_URL } = process.env;
    const [searchCard, setSearchCard] = useState();

    const [categories , setCategories] = useState(null)
    console.log(categories)
    
    console.log(searchCard);
    const category = [
        {
            name: "Food And Drinks",
            image: FoodAndDrink,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Health And Fitness",
            image: HealthAndFitness,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Beauty And Spa",
            image: BeautyAndSpa,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Fashion",
            image: Fashion,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Activities",
            image: Activities,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "GetAways",
            image: GetAways,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Electronics",
            image: Electronics,
            option :[1, 2, 3, 4, 5]
        },
        {
            name: "Home",
            image: Home,
            option :[1, 2, 3, 4, 5]
        },
    ];


    useEffect(()=>{
        function getCategory(){
            axios.get(`${REACT_APP_URL}/getcategories/`).then((res)=>{
                setCategories(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }
        getCategory()
    },[])

    
    if(!categories)return "wait"
    return (
        <>
            <div className="pt-[72px] p-2 flex gap-2 flex-col">
                {categories.map(({ image, name }, index) => (
                    <div onClick={() => setSearchCard(name)} key={index}>
                        <SearchCard image={image} name={name} />
                    </div>
                ))}
            </div>
            {categories.map(({ name, subcategories }, index) => (
                <div
                    key={index}
                    className={`w-56 h-full z-10 bg-white absolute transition-all top-[4rem] -right-56 ${
                        searchCard === name ? '-translate-x-56' : ""
                    }`}
                >
                    <div className="w-full h-full" >
                    <DrawerSide title={name} option={subcategories}  />
                    </div>
                </div>
            ))}
        </>
    );
}

export default Searchs;
