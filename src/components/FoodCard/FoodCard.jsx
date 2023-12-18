import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const FoodCard = ({ item }) => {
  const { name, image, price, receipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (food) => {
    // console.log(food,user.email)

    if (user && user.email) {
      //TODO: get the data & send to database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axios.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
        })

    }
    else {
      Swal.fire({
        title: "You are not Logged In!",
        text: "Please login to add to the cart.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { form: location } })
        }
      });
    }
  }
  return (

    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure >
        <img src={image} alt={name} />
      </figure>
      <p className='bg-slate-900 absolute right-0 mr-4 mt-4 text-white p-1 rounded-sm'>{price}</p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p >{receipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddToCart(item)} className="btn  btn-outline border-0 border-b-4 text-yellow-500 hover:text-yellow-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;