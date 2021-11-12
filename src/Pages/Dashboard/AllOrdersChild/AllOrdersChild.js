import React from "react";
import deleteOrder from "../../../utilities/deleteOrder";

const AllOrdersChild = ({
    action: { allOrders, setAllOrders },
    order: {
        _id,
        name,
        getDelivered,
        dateIssued,
        status,
        product: { name: productName },
    },
}) => {
    // delete order
    const handleDeleteOrder = () => {
        deleteOrder(_id, allOrders, setAllOrders);
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{dateIssued}</td>
            <td>{getDelivered}</td>
            <td>{status}</td>
            <td>
                <select defaultValue={status} /* onChange={handleChange} */>
                    <option value="Decline">Decline</option>
                    <option value="Pending">Pending</option>
                    <option value="Approve">Approve</option>
                </select>
            </td>
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

export default AllOrdersChild;
