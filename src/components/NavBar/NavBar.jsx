import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg workSans text-[#131313CC]">
                        <NavLink to={'/'}><li><button>Home</button></li></NavLink>
                        <NavLink to={'/listed'}><li><button>Listed Books</button></li></NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]' : ''} to={'/chart'}><li><p>Pages to Read</p></li></NavLink>
                        <NavLink className={({isActive})=>isActive? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]':''} to={'/manga'}><li><p>Manga Section</p></li></NavLink>
                        <NavLink className={({isActive})=>isActive? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]':''} to={'/authors'}><li><p>Authors</p></li></NavLink>
                    </ul>
                </div>
                <NavLink to={'/'}><button className="btn btn-ghost font-bold text-3xl">Aura Library</button></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg text-[#131313CC] workSans ">
                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]' : ''} to={'/'}><li><p>Home</p></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]' : ''} to={'/listed'}><li><p>Listed Books</p></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]' : ''} to={'/chart'}><li><p>Pages to Read</p></li></NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]' : ''} to={'/manga'}><li><p>Manga Section</p></li></NavLink>
                    <NavLink className={({isActive})=>isActive? 'text-[#23BE0A] border-2 rounded-xl border-[#23BE0A]':''} to={'/authors'}><li><p>Authors</p></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-2 workSans">
                <a className="btn bg-[#23BE0A] font-semibold text-lg text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] font-semibold text-lg text-white">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;