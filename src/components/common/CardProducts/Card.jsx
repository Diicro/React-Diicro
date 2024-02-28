import "./Card.css";
import { Link } from "react-router-dom";
export const Card = ({ id, price, title, img, stock, description }) => {
  return (
    <div className="card">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
        <h3>Unidades {stock}</h3>
        <h3>
          <span>$</span> {price}
        </h3>
        <h3>{description}</h3>
      </div>
      <div className="btn">
        <Link to={`/item/${id}`}>
          <button>Ir al detalle</button>
        </Link>
      </div>
    </div>
  );
};
