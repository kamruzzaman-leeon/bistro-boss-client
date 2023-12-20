import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import {FaShoppingCart} from 'react-icons/fa';
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.log(error))
  }
  const navoptions = <>
    <li className="text-black lg:text-white py-1"><Link to="/">Home</Link></li>
    <li className="text-black lg:text-white  py-1"><Link to="/Menu">Our Menu</Link></li>
    <li className="text-black lg:text-white  py-1"><Link to="/order/pizza">Order</Link></li>
    <li>
      <Link to="/">
        <button className="btn btn-sm btn-ghost p-0">
          <FaShoppingCart></FaShoppingCart>
          <div className="badge badge-secondary -mt-4 -ml-3">+{cart.length}</div>
        </button>
      </Link>
      </li>
    {
      user ? <>
      <li className=" py-1"><span className="text-black lg:text-white">{user.displayName}</span></li>
     <li className=" text-black lg:text-white  py-1" onClick={handleLogOut}><span>Logout</span></li>
    </>:<>
        <li className="text-black md:text-white py-1"><Link to="/login">Login</Link></li>
      </>
    }
  </>
  return (
    <div className="navbar fixed z-10 bg-black bg-opacity-30 text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navoptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Bistro Boss</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navoptions}  
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;