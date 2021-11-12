import React from "react";
import { Route, Redirect, Link } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-purple" role="status"></div>
            </div>
        );
    }
    if (!isAdmin) {
        return (
            <div className="text-center">
                <h2>You don't have any access to visit admin panel</h2>
                <Link to="/dashboard">&#8592; Visit your dashboard</Link>
            </div>
        );
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && isAdmin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;
