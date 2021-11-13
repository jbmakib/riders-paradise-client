import React from "react";
import "./OurStory.css";

const OurStory = () => {
    return (
        <div className="container my-3 my-md-0" id="about-us">
            <div className="row row-cols-1 row-cols-md-2 align-items-center">
                <div className="col">
                    <h2>This is our story</h2>
                    <p className="text-muted text-uppercase">
                        Inspired By Passionate Bikers
                    </p>
                    <p>
                        "RIDERS PARADISE" is a next-gen e-commerce platform
                        revolutionizing the way India buys and sells pre-owned
                        bikes. We take great pride in providing the best
                        experience to all parties involved - with sellers
                        getting the best value for their bikes and buyers
                        getting to choose from a wide assortment of
                        two-wheelers.
                    </p>
                    <p>
                        "RIDERS PARADISE" brings you one of its kind pre-owned
                        bike buying experience - Take a 7 Day Trial of our
                        bikes; if you don't like it, return it and get a 100%
                        refund. Plus all our bikes are refurbished by experts to
                        offer you a ride as good as new and also, comes with a
                        free 1-year comprehensive warranty
                    </p>
                </div>
                <div className="col">
                    <img
                        src="https://www.bikes24.com/bikes/static/assets/thumbnail3.093455ee.jpg"
                        alt="story"
                        className="w-100 story-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurStory;
