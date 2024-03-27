import { useEffect, useState } from "react";
import Manga from "../components/Manga/Manga";


const MangaSection = () => {

    const [mangas,setMangas]=useState([]);

    useEffect(()=>{
        fetch('Manga.json')
        .then(res=>res.json())
        .then(data=>setMangas(data))
    },[])

    return (
        <div>
            <h1 className="font-bold text-3xl text-center bg-[#1313130D] py-8 px-96 rounded-2xl mb-14">Manga</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center gap-6 mt-9">
                {
                    mangas.map((manga,idx)=><Manga
                    key={idx}
                    manga={manga}
                    ></Manga>)
                }
            </div>
        </div>
    );
};

export default MangaSection;