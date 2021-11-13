import React from "react";
import ReactStars from "react-rating-stars-component";

const HomeReview = ({
    review: { name, title, description, designation, company, email, ratings },
}) => {
    const reactStartsInfo = {
        value: ratings,
        edit: false,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };

    return (
        <div className="col">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <div className="d-flex my-2">
                        <ReactStars {...reactStartsInfo} />
                        <span className="ps-1">({ratings})</span>
                    </div>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer py-3">
                    <h6 className="card-subtitle mb-2">{name}</h6>
                    <small className="d-block">
                        {designation} at {company}
                    </small>
                    <small className="d-block">{email}</small>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;
