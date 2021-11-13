import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AllOrdersChild from "../AllOrdersChild/AllOrdersChild";

const AllOrders = () => {
    const { user } = useAuth();
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://enigmatic-refuge-60972.herokuapp.com/orders/admin/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setAllOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center text-purple">
                All of the orders: {allOrders.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">Bike Name</th>
                            <th scope="col">Date Issued</th>
                            <th scope="col">Delivery Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Update Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allOrders.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center fw-bold">
                                    No orders yet
                                </td>
                            </tr>
                        ) : (
                            allOrders.map((order) => (
                                <AllOrdersChild
                                    key={order._id}
                                    order={order}
                                    action={{ allOrders, setAllOrders }}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllOrders;
