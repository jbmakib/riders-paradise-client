import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import Message from "../Message/Message";

const Messages = () => {
    const { user } = useAuth();
    const [allMessages, setAllMessages] = useState([]);

    useEffect(() => {
        fetch(
            `${process.env.REACT_APP_SERVER_URL}/messages/admin/${user.email}`
        )
            .then((res) => res.json())
            .then((data) => setAllMessages(data))
            .catch((err) => console.log(err.message));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="container my-3">
            <h2 className="text-center text-purple">
                All of the messages: {allMessages.length}
            </h2>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">User Name</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Date Send</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMessages.length === 0 ? (
                            <tr>
                                <td colSpan="5" className="text-center fw-bold">
                                    No Messages sent yet
                                </td>
                            </tr>
                        ) : (
                            allMessages.map((message) => (
                                <Message key={message._id} message={message} />
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Messages;
