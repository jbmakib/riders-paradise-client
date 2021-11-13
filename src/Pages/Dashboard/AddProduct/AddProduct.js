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
        console.log(product);

        // send data to server
        // axios
        //     .post("http://localhost:5000/messages", userMessage)
        //     .then((res) => {
        //         if (res.data.insertedId) {
        //             alert("Message sent successfully");
        //             reset();
        //         }
        //     })
        //     .catch((err) => console.log(err.message));
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
                {/* <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control"
                        id="floatingOwnerShipSerial"
                        placeholder="ownerShipSerial"
                        required
                        {...register("ownerShipSerial", {
                            required: true,
                        })}
                    />
                    <label htmlFor="floatingOwnerShipSerial">
                        Ownership Serial
                    </label>
                </div> */}
                <div className="form-floating mb-3">
                    <input
                        type="number"
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
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
