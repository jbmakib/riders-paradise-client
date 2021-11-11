import React from "react";
import { NavLink } from "react-router-dom";
import "./DashboardNav.css";

const DashboardNav = () => {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light dashboard-nav">
            <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
                <span className="fs-4">Sidebar</span>
            </NavLink>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li>
                    <a href="/" className="nav-link link-dark">
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active link-dark">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link link-dark">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link link-dark">
                        Products
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link link-dark">
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div>
                <span className="px-3">Logout</span>
            </div>
        </div>
    );
};

export default DashboardNav;
