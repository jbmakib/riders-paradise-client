import React from "react";
import useProducts from "../../../hooks/useProducts";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Product from "../../Shared/Product/Product";

const Explore = () => {
    const { products } = useProducts();

    return (
        <div>
            <Header />
            <div className="container my-3">
                <h2 className="text-center">Explore Our Products</h2>
                {products.length === 0 ? (
                    <div className="text-center">
                        <div
                            className="spinner-border text-purple"
                            role="status"
                        ></div>
                    </div>
                ) : (
                    <div className="g-4 row row-cols-lg-3 row-cols-md-2 row-cols-1">
                        {products.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Explore;
