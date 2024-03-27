import { useEffect, useState } from "react";
import ListedWishlistBook from "../ListedWishlistBook/ListedWishlistBook";
import { IoIosArrowDown } from "react-icons/io";

const BooksWishlists = () => {

    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        const getWishlistData = JSON.parse(localStorage.getItem("wishlists"));
        setWishlists(getWishlistData);
    }, []);

    // sorting function
    const handelSortByRating = () => {
        let sortWishlists = wishlists.sort((r1, r2) => (r1.rating < r2.rating) ? 1 : (r1.rating > r2.rating) ? -1 : 0);
        setWishlists(sortWishlists);
        setWishlists([...wishlists])
    };
    const handelSortByPage = () => {
        let sortWishlists = wishlists.sort((p1, p2) => (p1.total_page < p2.total_page) ? 1 : (p1.total_page > p2.total_page) ? -1 : 0);
        setWishlists(sortWishlists);
        setWishlists([...wishlists])
    };
    const handelSortByYear = () => {
        let sortWishlists = wishlists.sort((y1, y2) => (y1.year_of_publishing < y2.year_of_publishing) ? 1 : (y1.year_of_publishing > y2.year_of_publishing) ? -1 : 0);
        setWishlists(sortWishlists);
        setWishlists([...wishlists])
    };

    return (
        <div className="flex flex-col">
            <details className="dropdown self-end">
                <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoIosArrowDown /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li><a onClick={handelSortByRating}>Rating</a></li>
                    <li><a onClick={handelSortByPage}>Number of pages</a></li>
                    <li><a onClick={handelSortByYear}>Publisher year</a></li>
                </ul>
            </details>
            <div className="flex flex-col gap-6">
                {
                    wishlists?.map((wishlist, idx) => <ListedWishlistBook
                        key={idx}
                        wishlist={wishlist}
                    ></ListedWishlistBook>)
                }
            </div>
        </div>
    );
};

export default BooksWishlists;