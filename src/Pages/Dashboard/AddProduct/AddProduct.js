import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const product = data;
        product.kilometers = parseInt(product.kilometers);
        product.price = parseFloat(product.price);
        product.ratings.rate = parseFloat(product.ratings.rate);
        product.ratings.raters = parseInt(product.ratings.raters);
        product.year = parseInt(product.year);
        product.ownerShipSerial = product.ownerShipSerial || "1st";

        // send data to server
        axios
            .post(`${process.env.REACT_APP_SERVER_URL}/products`, product)
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Product added successfully");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div className="container">
            <h2 className="text-center text-purple">Add a product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingName"
                        placeholder="Product Name"
                        required
                        {...register("name", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingName">Product Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingBrand"
                        placeholder="Brand"
                        required
                        {...register("brand", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingBrand">Brand</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingKilos"
                        placeholder="KiloMeters"
                        required
                        {...register("kilometers", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingKilos">Kilometers</label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        {...register("ownerShipSerial")}
                        className="form-check-input"
                        type="radio"
                        id="1stOwner"
                        value="1st"
                        name="ownerShipSerial"
                    />
                    <label className="form-check-label" htmlFor="1stOwner">
                        First
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        {...register("ownerShipSerial")}
                        className="form-check-input"
                        type="radio"
                        id="2ndOwner"
                        value="2nd"
                        name="ownerShipSerial"
                    />
                    <label className="form-check-label" htmlFor="2ndOwner">
                        Second
                    </label>
                </div>
                <div className="form-check form-check-inline">
                    <input
                        {...register("ownerShipSerial")}
                        className="form-check-input"
                        type="radio"
                        id="3rdOrMore"
                        value=">=3rd"
                        name="ownerShipSerial"
                    />
                    <label className="form-check-label" htmlFor="3rdOrMore">
                        Third or more
                    </label>
                </div>{" "}
                <small className="text-muted">Default is set to (1st)</small>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="floatingPrice"
                        placeholder="price"
                        required
                        {...register("price", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingPrice">Price</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="url"
                        className="form-control"
                        id="floatingImg"
                        placeholder="img"
                        required
                        {...register("img", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingImg">Image Url</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        step="0.01"
                        className="form-control"
                        id="floatingRatings"
                        placeholder="Ratings"
                        {...register("ratings.rate", {
                            required: true,
                            min: 0,
                            max: 5,
                        })}
                    />
                    <label htmlFor="floatingRatings">Ratings</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingTotalRaters"
                        placeholder="Total Raters"
                        {...register("ratings.raters", { required: true })}
                    />
                    <label htmlFor="floatingTotalRaters">Total Raters</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="number"
                        className="form-control"
                        id="floatingPublishYear"
                        placeholder="Publish Year"
                        required
                        {...register("year", { required: true })}
                    />
                    <label htmlFor="floatingPublishYear">Publish Year</label>
                </div>
                <button className="btn btn-purple py-2 px-4" type="submit">
                    Add The Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
