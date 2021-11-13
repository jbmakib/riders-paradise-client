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
                        “Travel is the main thing you purchase that makes you
                        more extravagant”. We, at ‘Jadoo Travel’, swear by this
                        and put stock in satisfying travel dreams that make you
                        perpetually rich constantly.
                    </p>
                    <p>
                        We have been moving excellent encounters for a
                        considerable length of time through our cutting-edge
                        planned occasion bundles and other fundamental travel
                        administrations. We rouse our clients to carry on with a
                        rich life, brimming with extraordinary travel
                        encounters.
                    </p>
                </div>
                <div className="col">
                    <img
                        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandtour/demo2/wp-content/uploads/2017/07/pexels-photo-479344.jpeg"
                        alt="story"
                        className="w-100 story-image"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurStory;
