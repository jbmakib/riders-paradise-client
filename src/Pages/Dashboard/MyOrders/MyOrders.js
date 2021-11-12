import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import MyOrder from "../MyOrder/MyOrder";

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(
            `https://enigmatic-refuge-60972.herokuapp.com/orders/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setMyOrders(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center">
                All of your orders: {myOrders.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Bike Name</th>
                            <th scope="col">Delivery Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myOrders.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center fw-bold">
                                    No orders yet
                                </td>
                            </tr>
                        ) : (
                            myOrders.map((order) => (
                                <MyOrder
                                    key={order._id}
                                    order={order}
                                    action={{ myOrders, setMyOrders }}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
