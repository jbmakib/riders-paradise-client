import React from "react";
import { useParams } from "react-router";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";

const BookProduct = () => {
    const { _id } = useParams();

    return (
        <div>
            <Header />
            <div className="container">
                <h2>Book product: {_id}</h2>
            </div>
            <Footer />
        </div>
    );
};

export default BookProduct;
