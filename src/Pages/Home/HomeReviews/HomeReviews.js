import React, { useEffect, useState } from "react";
import HomeReview from "../HomeReview/HomeReview";

const HomeReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/reviews`)
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
                    {reviews.map((review) => (
                        <HomeReview key={review._id} review={review} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomeReviews;
