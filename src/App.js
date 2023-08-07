import "./App.css";
import Searchs from "./pages/Searchs";
import Notification from "./pages/Notification";
import Favorite from "./pages/Basket";
import Profile from "./pages/profile/profilePages/Profile";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Setting from "./pages/profile/profilePages/Setting";
import ProfileLayout from "./pages/profile/ProfileLayout";
import ChangePassword from "./pages/profile/profilePages/ChangePassword";
import ContactUs from "./pages/profile/profilePages/ContactUs";
import MyCoupons from "./pages/profile/profilePages/MyCoupons/couponsPages/MyCoupons";
import MyDetails from "./pages/profile/profilePages/MyDetails";
import SignIn from "./pages/profile/profilePages/SignIn";
import SocialAccounts from "./pages/profile/profilePages/SocialAccounts";
import AboutUs from "./pages/profile/profilePages/AboutUs";
import CouponsLayout from "./pages/profile/profilePages/MyCoupons/CouponsLayout";
import PrushadeDeals from "./pages/profile/profilePages/MyCoupons/couponsPages/PrushadDeals";
import ReservedDeals from "./pages/profile/profilePages/MyCoupons/couponsPages/ReservedDeals";
import UsedDeals from "./pages/profile/profilePages/MyCoupons/couponsPages/UsedDeals";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route index element={<WelcomePage />} />
                <Route path="/" element={<Layout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/search" element={<Searchs />} />
                    <Route path="/notification" element={<Notification />} />
                    <Route path="/basket" element={<Favorite />} />
                    <Route path="/profile" element={<ProfileLayout />}>
                        {/* Nested route under /profile */}
                        <Route index element={<Profile />} />
                        <Route path="setting" element={<Setting />} />
                        <Route path="changePassword" element={<ChangePassword/>} />
                        <Route path="contactUs" element={<ContactUs/>} />
                        <Route path="mycoupons" element={<CouponsLayout/>} >
                            <Route index element={<MyCoupons/>}/>
                            <Route path="pruchadeDeals" element={<PrushadeDeals/>}/>
                            <Route path="reservedDeals" element={<ReservedDeals/>}/>
                            <Route path="usedDeals" element={<UsedDeals/>}/>
                        </Route>
                        <Route path="mydetails" element={<MyDetails/>} />
                        <Route path="signIn" element={<SignIn/>} />
                        <Route path="socialaccounts" element={<SocialAccounts/>} />
                        <Route path="aboutUs" element={<AboutUs/>} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
