import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store.jsx";

const AddContact = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.crearContacto({ name, email, phone, address });
        navigate("/");
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "800px" }}>
            <h1 className="text-center mb-4">Add a new contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Address</label>
                    <input type="text" className="form-control" placeholder="Enter address" onChange={(e) => setAddress(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">save</button>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>
    );
};

export default AddContact;