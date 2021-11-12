import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({
    product: {
        _id,
        name,
        img,
        price,
        ownerShipSerial,
        kilometers,
        ratings,
        brand,
        year,
    },
}) => {
    const reactStartsInfo = {
        value: ratings.rate,
        edit: false,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };

    return (
        <div className="col">
            <div className="h-100 rounded-4 overflow-hidden card">
                <img
                    className="card-img-top border-bottom border-4 border-purple"
                    src={img}
                    alt={name}
                />
                <div className="card-body">
                    <div className="fw-bold border-bottom pb-3 border-3 card-border d-flex justify-content-between">
                        <div className="text-muted d-flex">
                            <ReactStars {...reactStartsInfo} />
                            <span className="ps-1">
                                {ratings?.rate} ({ratings?.raters})
                            </span>
                        </div>
                        <div>
                            <i className="fas fa-tachometer-alt text-purple"></i>
                            <span className="text-muted ps-1">
                                {kilometers} km
                            </span>
                        </div>
                    </div>
                    <div className="pt-3 fw-bold card-title h5">{name}</div>
                    <div className="d-flex justify-content-between align-items-center my-2">
                        <p className="m-0 text-secondary">
                            Brand: <b>{brand}</b>
                        </p>
                        <p className="m-0">
                            <i className="fas fa-clock text-purple"></i> {year}
                        </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="m-0 text-secondary">
                            {ownerShipSerial} Ownership
                        </small>
                        <p className="h5 m-0 text-purple">${price}</p>
                    </div>
                    <Link to={`/book-product/${_id}`}>
                        <button className="rounded-pill px-3 py-1 mt-2 btn-outline-purple btn">
                            Book
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;
