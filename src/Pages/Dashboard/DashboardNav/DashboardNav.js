import React from "react";
import { NavLink } from "react-router-dom";
import DashboardNavItem from "../DashboardNavItem/DashboardNavItem";
import useAuth from "../../../hooks/useAuth";
import "./DashboardNav.css";

const DashboardNav = ({ url }) => {
    const { isAdmin, logOut } = useAuth();

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 bg-light dashboard-nav">
            <NavLink
                to="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
                <h2 className="m-0">
                    <i className="fas fa-motorcycle text-purple"></i> Paradise
                    <span className="text-purple">.</span>
                </h2>
            </NavLink>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <DashboardNavItem href="/">Home</DashboardNavItem>
                <DashboardNavItem href="/dashboard">Dashboard</DashboardNavItem>
                {isAdmin ? (
                    <>
                        <DashboardNavItem href={`${url}/manageAllOrders`}>
                            Manage All Orders
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/addProduct`}>
                            Add a Product
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/makeAdmin`}>
                            Make Admin
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/manageProducts`}>
                            Manage Products
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/messages`}>
                            Messages
                        </DashboardNavItem>
                    </>
                ) : (
                    <>
                        <DashboardNavItem href={`${url}/pay`}>
                            Pay
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/myOrders`}>
                            My Orders
                        </DashboardNavItem>
                        <DashboardNavItem href={`${url}/review`}>
                            Review
                        </DashboardNavItem>
                    </>
                )}
            </ul>
            <hr />
            <div>
                <span className="px-3 d-block" role="button" onClick={logOut}>
                    Logout
                </span>
            </div>
        </div>
    );
};

export default DashboardNav;
