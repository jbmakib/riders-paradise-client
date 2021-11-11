import React, { useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../../images/login-image.png";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const handleOnInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    };

    const handleLoginForm = (e) => {
        e.preventDefault();
        console.log(loginInfo);
    };
    return (
        <div className="container">
            <div className="row gx-3 align-items-center">
                <div className="col-12 col-lg-6 text-center">
                    <h1 className="text-primary">Login</h1>
                    <form className="w-75 mx-auto" onSubmit={handleLoginForm}>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                required
                                className="form-control"
                                id="floatingEmail"
                                placeholder="Your Email"
                                name="email"
                                onInput={handleOnInput}
                            />
                            <label htmlFor="floatingEmail">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="floatingPassword"
                                placeholder="Password"
                                name="password"
                                onInput={handleOnInput}
                            />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">
                            Login
                        </button>
                    </form>
                    New User? <Link to="/register">Create an account</Link>
                </div>
                <div className="col-12 col-lg-6">
                    <img src={loginImage} alt="Login" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Login;
