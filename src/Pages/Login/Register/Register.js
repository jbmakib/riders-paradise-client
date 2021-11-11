import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import registerImage from "../../../images/login-image.png";

const Register = () => {
    const [registerInfo, setRegisterInfo] = useState({});

    const history = useHistory();

    const { registerUser, error, setError } = useAuth();

    const handleOnInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterInfo = { ...registerInfo };
        newRegisterInfo[field] = value;
        setRegisterInfo(newRegisterInfo);
    };

    const handleRegisterForm = (e) => {
        setError("");
        e.preventDefault();
        if (registerInfo.password !== registerInfo.password2) {
            setError("Re-typed password not matched");
            return;
        }
        registerUser(
            registerInfo.email,
            registerInfo.password,
            registerInfo.displayName,
            history
        );
    };
    return (
        <div className="container">
            <div className="row gx-3 align-items-center">
                <div className="col-12 col-lg-6 text-center">
                    <h1 className="text-primary">Register</h1>
                    <form
                        className="w-75 mx-auto"
                        onSubmit={handleRegisterForm}
                    >
                        <div className="form-floating mb-3">
                            <input
                                required
                                className="form-control"
                                id="floatingName"
                                placeholder="Your Full Name"
                                name="displayName"
                                onInput={handleOnInput}
                            />
                            <label htmlFor="floatingName">Full Name</label>
                        </div>
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
                        <div className="form-floating mb-3">
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
                        <div className="form-floating">
                            <input
                                type="password"
                                required
                                className="form-control"
                                id="floatingPassword2"
                                placeholder="Re-Type Password"
                                name="password2"
                                onInput={handleOnInput}
                            />
                            <label htmlFor="floatingPassword2">
                                Re-Type Password
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary my-3">
                            Register
                        </button>
                    </form>
                    Have an account? <Link to="/login">Login Now</Link>
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
                    <img
                        src={registerImage}
                        alt="Register"
                        className="w-100 my-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default Register;
