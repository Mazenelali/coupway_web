import "./App.css";
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
