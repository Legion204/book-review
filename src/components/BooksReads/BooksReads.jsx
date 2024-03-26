import { useEffect, useState } from "react";
import ListedReadBook from "../ListedReadBook/ListedReadBook";

const BooksReads = () => {

    const[reads,setReads]=useState([]);

    useEffect(()=>{
        const getReadsData=JSON.parse(localStorage.getItem("reads"));
        setReads(getReadsData);
    },[])

    return (
        <div className="flex flex-col gap-6">
            {
                reads?.map((read,idx)=><ListedReadBook
                key={idx}
                read={read}
                ></ListedReadBook>)
            }
        </div>
    );
};

export default BooksReads;