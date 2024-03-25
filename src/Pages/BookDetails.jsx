import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {

    const { id } = useParams()
    const books = useLoaderData();

    const bookData = books.find(book => book.book_id == id);
    const { book_name, book_image, tags, category, author, rating, } = bookData;
    return (
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
            <img src={book_image} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                <h1 className="text-4xl font-bold playfairDisplay">{book_name}</h1>
                <p className='font-medium workSans my-4 text-[#131313CC]'>By: {author}</p>
                <hr className='border-t-2 border line' />
                <p className='my-4 font-medium text-[#131313CC]'>{category}</p>
                <p className="my-6 dark:text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                <button type="button" className="self-start">Action</button>
            </div>
        </div>
    );
};

export default BookDetails;