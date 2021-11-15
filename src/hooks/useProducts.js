import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/products`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error.message));
    }, []);

    return { products, setProducts };
};

export default useProducts;
