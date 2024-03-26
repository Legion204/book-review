import { MdOutlineContactPage } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi";
import PropTypes from 'prop-types';

const ListedWishlistBook = ({wishlist}) => {

    const{book_name,author,publisher,total_page,category,rating,book_image}=wishlist;

    return (
        <div className="flex flex-col py-6 sm:flex-row sm:justify-between border-2 rounded-2xl p-6">
            <div className="flex items-center w-full space-x-2 sm:space-x-4">
                <img className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500" src={book_image} alt="Polaroid camera" />
                <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-3">
                            <h1 className="text-4xl font-bold playfairDisplay">{book_name}</h1>
                            <p className='font-medium workSans my-4 text-[#131313CC]'>By: {author}</p>
                            <div className="flex gap-4">
                                <h4 className="text-[#131313B2]"><div className="flex gap-2 items-center"><HiOutlineUsers /><p>Publisher: {publisher}</p></div></h4>
                                <h4 className="text-[#131313B2]"><div className="flex gap-2 items-center"><MdOutlineContactPage /><p>Number of Pages: {total_page}</p></div></h4>
                            </div>
                            <hr className='border-t-2 border line' />
                            <div className="flex gap-3">
                                <p className="badge text-[#328EFF] bg-[#328EFF26] p-4">Category: {category}</p>
                                <p className="badge text-[#FFAC33] bg-[#FFAC3326] p-4">Rating: {rating}</p>
                                <button className="badge border-[#23BE0A] text-[#23BE0A] hover:text-[white] hover:bg-[#23BE0A] p-4">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ListedWishlistBook.propTypes={
    wishlist:PropTypes.object
}

export default ListedWishlistBook;