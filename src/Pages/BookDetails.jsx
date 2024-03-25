import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { id } = useParams()
    const books = useLoaderData();

    const bookData = books.find(book => book.book_id == id);
    const { book_name, book_image, tags, category, author, rating, review, total_page, year_of_publishing, publisher } = bookData;
    return (
        <div className="flex flex-col gap-6 overflow-hidden rounded-md shadow-sm lg:flex-row mt-14 m-12">
            <img src={book_image} alt="" className=" w-[570px] dark:bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h1 className="text-4xl font-bold playfairDisplay">{book_name}</h1>
                <p className='font-medium workSans my-4 text-[#131313CC]'>By: {author}</p>
                <hr className='border-t-2 border line' />
                <p className='my-4 font-medium text-[#131313CC]'>{category}</p>
                <hr className='border-t-2 border line' />
                <p className="my-6 dark:text-gray-600 text-[#131313B2] font-normal"><span className="text-[#131313] font-bold">Review:</span> {review}</p>
                <div className='flex gap-2 font-medium items-center text-[#23BE0A] workSans my-4'>
                    <p className="text-[#131313] font-bold">Tags:</p>
                    {
                        tags.map((tag, idx) => <p
                            className='bg-[#23BE0A0D] rounded-3xl text-center px-4 py-2'
                            key={idx}
                        >{tag}</p>)
                    }
                </div>
                <hr className='border-t-2 border line' />
                <div className="flex flex-col gap-4 my-6">
                    <h4 className="text-[#131313B2]">Number of Pages: <span className="font-semibold text-[#131313]">{total_page}</span></h4>
                    <h4 className="text-[#131313B2]">Publisher: <span className="font-semibold text-[#131313]">{publisher}</span></h4>
                    <h4 className="text-[#131313B2]">Year of Publishing: <span className="font-semibold text-[#131313]">{year_of_publishing}</span></h4>
                    <h4 className="text-[#131313B2]">Rating: <span className="font-semibold text-[#131313]">{rating}</span></h4>
                </div>
                <div>
                    <button className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-semibold border-[#50B1C9] text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#50B1C9] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#50B1C9] transition duration-300 group-hover:text-white ease">Read</span>
                    </button>
                    <button className="rounded-md px-5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-semibold border-[#50B1C9] text-white">
                        <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#50B1C9] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                        <span className="relative text-[#50B1C9] transition duration-300 group-hover:text-white ease">Wishlist</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;