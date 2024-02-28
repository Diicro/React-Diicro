import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navFlex">
      <Link to="/">
        <div className="title">Fachapets</div>
      </Link>
      <div className="ul">
        <ul>
          <Link to="/category/perros">
            <li className="li">
              <button>Ropa Perros</button>
            </li>
          </Link>
          <Link to={`/category/gatos`}>
            <li className="li">
              <button>Ropa Gatos</button>
            </li>
          </Link>
          <Link to="/category/accesorios">
            <li className="li">
              <button>Accesorios</button>
            </li>
          </Link>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};
