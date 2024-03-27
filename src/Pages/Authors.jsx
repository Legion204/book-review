import { useEffect, useState } from "react";
import Author from "../components/Author/Author";


const Authors = () => {

    const [authors,setAuthors]=useState([]);

    useEffect(()=>{
        fetch('Authors.json')
        .then(res=>res.json())
        .then(data=>setAuthors(data))
    },[])

    return (
        <div>
            <div className="space-y-4 text-center mt-9">
                <h3 className="text-2xl font-bold leading-none sm:text-5xl">Your favorite Book writers</h3>
                <p className=" dark:text-gray-600 mx-32">Dive into the captivating world of literature with Masters of Ink, a heartfelt homage to my favorite book writers. From the spellbinding realms crafted by J.K. Rowling to the vivid imagination of Stephen King, this collection offers a glimpse into the creative minds behind some of the most beloved stories of all time. Explore the genius of F. Scott Fitzgeralds Jazz Age elegance, the timeless charm of Jane Austens Regency-era romances, and the gripping narratives of modern manga visionaries like Masashi Kishimoto and Eiichiro Oda.</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {
                authors.map((author,idx)=><Author
                key={idx}
                author={author}
                ></Author>)
            }
            </div>
        </div>
    );
};

export default Authors;