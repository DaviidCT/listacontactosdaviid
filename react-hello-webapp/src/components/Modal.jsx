import React from "react";

const Modal = ({ show, onClose, onConfirm }) => {
    if (!show) return null;

    return (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.5)" }} tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>If you delete this thing the entire universe will go down!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onClose}>Oh no!</button>
                        <button type="button" className="btn btn-secondary" onClick={onConfirm}>yes baby!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;