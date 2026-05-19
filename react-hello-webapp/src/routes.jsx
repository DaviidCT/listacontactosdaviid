import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact.jsx";
import AddContact from "./pages/AddContact.jsx";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path="/add-contact" element={<AddContact />} />
                <Route path="/edit-contact/:id" element={<AddContact />} />         
                <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;