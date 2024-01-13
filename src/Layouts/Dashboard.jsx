import { FaAd, FaBars, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUser, FaUsers, FaUtensilSpoon, FaUtensils, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = useAdmin;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminHome">
                                <FaHome></FaHome>
                                Admin Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/addItem">
                                <FaUtensils></FaUtensils>
                                Add Items</NavLink>
                            </li>

                            <li><NavLink to="/dashboard/manageItems">
                                <FaList></FaList>
                                Manage Items</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/bookings">
                                <FaBook></FaBook>
                                Manage Booking</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/users">
                                <FaUsers></FaUsers>
                                All Users</NavLink>
                            </li>
                        </> : <>
                            <li><NavLink to="/dashboard/userHome">
                                <FaHome></FaHome>
                                User Home</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/reservation">
                                <FaCalendar></FaCalendar>
                                Reservation</NavLink>
                            </li>

                            <li><NavLink to="/dashboard/cart">
                                <FaShoppingCart></FaShoppingCart>
                                My Cart ({cart.length})</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/review">
                                <FaAd></FaAd>
                                Add a Review</NavLink>
                            </li>
                            <li><NavLink to="/dashboard/bookings">
                                <FaList></FaList>
                                My Bookings</NavLink>
                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    {/* shared nav links */}
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/menu'>
                            <FaBars></FaBars>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
                            <FaEnvelope></FaEnvelope>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;