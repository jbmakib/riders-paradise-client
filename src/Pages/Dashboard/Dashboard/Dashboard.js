import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="dashboard">
            <DashboardNav url={url} />
            <div className="b-example-divider"></div>
            <Switch>
                <Route exact path={path}>
                    <div className="p-3">
                        <h2>Eta Dashboard</h2>
                    </div>
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}></AdminRoute>
            </Switch>
        </div>
    );
};

export default Dashboard;
