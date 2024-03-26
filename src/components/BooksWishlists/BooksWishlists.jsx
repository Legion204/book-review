import { useEffect, useState } from "react";
import ListedWishlistBook from "../ListedWishlistBook/ListedWishlistBook";

const BooksWishlists = () => {

    const [wishlists, setWishlist] = useState([]);

    useEffect(() => {
        const getWishlistData = JSON.parse(localStorage.getItem("wishlists"));
        setWishlist(getWishlistData);
    }, []);

    return (
        <div className="flex flex-col gap-6">
            {
                wishlists.map((wishlist, idx) => <ListedWishlistBook
                    key={idx}
                    wishlist={wishlist}
                ></ListedWishlistBook>)
            }
        </div>
    );
};

export default BooksWishlists;