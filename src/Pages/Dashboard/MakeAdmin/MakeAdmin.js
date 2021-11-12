import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const { user } = useAuth();

    const handleMakeAdmin = (e) => {
        setError("");
        setSuccess(false);
        e.preventDefault();
        axios
            .put("https://enigmatic-refuge-60972.herokuapp.com/users/admin", {
                userEmail,
                adminEmail: user.email,
            })
            .then((res) => {
                if (res.data.modifiedCount) {
                    setSuccess(true);
                } else {
                    setError(
                        "Error: make sure this mail have an account or this mail is already an admin"
                    );
                }
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <div className="text-center py-3">
            <h2 className="text-purple">Make a user an admin</h2>
            <form
                className="row g-3 w-75 mx-auto align-items-center"
                onSubmit={handleMakeAdmin}
            >
                <div className="col-12 col-md-4">
                    <label htmlFor="makeAdminEmail">Enter user email: </label>
                </div>
                <div className="col-12 col-md-4">
                    <input
                        type="email"
                        required
                        className="form-control"
                        id="makeAdminEmail"
                        placeholder="Email"
                        onInput={(e) => setUserEmail(e.target.value)}
                    />
                </div>
                <div className="col-12 col-md-4">
                    <button type="submit" className="btn btn-purple">
                        Make admin
                    </button>
                </div>
            </form>
            {success && (
                <div
                    className="alert alert-success my-3 d-flex justify-content-between py-0 align-items-center w-75 mx-auto"
                    role="alert"
                >
                    <span>User role promoted to admin</span>
                    <span
                        className="fs-3"
                        role="button"
                        onClick={() => setSuccess(false)}
                    >
                        &times;
                    </span>
                </div>
            )}
            {error && (
                <div
                    className="alert alert-danger my-3 d-flex justify-content-between py-0 align-items-center w-75 mx-auto"
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
    );
};

export default MakeAdmin;
