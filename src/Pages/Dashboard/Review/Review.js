import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";

const Review = () => {
    const [star, setStar] = useState(0);
    const firstExample = {
        size: 30,
        value: 2.5,
        edit: false,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
    };

    const secondExample = {
        size: 40,
        count: 5,
        color: "black",
        activeColor: "#ffd700",
        value: 2,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setStar(newValue);
        },
    };

    console.log(star);
    return (
        <div>
            <h2>This is review page</h2>
            <ReactStars {...firstExample} />
            <ReactStars {...secondExample} />
        </div>
    );
};

export default Review;
