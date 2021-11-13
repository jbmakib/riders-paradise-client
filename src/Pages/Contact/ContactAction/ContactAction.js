import React from "react";

const ContactAction = ({ icon, children, title }) => {
    return (
        <div className="align-items-center justify-content-start py-3 row">
            <div className="d-flex justify-content-center col-md-1 col-2">
                <i className={`fas ${icon} h3`}></i>
            </div>
            <div className="col-md-11 col-10">
                <h6 className="fw-bolder m-0 my-1">{title}</h6>
                {children}
            </div>
        </div>
    );
};

export default ContactAction;
