import bannerImage from '../../assets/berserk-fotor-bg-remover-20240325211812.png'

const Banner = () => {
    return (
        <section className="bg-[#8264640d] dark:text-gray-800 m-12 rounded-xl">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
                <div className="flex flex-col justify-around p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left gap-5">
                    <h1 className="text-6xl font-bold leading-none sm:text-6xl playfairDisplay">Books to freshen up your bookshelf</h1>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <button className="btn bg-[#23BE0A] font-semibold text-lg text-white">View The List</button>
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