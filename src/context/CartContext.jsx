import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const alert = () => {
    toast.success("Agregado al carrito", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const getProductToCart = (element) => {
    let yaExiste = isInCart(element);
    let existe = isCartSinAlert(element.id);

    if (existe) {
      if (existe && yaExiste) {
        toast.error("El producto ya esta en el carrito", {
          position: "bottom-center",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        const newArray = cart.map((elemento) => {
          if (elemento.id === element.id) {
            return {
              ...elemento,
              cantidad: element.cantidad,
            };
          } else {
            return elemento;
          }
        });
        setCart(newArray);
        localStorage.setItem("cart", JSON.stringify(newArray));
        alert();
      }
    } else {
      setCart([...cart, element]);
      localStorage.setItem("cart", JSON.stringify([...cart, element]));
      alert();
    }
  };
  const isCartSinAlert = (id) => {
    let existe = cart.some((element) => element.id === id);
    return existe;
  };
  const isInCart = (element) => {
    let yaExiste = cart.some(
      (elemento) => elemento.cantidad === element.cantidad
    );
    return yaExiste;
  };

  const getCantidadCounter = (id) => {
    const product = cart.find((elemento) => elemento.id === id);

    if (product) {
      return product.cantidad;
    } else {
      return product;
    }
  };

  const eliminarCarrito = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };
  const eliminarproducto = (id) => {
    const newArray = cart.filter((element) => element.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray));
    toast.success("Producto eliminado del carrito", {
      position: "bottom-center",
      autoClose: 1500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const totalProducts = () => {
    const totalP = cart.reduce((acc, element) => {
      return acc + element.cantidad;
    }, 0);
    return totalP;
  };

  const totalPrice = () => {
    const totalPrice = cart.reduce((acc, element) => {
      return acc + element.cantidad * element.price;
    }, 0);
    return totalPrice;
  };

  const data = {
    getProductToCart,
    cart,
    getCantidadCounter,
    eliminarCarrito,
    eliminarproducto,
    totalProducts,
    totalPrice,
  };
  return (
    <CartContext.Provider value={data}>
      {children}
      <ToastContainer limit={3} />
    </CartContext.Provider>
  );
};
