import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store.jsx";

const AddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    useEffect(() => {
        if (id && store.contactos.length > 0) {
            const contactoAEditar = store.contactos.find(c => c.id === parseInt(id));
            if (contactoAEditar) {
                setName(contactoAEditar.name);
                setEmail(contactoAEditar.email);
                setPhone(contactoAEditar.phone);
                setAddress(contactoAEditar.address);
            }
        }
    }, [id, store.contactos]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const infoContacto = { name, email, phone, address };

        if (id) {
            const exito = await actions.editarContacto(id, infoContacto);
            if (exito) navigate("/");
        } else {
            const exito = await actions.crearContacto(infoContacto);
            if (exito) navigate("/");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "800px" }}>
            <h1 className="text-center mb-4">{id ? "Edit contact" : "Add a new contact"}</h1>
            
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label fw-bold">Full Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Full Name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label fw-bold">Address</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter address" 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-3">
                    {id ? "Save changes" : "Save"}
                </button>
            </form>
            <Link to="/">or get back to contacts</Link>
        </div>
    );
};

export default AddContact;