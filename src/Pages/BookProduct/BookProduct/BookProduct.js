import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const BookProduct = () => {
    const [error, setError] = useState("");
    const [product, setProduct] = useState({});
    const { _id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const issued = new Date().toISOString().split("T")[0];
        const order = data;
        order.price = parseFloat(order.price);
        order.status = "Pending";
        order.product = product;
        order.dateIssued = issued;

        // send data to server
        axios
            .post("https://enigmatic-refuge-60972.herokuapp.com/orders", order)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("order added successfully\nWait for approve");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };

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
                <h2>
                    Book product:{" "}
                    <span className="text-purple">{product.name}</span>
                </h2>
                <img src={product.img} className="img-fluid" alt="Product" />
                <h5>
                    Brand: <span className="fw-bold">{product.brand}</span>
                </h5>
                <p>Can Run: {product.kilometers} kilometers</p>
                <p>First Release: {product.year}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="w-50">
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            id="floatingFullName"
                            placeholder="Full Name"
                            {...register("name", { required: true })}
                            value={user.displayName}
                            readOnly
                        />
                        <label htmlFor="floatingFullName">Full Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="floatingYourEmail"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                            value={user.email}
                            readOnly
                        />
                        <label htmlFor="floatingYourEmail">Your Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            className="form-control"
                            id="floatingCreditCardNo"
                            placeholder="Credit card no."
                            {...register("visaCardNo", { required: true })}
                        />
                        <label htmlFor="floatingCreditCardNo">
                            Credit card no.
                        </label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="floatingHaveToPay"
                            placeholder="Have to pay"
                            {...register("price", { required: true })}
                            value={product.price}
                            readOnly
                        />
                        <label htmlFor="floatingHaveToPay">Have to pay</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="floatingSelectTimeForDelivery"
                            placeholder="Select time for delivery"
                            {...register("getDelivered", { required: true })}
                        />
                        <label htmlFor="floatingSelectTimeForDelivery">
                            Select time for delivery
                        </label>
                    </div>
                    <input className="btn btn-outline-purple" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default BookProduct;
