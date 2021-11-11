import React from "react";
import { NavLink } from "react-router-dom";
import MainNavbar from "../MainNavbar/MainNavbar";
import NavbarToggler from "../NavbarToggler/NavbarToggler";
import NavItem from "../NavItem/NavItem";
import "./Header.css";

const Header = () => {
    return (
        <nav className="navbar header navbar-expand-lg navbar-light sticky-top bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <img
                        src="https://jbmakib.github.io/travel-site-bootstrap/images/logo.png"
                        alt=""
                        width="150px"
                    />
                </NavLink>
                <NavbarToggler />
                <MainNavbar>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/login">Login</NavItem>
                    {/* {user.accessToken ? (
                            <>
                                <NavItem href="/my-orders">My Orders</NavItem>
                                <NavItem href="/manage-orders">
                                    Manage Orders
                                </NavItem>
                                <NavItem href="/add-service">
                                    Add Service
                                </NavItem>
                                <li>
                                    <span className="fw-bold">
                                        {user.displayName}
                                    </span>
                                </li>
                                <li>
                                    <button
                                        className="btn btn-outline-dark rounded-pill border-2 ms-2"
                                        onClick={logOut}
                                    >
                                        LogOut
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <NavHashLink href="/home#services">
                                    Services
                                </NavHashLink>
                                <NavHashLink href="/home#reviews">
                                    Reviews
                                </NavHashLink>
                                <NavHashLink href="/home#about-us">
                                    About Us
                                </NavHashLink>
                                <NavItem href="/login">Login</NavItem>
                            </>
                        )} */}
                </MainNavbar>
            </div>
        </nav>
    );
};

export default Header;
