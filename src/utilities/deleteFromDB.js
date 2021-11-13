// deleteFromDB function deletes the item from database
const deleteFromDB = (id, state, setState, url) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
        fetch(`https://enigmatic-refuge-60972.herokuapp.com${url}/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    alert("deleted successfully");
                    const remainingItems = state.filter(
                        (item) => item._id !== id
                    );
                    setState(remainingItems);
                }
            })
            .catch((err) => console.log(err.message));
    }
};

export default deleteFromDB;
