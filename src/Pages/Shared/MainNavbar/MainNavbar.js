import React from "react";

const MainNavbar = ({ children }) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center ms-auto mb-2 mb-lg-0">
                {children}
            </ul>
        </div>
    );
};

export default MainNavbar;
