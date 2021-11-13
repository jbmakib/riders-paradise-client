import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import HomeReviews from "../HomeReviews/HomeReviews";

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Products />
            <HomeReviews />
            <Footer />
        </div>
    );
};

export default Home;
