import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";
import useAuth from "../../../hooks/useAuth";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const [star, setStar] = useState(4.5);
    const { user } = useAuth();

    const reactStarInfo = {
        size: 20,
        count: 5,
        color: "black",
        activeColor: "#ffd700",
        value: star,
        a11y: true,
        isHalf: true,
        emptyIcon: <i className="far fa-star" />,
        halfIcon: <i className="fa fa-star-half-alt" />,
        filledIcon: <i className="fa fa-star" />,
        onChange: (newValue) => {
            setStar(newValue);
        },
    };

    const onSubmit = (data) => {
        const review = data;
        review.name = user.displayName;
        review.email = user.email;
        review.ratings = star;
        console.log(review);

        axios
            .post("http://localhost:5000/reviews", review)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Review added successfully\nCheck Home");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div>
            <h2 className="text-center text-purple">Give a review page</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingCompany"
                        placeholder="Company"
                        required
                        {...register("company", { required: true })}
                    />
                    <label htmlFor="floatingCompany">Company</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingDesignation"
                        placeholder="Designation"
                        required
                        {...register("designation", { required: true })}
                    />
                    <label htmlFor="floatingDesignation">Designation</label>
                </div>
                <div className="my-3 ps-2">
                    <span>Give a ratings</span>
                    <ReactStars {...reactStarInfo} />
                </div>
                <div className="form-floating mb-3">
                    <input
                        className="form-control"
                        id="floatingRevTitle"
                        placeholder="Review title"
                        required
                        {...register("title", { required: true })}
                    />
                    <label htmlFor="floatingRevTitle">Review title</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        id="floatingDescription"
                        placeholder="Description"
                        required
                        style={{ height: "80px" }}
                        {...register("description", { required: true })}
                    ></textarea>
                    <label htmlFor="floatingDescription">Description...</label>
                </div>
                <button className="btn btn-purple py-2 px-4" type="submit">
                    Add Review
                </button>
            </form>
        </div>
    );
};

export default Review;
