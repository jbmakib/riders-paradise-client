import React from "react";

const MyOrder = ({
    order: {
        _id,
        getDelivered,
        status,
        product: { name },
    },
    action: { myOrders, setMyOrders },
}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{getDelivered} (YYYY-MM-DD)</td>
            <td>{status}</td>
            <td>
                <button
                    className="btn btn-outline-purple"
                    // onClick={handleDeleteOrder}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default MyOrder;
