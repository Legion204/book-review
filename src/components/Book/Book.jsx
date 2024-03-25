import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { book_name, book_image, tags, category, author, rating, book_id } = book;
    return (
        <Link to={`/book/${book_id}`}>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-6 pt-6">
                    <img src={book_image} alt="Shoes" className="rounded-xl w-[326px] h-[230px]" />
                </figure>
                <div className="card-body items-start gap-4">
                    <div className='flex gap-2 font-medium text-[#23BE0A] workSans'>
                        {
                            tags.map((tag, idx) => <p
                                className='bg-[#23BE0A0D] rounded-3xl text-center px-4 py-2'
                                key={idx}
                            >{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title font-bold text-2xl playfairDisplay">{book_name}</h2>
                    <p className='font-medium workSans text-[#131313CC]'>By: {author}</p>
                    <hr className='border-t-2 border-dashed line' />
                    <div className=' flex font-medium text-[#131313CC] workSans '>
                        <p className='mr-52'>{category}</p>
                        <p className='flex gap-2 justify-center items-center'>{rating}<CiStar className='text-xl'></CiStar></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

Book.propTypes = {
    book: PropTypes.object
}

export default Book;