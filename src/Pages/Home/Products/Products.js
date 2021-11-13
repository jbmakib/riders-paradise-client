import React from "react";
import useProducts from "../../../hooks/useProducts";
import Product from "../../Shared/Product/Product";

const Products = () => {
    const { products } = useProducts();

    return (
        <div className="container my-3" id="products">
            <h2 className="text-center">Our Best Products</h2>
            {products.length === 0 ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-purple"
                        role="status"
                    ></div>
                </div>
            ) : (
                <div className="g-4 row row-cols-lg-3 row-cols-md-2 row-cols-1">
                    {products.slice(0, 6).map((product) => (
                        <Product key={product._id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
