import React from "react";
import { NavLink } from "react-router-dom";

const DashboardNavItem = ({ children, href }) => {
    return (
        <li>
            <NavLink
                to={href}
                className="nav-link link-dark"
                activeClassName="bg-purple"
                exact
            >
                {children}
            </NavLink>
        </li>
    );
};

export default DashboardNavItem;
