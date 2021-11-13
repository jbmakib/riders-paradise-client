import React from "react";
import DashboardNav from "../DashboardNav/DashboardNav";
import "./Dashboard.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardMain from "../DashboardMain/DashboardMain";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import MyOrders from "../MyOrders/MyOrders";
import AllOrders from "../AllOrders/AllOrders";
import Messages from "../Messages/Messages";
import AddProduct from "../AddProduct/AddProduct";

const Dashboard = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="dashboard">
            <DashboardNav url={url} />
            <div className="b-example-divider"></div>
            <div className="p-3 w-100 overflow-auto">
                <Switch>
                    <Route exact path={path}>
                        <DashboardMain />
                    </Route>

                    {/* user + admin routes */}
                    <Route path={`${path}/pay`}>
                        <Pay />
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review />
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders />
                    </Route>

                    {/* admin routes */}
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <AllOrders />
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                    <AdminRoute path={`${path}/messages`}>
                        <Messages />
                    </AdminRoute>

                    {/* default route */}
                    <Route path={`${path}/*`}>
                        <DashboardMain />
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;
