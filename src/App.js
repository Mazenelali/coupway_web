import "./App.css";
import Searchs from "./pages/Searchs";
import Notification from "./pages/Notification";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/search" element={<Searchs/>}/>
                    <Route path="/notification" element={<Notification/>}/>
                    <Route path="/favorite" element={<Favorite/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
