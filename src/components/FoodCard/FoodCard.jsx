import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, receipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    // console.log(food,user.email)

    if (user && user.email) {
      //send cart item  to database
      // console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price
      }

      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your Food has been added to cart",
              showConfirmButton: false,
              timer: 1500
            })
            refetch();
            
          }
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
          <button onClick={handleAddToCart} className="btn  btn-outline border-0 border-b-4 text-yellow-500 hover:text-yellow-500">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;