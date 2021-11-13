import React from "react";
import useProducts from "../../../hooks/useProducts";
import ManageProduct from "../ManageProduct/ManageProduct";

const ManageProducts = () => {
    const { products, setProducts } = useProducts();

    return (
        <div className="container my-3">
            <h2 className="text-center">
                All of the products: {products.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Id</th>
                            <th scope="col">Bike Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan="4" className="text-center fw-bold">
                                    No orders yet
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <ManageProduct
                                    key={product._id}
                                    product={product}
                                    action={{ products, setProducts }}
                                />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;
