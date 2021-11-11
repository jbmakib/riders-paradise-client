import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardMain from "../DashboardMain/DashboardMain";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="dashboard">
            <DashboardNav url={url} />
            <div className="b-example-divider"></div>
            <div className="p-3 w-100">
                <Switch>
                    <Route exact path={path}>
                        <DashboardMain />
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>

                    {/* admin routes */}
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <Route path={`${path}/*`}>
                        <DashboardMain />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;
