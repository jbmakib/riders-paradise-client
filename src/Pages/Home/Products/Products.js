import React, { useState, useEffect } from "react";
import Product from "../../Shared/Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(0, 6)));
    }, []);
    return (
        <div className="container">
            <h2>This is products {products.length}</h2>
            {products.length === 0 ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-primary"
                        role="status"
                    ></div>
                </div>
            ) : (
                <div className="g-4 row row-cols-lg-3 row-cols-md-2 row-cols-1">
                    {products.map((product, index) => (
                        <Product key={index} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
