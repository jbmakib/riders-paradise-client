import React from "react";
import Header from "../../Shared/Header/Header";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardNav />
            <div className="b-example-divider"></div>
            <div className="p-3">
                <h2>Akib</h2>
            </div>
        </div>
    );
};

export default Dashboard;
