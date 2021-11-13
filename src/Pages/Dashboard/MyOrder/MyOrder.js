import React from "react";
import deleteFromDB from "../../../utilities/deleteFromDB";

const MyOrder = ({
    order: {
        _id,
        getDelivered,
        status,
        product: { name },
    },
    action: { myOrders, setMyOrders },
}) => {
    // delete order
    const handleDeleteOrder = () => {
        deleteFromDB(_id, myOrders, setMyOrders, "/orders");
    };
    return (
        <tr>
            <td>{name}</td>
            <td>{getDelivered} (YYYY-MM-DD)</td>
            <td>{status}</td>
            <td>
                <button
                    className="btn btn-outline-purple"
                    onClick={handleDeleteOrder}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyOrder;
