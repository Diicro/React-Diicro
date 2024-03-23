import { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useContext(CartContext);
  const totalP = totalProducts();
  return (
    <div>
      <span>{totalP}</span>
      <GiShoppingCart />
    </div>
  );
};
