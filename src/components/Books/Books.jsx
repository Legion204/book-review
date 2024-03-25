import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch('Books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])


    return (
        <div className="mt-24"> 
            <h1 className="font-bold text-5xl playfairDisplay text-center">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 mt-9">
                {
                    books.map((book,idx)=><Book
                    key={idx}
                    book={book}
                    ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;