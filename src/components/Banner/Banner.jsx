import { NavLink } from 'react-router-dom';
import bannerImage from '../../assets/pngegg.png'

const Banner = () => {
    return (
        <section className="bg-[#8264640d] dark:text-gray-800 m-4 md:m-12 rounded-xl">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-around p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-5">
                    <h1 className="text-6xl font-bold leading-none sm:text-6xl playfairDisplay">Books to freshen up your bookshelf</h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <NavLink to={'/listed'}><button  className="relative px-6 py-3 font-bold text-white group">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#23BE0A] group-hover:translate-x-0 group-hover:translate-y-0 rounded-md"></span>
                            <span className="absolute inset-0 w-full h-full border-4 border-black rounded-md"></span>
                            <span className="relative">View The List</span>
                        </button></NavLink>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src={bannerImage} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
        </section>
    );
};

export default Banner;