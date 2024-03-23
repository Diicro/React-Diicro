import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./CartContainer.css";

export const CartContainer = () => {
  const { cart, eliminarCarrito, eliminarproducto, totalProducts, totalPrice } =
    useContext(CartContext);
  const allProducts = totalProducts();
  const allPrice = totalPrice();

  const alertDelete = () => {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "¿Estas seguro que quieres limpiar el carrito?",
      showDenyButton: true,
      showConfirmButton: true,
      showCancelButton: false,
      denyButtonText: "Si,borrar carrito",
      confirmButtonText: "Seguir con la compra",
    }).then((resp) => {
      if (resp.isDenied) {
        eliminarCarrito();
        Swal.fire({
          icon: "success",
          title: "El carrito ha sido borrado satisfactoriamente",
        });
      }
    });
  };
  return (
    <>
      {cart.length < 1 ? (
        <h2 className="productLess">No tienes productos en el carrito</h2>
      ) : (
        <div className="cartContent">
          <div className="flexCart">
            {cart.map(({ id, price, title, img, cantidad }) => {
              return (
                <div key={id} className="cartContainer">
                  <button onClick={() => eliminarproducto(id)}>
                    <div className="imgCart">
                      <img src={img} />
                    </div>
                    <div>
                      <h2>{title}</h2>
                      <h2>
                        Cantidad:
                        <br /> {cantidad}
                      </h2>
                      <h2>
                        Valor:
                        <br /> $ {price}
                      </h2>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="checkOut">
            <br />
            <h2>Información de productos</h2>
            <br />
            <div className="checkFlex">
              <h3>Total de productos:</h3>
              <h3>{allProducts}</h3>
            </div>
            <br />
            <div className="checkFlex">
              <h3>Precio total: </h3>
              <h3>
                <span>$</span> {allPrice}
              </h3>
            </div>
            <br />
            <div className="checkFlex">
              <h3>Descuentos: </h3>
              <h3>
                <span>$</span> 0
              </h3>
            </div>
            <br />

            <h2 className="priceFinal">
              Precio Final:<span> $ {allPrice}</span>
            </h2>

            <div className="btnCheck">
              <button className="btnRojo" onClick={alertDelete}>
                Vaciar carrito
              </button>
              <Link to="/checkout">
                <button className="btnVerde">Ir a pagar</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
