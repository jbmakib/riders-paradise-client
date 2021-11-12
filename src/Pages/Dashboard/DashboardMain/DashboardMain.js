import React from "react";
import useAuth from "../../../hooks/useAuth";

const DashboardMain = () => {
    const { user, isAdmin } = useAuth();
    return (
        <div className="text-center my-5 py-5">
            <div className="my-5 py-5">
                <h1>Dashboard</h1>
                <h3>
                    Welcome{" "}
                    <span className="text-purple">{user.displayName}</span>
                </h3>
                <h4>Your role is: {isAdmin ? "admin" : "user"}</h4>
            </div>
        </div>
    );
};

export default DashboardMain;
