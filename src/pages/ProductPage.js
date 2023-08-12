import DetailsProduct from "../components/ProductComponent/DetailsProduct";
import LargeProductCart from "../components/ProductComponent/LargeProductCart";

const dataCard = {
    title: "20% lorem lorem",
    type: "sea food",
    location: "tripoli , lebanon",
    availble: "10/20",
    timeRemaining: "15 days",
    fullValue: "100$",
    dealPrice: "80$",
};

const dataSection = {
    whatGet:
        "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.",
    aboutDeals:
        "While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.",
    finePrint:
        "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three",
};

function ProductPage() {
    return (
        <div className=" flex flex-col">
            <LargeProductCart data={dataCard} />
            <DetailsProduct  data = {dataSection} />
        </div>
    );
}

export default ProductPage;
