import React from "react";
import bannerImage from "../../../images/banner-image.png";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="container banner">
            <div className="row gx-3 align-items-center">
                <div className="col-12 col-lg-6 bigger-text fw-bold">
                    <h6 className="text-uppercase">Money can't buy</h6>
                    <h1 className="text-purple text-uppercase">Happiness</h1>
                    <h3 className="text-uppercase">
                        but<span className="text-purple">...</span>
                    </h3>
                    <h1 className="banner-focus">
                        Bike <span className="text-purple">Can</span>
                    </h1>
                </div>
                <div className="col-12 col-lg-6">
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
