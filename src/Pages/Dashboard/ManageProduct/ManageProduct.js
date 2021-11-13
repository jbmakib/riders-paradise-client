import React from "react";
import deleteFromDB from "../../../utilities/deleteFromDB";

const ManageProduct = ({
    product: { _id, name },
    action: { products, setProducts },
}) => {
    // delete order
    const handleDeleteOrder = () => {
        deleteFromDB(_id, products, setProducts, "/products");
    };

    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
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

export default ManageProduct;
