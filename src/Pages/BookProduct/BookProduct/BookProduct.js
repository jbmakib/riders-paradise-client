import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const BookProduct = () => {
    const [product, setProduct] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => {});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            <Header />
            {product._id ? (
                <div className="container">
                    <h2>Book product: {product.name}</h2>
                </div>
            ) : (
                <div className="text-center">
                    <div
                        className="spinner-border text-purple"
                        role="status"
                    ></div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default BookProduct;
