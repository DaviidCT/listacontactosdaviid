import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.jsx";
import ContactCard from "../components/ContactCard.jsx";

const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerContactos();
    }, []);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-end mb-3">
                <Link to="/add-contact">
                    <button className="btn btn-success">Add new contact</button>
                </Link>
            </div>

            <div className="border border-secondary-subtle rounded overflow-hidden">
                {store.contactos && store.contactos.length > 0 ? (
                    store.contactos.map((item) => (
                        <ContactCard key={item.id} contacto={item} />
                    ))
                ) : (
                    <div className="p-5 text-center bg-light">
                        <p className="mb-0">No hay contactos. ¡Añade el primero!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Contact;