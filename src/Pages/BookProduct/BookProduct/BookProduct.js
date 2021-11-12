import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const BookProduct = () => {
    const [error, setError] = useState("");
    const [product, setProduct] = useState({});
    const { _id } = useParams();

    useEffect(() => {
        fetch(`https://enigmatic-refuge-60972.herokuapp.com/products/${_id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => setError("Invalid request to server"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!product._id) {
        return (
            <div>
                <Header />
                {error ? (
                    <>
                        <div className="h4 text-center my-5 fw-bold text-purple">
                            {error}
                        </div>
                        <Link to="/">
                            <div className="text-center">
                                &#8592; Back to home
                            </div>
                        </Link>
                    </>
                ) : (
                    <div className="text-center my-5">
                        <div
                            className="spinner-border text-purple"
                            role="status"
                        ></div>
                    </div>
                )}
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <div className="container my-3">
                <h2>Book product: {product.name}</h2>
                <img src={product.img} className="img-fluid" alt="Product" />
                <h5>
                    Brand: <span className="fw-bold">{product.brand}</span>
                </h5>
            </div>
            <Footer />
        </div>
    );
};

export default BookProduct;
