import { useContext, useState } from "react";
import { Checkout } from "./Checkout";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { datab } from "../../../firebaseConfig";

export const CheckoutContainer = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    apellido: "",
    telefono: "",
    correo: "",
  });
  const { cart, totalPrice, eliminarCarrito } = useContext(CartContext);
  const total = totalPrice();

  const [orderId, setOrderId] = useState(null);

  const takeData = (e) => {
    e.preventDefault();
    let order = {
      buyer: userInfo,
      item: cart,
      precio: total,
    };

    let orderCollection = collection(datab, "orders");
    addDoc(orderCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((Element) => {
      let referForId = doc(datab, "products", Element.id);
      updateDoc(referForId, { stock: Element.stock - Element.cantidad });
    });
    eliminarCarrito();
  };

  const takeValue = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Checkout orderId={orderId} takeData={takeData} takeValue={takeValue} />
    </div>
  );
};
