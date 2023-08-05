import ProducteCart from "../components/ProducteCart";

let countProduct = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

function Home() {
    return (
        <div className="p-4 w-screen h-full gap-5 pt-[7.5rem] flex flex-col items-center ">
            <div>
            <ProducteCart/>
            </div>
            <div className=" flex flex-wrap gap-2 justify-center">
                {
                    countProduct.map((ele , index)=><div key={index}><ProducteCart MakeSmal = {true} key={index}/></div>)
                }
            </div>
        </div>
    );
}

export default Home;
