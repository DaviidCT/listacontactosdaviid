import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store.jsx";
import Modal from "./Modal.jsx";

const ContactCard = ({ contacto }) => {
    const { actions } = useContext(Context);
    const [state, setState] = useState({ showModal: false });

    const imageUrl = "https://cdn-7.motorsport.com/images/mgl/0ZRQbbN0/s8/fernando-alonso-aston-martin-r.jpg";

    return (
        <div className="card mb-0 shadow-sm rounded-0 border-bottom">
            <div className="row g-0 p-3 align-items-center">
                <div className="col-md-2 d-flex justify-content-center">
                    <img 
                        src={imageUrl} 
                        className="rounded-circle" 
                        style={{ 
                            width: "90px", 
                            height: "90px", 
                            objectFit: "cover",
                            border: "1px solid #dee2e6" 
                        }} 
                        alt="Contact"
                    />
                </div>
                <div className="col-md-7 px-3">
                    <div className="card-body py-0">
                        <h5 className="card-title mb-1 fw-bold">{contacto.name}</h5>
                        <p className="card-text text-muted mb-1 small"><i className="fas fa-map-marker-alt me-2"></i>{contacto.address}</p>
                        <p className="card-text text-muted mb-1 small"><i className="fas fa-phone me-2"></i>{contacto.phone}</p>
                        <p className="card-text text-muted mb-0 small"><i className="fas fa-envelope me-2"></i>{contacto.email}</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-end align-items-center pe-4">
                    <Link to={`/edit-contact/${contacto.id}`} className="btn btn-link text-dark me-3">
                        <i className="fas fa-pencil-alt"></i>
                    </Link>

                    <button className="btn btn-link text-dark" onClick={() => setState({ showModal: true })}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>

            <Modal 
                show={state.showModal} 
                onClose={() => setState({ showModal: false })} 
                onConfirm={() => {
                    actions.borrarContacto(contacto.id);
                    setState({ showModal: false });
                }} 
            />
        </div>
    );
};

export default ContactCard;