import React from "react";
import bannerImage from "../../../images/banner-image.png";

const Banner = () => {
    return (
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col"></div>
                <div className="col">
                    <img
                        src={bannerImage}
                        alt="Biker is riding"
                        className="w-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
