import React from 'react';
import "./Modal.css"

export const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(null)}>
            {
                active &&
            <div className={active ? "modal__content active": "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            }
        </div>
    );
};
