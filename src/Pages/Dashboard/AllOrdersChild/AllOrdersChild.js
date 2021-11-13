import axios from "axios";
import React from "react";
import deleteFromDB from "../../../utilities/deleteFromDB";

const AllOrdersChild = ({
    action: { allOrders, setAllOrders },
    order: {
        _id,
        name,
        getDelivered,
        dateIssued,
        status,
        phoneNumber,
        product: { name: productName },
    },
}) => {
    // change status
    const handleChange = (e) => {
        const status = e.target.value;
        axios
            .put(`http://localhost:5000/orders/${_id}`, { status })
            .then((res) => {
                if (res.data.result.modifiedCount) {
                    alert("Status updated successfully\nUpdating UI");
                    setAllOrders(res.data.orders);
                }
            })
            .catch((err) => console.log(err.message));
    };

    // delete order
    const handleDeleteOrder = () => {
        deleteFromDB(_id, allOrders, setAllOrders, "/orders");
    };

    return (
        <tr>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{phoneNumber}</td>
            <td>{dateIssued}</td>
            <td>{getDelivered}</td>
            <td>{status}</td>
            <td>
                <select defaultValue={status} onChange={handleChange}>
                    <option value="Decline">Decline</option>
                    <option value="Pending">Pending</option>
                    <option value="Shipped">Shipped</option>
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
