import axios from "axios";
import { CART_API_END_POINT } from "../Utils/constant";
import { useDispatch } from "react-redux";
import { setAllCartItems } from "../Redux/cartSlice";

const useDeleteAllCart = () => {
  const dispatch = useDispatch();

  const deleteAllCart = async () => {
    try {
      const res = await axios.delete(`${CART_API_END_POINT}/delete`);
      dispatch(setAllCartItems(res.data.cart));
      console.log("Delete Cart Hook Called");
    } catch (err) {
      console.log(err);
    }
  };

  return deleteAllCart; // Return function instead of calling it inside useEffect
};

export default useDeleteAllCart;
