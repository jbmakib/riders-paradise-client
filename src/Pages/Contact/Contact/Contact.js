import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import ContactAction from "../ContactAction/ContactAction";

const Contact = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const sendDate = new Date().toISOString().split("T")[0];
        const userMessage = data;
        userMessage.sendDate = sendDate;

        // send data to server
        axios
            .post(
                "https://enigmatic-refuge-60972.herokuapp.com/messages",
                userMessage
            )
            .then((res) => {
                if (res.data.insertedId) {
                    alert("Message sent successfully");
                    reset();
                }
            })
            .catch((err) => console.log(err.message));
    };
    return (
        <div>
            <Header />
            <div className="pb-5 container">
                <h1 className="fw-bold text-center mt-3 mb-5">
                    Contact<span className="text-purple"> Us</span>
                </h1>
                <div className="g-4 row row-cols-lg-2 row-cols-1">
                    <div className="col">
                        <h5 className="fw-bold">Get in touch</h5>
                        <p>
                            Have a question? Concern? Request? We’d love to hear
                            from you. Connect with us through the following
                            ways.
                        </p>
                        <ContactAction icon="fa-headset" title="Support 24/7">
                            <a
                                href="tel:+8801322810867"
                                className="text-decoration-none my-1"
                            >
                                <span>01812773691</span>
                            </a>
                        </ContactAction>
                        <ContactAction
                            icon="fa-map-marker-alt"
                            title="Location"
                        >
                            <a
                                href="https://goo.gl/maps/wj4uBTA79oUoSnHR8"
                                target="_blank"
                                className="text-decoration-none my-1"
                                rel="noreferrer"
                            >
                                <span>CTG, Bangladesh</span>
                            </a>
                        </ContactAction>
                        <ContactAction icon="fa-envelope" title="Email">
                            <a
                                href="mailto:jbmakib@gmail.com"
                                className="text-decoration-none my-1"
                            >
                                <span>jbmakib@gmail.com</span>
                            </a>
                        </ContactAction>
                    </div>
                    <div className="col">
                        <h5 className="fw-bold">Message Us</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="my-2 row row-cols-md-2 row-cols-1">
                                <div className="form-floating col">
                                    <input
                                        type="text"
                                        className="form-control mb-3 mb-md-0"
                                        id="floatingName"
                                        placeholder="Full Name"
                                        required
                                        defaultValue={user.displayName}
                                        readOnly
                                        {...register("name", {
                                            required: true,
                                        })}
                                    />
                                    <label
                                        htmlFor="floatingName"
                                        className="ps-4"
                                    >
                                        Full Name
                                    </label>
                                </div>
                                <div className="form-floating col">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="floatingEmail"
                                        placeholder="name@example.com"
                                        required
                                        defaultValue={user.email}
                                        readOnly
                                        {...register("email", {
                                            required: true,
                                        })}
                                    />
                                    <label
                                        htmlFor="floatingEmail"
                                        className="ps-4"
                                    >
                                        Email
                                    </label>
                                </div>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingSub"
                                    placeholder="Subject"
                                    required
                                    {...register("subject", { required: true })}
                                />
                                <label htmlFor="floatingSub">Subject</label>
                            </div>
                            <div className="form-floating my-3">
                                <textarea
                                    className="form-control"
                                    placeholder="Leave a comment here"
                                    id="floatingTextarea2"
                                    required
                                    style={{ height: "140px" }}
                                    {...register("message", { required: true })}
                                ></textarea>
                                <label htmlFor="floatingTextarea2">
                                    Message...
                                </label>
                            </div>
                            <button
                                className="btn btn-purple py-2 px-4"
                                type="submit"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
