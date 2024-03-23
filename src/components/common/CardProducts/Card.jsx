import "./Card.css";
import { Link } from "react-router-dom";
export const Card = ({ id, price, title, img, stock }) => {
  return (
    <div className="card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <br />
        <h3>Unidades: {stock}</h3>
        <br />
        <h3>
          <span>$</span> {price}
        </h3>
      </div>
      <div className="btn">
        <Link to={`/item/${id}`}>
          <button className="btnCard">Ir al detalle</button>
        </Link>
      </div>
    </div>
  );
};
