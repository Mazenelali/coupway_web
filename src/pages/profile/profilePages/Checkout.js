import BasketItem from "../../../components/BasketItem"
import MyButton from "../../../components/MyButton";

// import AddressBookCard from "../components/AddressBookCard"
function Checkout() {
    return ( <div className="p-2 pt-14">
        <DeliveryCountry countryName="Lebanon"/>
        <Basket/>
    </div> );
}

const DeliveryCountry = ({ countryName }) => (
    <div className="flex flex-row gap-2 py-4 px-5 bg-white">
      <p className="uppercase font-bold text-lg">Deliver To :</p>
      <p className="font-thin text-lg">{countryName}</p>
    </div>
);

const Basket = ({ basketItems }) => {
    return (
      <>
        {basketItems &&
          basketItems.map((item, index) => <BasketItem key={index} />)}
        <BasketItem /> 
        <div className="mt-4 pl-4 pr-4"><MyButton name="Order" /></div>
      </>
    );
};




export default Checkout;