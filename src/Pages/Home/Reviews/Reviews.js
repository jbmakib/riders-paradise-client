import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch("/reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data))
            .catch((err) => console.log(err.message));
    }, []);

    return (
        <div className="container my-3" id="reviews">
            <h2 className="text-center">Reviews</h2>
            {reviews.length === 0 ? (
                <div className="text-center">
                    <div
                        className="spinner-border text-purple"
                        role="status"
                    ></div>
                </div>
            ) : (
                <div className="g-4 row row-cols-lg-4 row-cols-md-2 row-cols-1">
                    {reviews.map((review, index) => (
                        <Review key={index} review={review} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Reviews;
