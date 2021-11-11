import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardMain from "../DashboardMain/DashboardMain";

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="dashboard">
            <DashboardNav url={url} />
            <div className="b-example-divider"></div>
            <Switch>
                <Route exact path={path}>
                    <DashboardMain />
                </Route>
                <AdminRoute path={`${path}/makeAdmin`}></AdminRoute>
                <Route path={`${path}/*`}>
                    <DashboardMain />
                </Route>
            </Switch>
        </div>
    );
};

export default Dashboard;
