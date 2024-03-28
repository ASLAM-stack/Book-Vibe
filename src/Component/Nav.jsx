import { NavLink } from "react-router-dom";

// import '../MainLayOut/main.css'
const Nav = () => {
  return (
    <div className="shadow-lg">
      <div className="navbar bg-base-100 container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
          <NavLink to='/' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Home</a>
            </NavLink>
            <NavLink to='/list_book' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Listed Book</a>
            </NavLink>
            <NavLink to='/statistics' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Pages to Read</a>
            </NavLink>
            <NavLink to='/blog' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Blogs</a>
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Contact</a>
            </NavLink>
            <div className="min-[390px]:hidden flex flex-col gap-2">
        <a className="btn text-white work bg-[#23BE0A]">Sign In</a>
        <a className="btn text-white work bg-[#59C6D2]">Sign Up</a>
      </div>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold work t">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 gap-4">
        <NavLink to='/' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Home</a>
            </NavLink>
            <NavLink to='/list_book' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Listed Book</a>
            </NavLink>
            <NavLink to='/statistics' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Pages to Read</a>
            </NavLink>
            <NavLink to='/blog' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Blogs</a>
            </NavLink>
            <NavLink to='/contact' className={({isActive}) => isActive ? 'text-[#23BE0A] font-semibold border-2 border-[#23BE0A] work text-lg rounded-lg px-1' :'font-semibold work text-lg'}>
              <a>Contact</a>
            </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-4 max-[390px]:hidden">
        <a className="btn text-white work bg-[#23BE0A]">Sign In</a>
        <a className="btn text-white work bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
    </div>
  );
};

export default Nav;
