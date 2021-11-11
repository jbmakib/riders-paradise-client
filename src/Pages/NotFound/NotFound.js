import React from "react";
import { Link } from "react-router-dom";

// we can see this component when no route found
const NotFound = () => {
    return (
        <div className="container my-lg-5 py-lg-5 my-md-5 py-md-5 my-1 py-1 text-center">
            <div className="my-5 py-5">
                <h1>404</h1>
                <h4>Page Not Found</h4>
                <p>
                    Looks like you are lost in space. But you were visiting the
                    site 😞
                </p>
                <Link to="/">&#8592; Back To Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
