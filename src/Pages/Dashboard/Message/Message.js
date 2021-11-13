import React from "react";

const Message = ({ message: { name, email, sendDate, subject, message } }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{sendDate} (YYYY-MM-DD)</td>
            <td>{subject}</td>
            <td>{message}</td>
        </tr>
    );
};

export default Message;
