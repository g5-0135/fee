import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Products } from "./Products";

export function App() {
    return (
        <>
            <div
                className="hf bgi"
                style={{
                    backgroundImage: "",
                    color: "#fff",
                    gap: "0rem",
                }}
            >
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<h3>Home Page</h3>} />
                        <Route path="/about" element={<h3>about</h3>} />
                        <Route path="/signin" element={<SignIn />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/products" element={<Products />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
}