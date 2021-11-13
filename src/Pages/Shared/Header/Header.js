import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import MainNavbar from "../MainNavbar/MainNavbar";
import NavbarToggler from "../NavbarToggler/NavbarToggler";
import NavItem from "../NavItem/NavItem";
import "./Header.css";

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <nav className="navbar header navbar-expand-lg navbar-light sticky-top bg-white">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    <h1 className="m-0">
                        <i className="fas fa-motorcycle text-purple"></i>{" "}
                        Paradise
                        <span className="text-purple">.</span>
                    </h1>
                </NavLink>
                <NavbarToggler />
                <MainNavbar>
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/explore">Explore</NavItem>
                    <NavItem href="/contact">Contact Us</NavItem>
                    {user.accessToken ? (
                        <>
                            <NavItem href="/dashboard">Dashboard</NavItem>
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
                            {/* <NavHashLink href="/home#services">
                                    Services
                                </NavHashLink>
                                <NavHashLink href="/home#reviews">
                                    Reviews
                                </NavHashLink>
                                <NavHashLink href="/home#about-us">
                                    About Us
                                </NavHashLink> */}
                            <NavItem href="/login">Login</NavItem>
                        </>
                    )}
                </MainNavbar>
            </div>
        </nav>
    );
};

export default Header;
