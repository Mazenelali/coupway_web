import CountrySide from "../../../components/filter/sideFilter/CountrySide"
import CurrencySide from "../../../components/filter/sideFilter/CurrencySide"
import SizeSide from "../../../components/filter/sideFilter/SizeSide"

import { useState } from "react";
function Setting () {
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina",
        "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
        "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
        "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia",
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
        "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Democratic Republic of the Congo",
        "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
        "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
        "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
        "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea",
        "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
        "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
        "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco",
        "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay",
        "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
        "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
        "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
        "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
        "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay",
        "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
      ];
    //   const currencies = [
    //     { name: "United States Dollar", code: "USD", country: "United States" },
    //     { name: "Euro", code: "EUR", country: "Eurozone" },
    //     { name: "Japanese Yen", code: "JPY", country: "Japan" },
    //     { name: "British Pound Sterling", code: "GBP", country: "United Kingdom" },
    //     { name: "Australian Dollar", code: "AUD", country: "Australia" },
    //     { name: "Canadian Dollar", code: "CAD", country: "Canada" },
    //     { name: "Swiss Franc", code: "CHF", country: "Switzerland" },
    //     { name: "Chinese Yuan Renminbi", code: "CNY", country: "China" },
    //     { name: "Indian Rupee", code: "INR", country: "India" },
    //     { name: "South Korean Won", code: "KRW", country: "South Korea" },
    //     { name: "Russian Ruble", code: "RUB", country: "Russia" },
    //     { name: "Brazilian Real", code: "BRL", country: "Brazil" },
    //     { name: "Mexican Peso", code: "MXN", country: "Mexico" },
    //     { name: "Singapore Dollar", code: "SGD", country: "Singapore" },
    //     { name: "Hong Kong Dollar", code: "HKD", country: "Hong Kong" },
    //     { name: "New Zealand Dollar", code: "NZD", country: "New Zealand" },
    //     { name: "South African Rand", code: "ZAR", country: "South Africa" },
    //     { name: "Swedish Krona", code: "SEK", country: "Sweden" },
    //     { name: "Norwegian Krone", code: "NOK", country: "Norway" },
    //     { name: "Turkish Lira", code: "TRY", country: "Turkey" }
    //   ];
      const currencies=[
        "USD", "EUR", "JPY", "GBP", "AUD",
        "CAD", "CHF", "CNY", "INR", "KRW",
        "RUB", "BRL", "MXN", "SGD", "HKD",
        "NZD", "ZAR", "SEK", "NOK", "TRY"
    ]
    const sizes=[
        "US", "EU", "UK", "AU"
    ]
      const [mySettings,setMySettings]=useState({
        'country':'Lebanon',
        'currency':'USD',
        'size':'UK',
        'build_version':'110',
        "build_time":"2017-10-02 13:30:00"
      })
      
      const [activeFilter, setActiveFilter] = useState(null);
      const handleFilterClick = (filter) => {
        setActiveFilter((prevFilter) =>
            prevFilter === filter ? null : filter
        );
    };
    const setCountry=(country)=>{
        setMySettings({...mySettings,'country':country})
    }
    const setCurrency=(currency)=>{
        setMySettings({...mySettings,'currency':currency})
    }
    const setSize=(size)=>{
        setMySettings({...mySettings,'size':size})
    }
    return ( <div className="pt-14">
        <div className={`w-56 h-screen z-10 bg-white absolute transition-all -right-56 ${ activeFilter === 'country' ? '-translate-x-56' : ''}`}><CountrySide handler={setCountry} countries={countries} current_country={mySettings.country}/></div>
        <div className={`w-56 h-screen z-10 bg-white absolute transition-all -right-56 ${ activeFilter === 'currency' ? '-translate-x-56' : ''}`}><CurrencySide handler={setCurrency} currencies={currencies} current_currency={mySettings.currency}/></div>
        <div className={`w-56 h-screen z-10 bg-white absolute transition-all -right-56 ${ activeFilter === 'size' ? '-translate-x-56' : ''}`}><SizeSide handler={setSize} sizes={sizes} current_size={mySettings.size}/></div>

        <div className={`w-screen h-screen z-9 absolute bg-dimmer ${ activeFilter != null ? 'block' : 'hidden'}`} onClick={()=>handleFilterClick(null)}></div>
        <div className="bg-white mb-4">
            <h3 className="pl-4 font-semibold">Store Setting</h3>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2">
                <div onClick={()=>handleFilterClick('country')}>Country</div>
                <p className="text-sm text-label-gray">{mySettings.country}</p>
            </div>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2"> 
                <div onClick={()=>handleFilterClick('currency')}>Change Currency</div>
                <p className="text-sm text-label-gray">{mySettings.currency}</p>
            </div>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2">
                <div onClick={()=>handleFilterClick('size')}>Change Sizes</div>
                <p className="text-sm text-label-gray">{mySettings.size}</p>
            </div>
        </div>
        <div className="bg-white mt-4 mb-4">
            <h3 className="pl-4 font-semibold">Other</h3>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2">Clear search history</div>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2">Rate this app</div>
        </div>
        <div className="bg-white mt-4">
            <h3 className="pl-4 font-semibold">About</h3>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2"><div>Build Version</div><p className="text-sm text-label-gray">{mySettings.build_version}</p></div>
            <div className="border-b-2 border-dark-gray pl-4 pr-2 pb-2 pt-2"><div>Build Time</div><p className="text-sm text-label-gray">{mySettings.build_time}</p></div>
        </div>
        

    </div> );
}

export default Setting ;