import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://enigmatic-refuge-60972.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((error) => console.log(error.message));
    }, []);

    return { products, setProducts };
};

export default useProducts;
