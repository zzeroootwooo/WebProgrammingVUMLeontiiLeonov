// import logo from "./public/assets/logo.svg";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PetsPage from "./pages/PetsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/pets" element={<PetsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default App;
