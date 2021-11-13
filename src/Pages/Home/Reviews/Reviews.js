import React, { useEffect, useState } from "react";

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
            <h2 className="text-center">Reviews {reviews.length}</h2>
        </div>
    );
};

export default Reviews;
