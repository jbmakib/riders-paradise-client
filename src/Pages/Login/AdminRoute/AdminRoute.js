import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from "./../../../hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
    const { user, isAdmin, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
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
