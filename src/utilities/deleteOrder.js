// deleteOrder function deletes the order from database
const deleteOrder = (id, state, setState) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert("deleted successfully");
                    const remainingOrders = state.filter(
                        (order) => order._id !== id
                    );
                    setState(remainingOrders);
                }
            });
    }
};

export default deleteOrder;
