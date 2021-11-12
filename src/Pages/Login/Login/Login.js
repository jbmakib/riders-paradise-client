import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginImage from "../../../images/login-image.png";

const Login = () => {
    const [loginInfo, setLoginInfo] = useState({});

    const { error, loginUser, setError, isLoading, user } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/";

    const handleOnInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginInfo = { ...loginInfo };
        newLoginInfo[field] = value;
        setLoginInfo(newLoginInfo);
    };

    const handleLoginForm = (e) => {
        e.preventDefault();
        loginUser(loginInfo.email, loginInfo.password, location, history);
    };

    useEffect(() => {
        user.accessToken && history.push(redirect_uri);
    }, [user, history, redirect_uri]);

    return (
        <div className="container">
            <div className="row gx-3 align-items-center">
                <div className="col-12 col-lg-6 text-center">
                    <h1 className="text-purple">Login</h1>
                    {isLoading ? (
                        <div
                            className="spinner-border text-purple"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <>
                            <form
                                className="w-75 mx-auto"
                                onSubmit={handleLoginForm}
                            >
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
                                    <label htmlFor="floatingEmail">
                                        Email address
                                    </label>
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
                                    <label htmlFor="floatingPassword">
                                        Password
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-purple my-3"
                                >
                                    Login
                                </button>
                            </form>
                            New User?{" "}
                            <Link to="/register">Create an account</Link>
                        </>
                    )}
                    {error && (
                        <div
                            className="alert alert-danger my-3 d-flex justify-content-between py-0 align-items-center"
                            role="alert"
                        >
                            <span>{error}</span>
                            <span
                                className="fs-3"
                                role="button"
                                onClick={() => setError("")}
                            >
                                &times;
                            </span>
                        </div>
                    )}
                </div>
                <div className="col-12 col-lg-6">
                    <img src={loginImage} alt="Login" className="w-100" />
                </div>
            </div>
        </div>
    );
};

export default Login;
