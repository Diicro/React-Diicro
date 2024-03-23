import "./Checkout.css";
import { Link } from "react-router-dom";
export const Checkout = ({ orderId, takeData, takeValue }) => {
  return (
    <>
      {orderId ? (
        <div className="centerInfo">
          <h2 className="idOrder">
            Gracias por su compra...
            <br />
            Puede seguir su orden con el siguiente numero de referencia: <br />
            <br />
            <span>{orderId}</span>
          </h2>
          <Link to="/">
            <button className="btnCheckout">Seguir Comprando...</button>
          </Link>
        </div>
      ) : (
        <div className="flexCheckout">
          <form className="flexForm" onSubmit={takeData}>
            <label htmlFor="Nombre">Nombre</label>
            <input
              onChange={takeValue}
              type="text"
              name="name"
              placeholder="Nombre"
              id="Nombre"
            />
            <label htmlFor="Apellido">Apellido</label>
            <input
              onChange={takeValue}
              type="text"
              name="apellido"
              placeholder="Apellido"
              id="Apellido"
            />
            <label htmlFor="Telefono">Telefono</label>
            <input
              onChange={takeValue}
              type="text"
              name="telefono"
              placeholder="Telefono"
              id="Telefono"
            />
            <label htmlFor="E-Mail">E-Mail</label>
            <input
              onChange={takeValue}
              type="text"
              name="correo"
              placeholder="E-Mail"
              id="E-Mail"
            />
            <br />
            <button type="submit" className="btnCheckout">
              Confirmar Compra
            </button>
          </form>
        </div>
      )}
    </>
  );
};
