import { CartWidget } from "../common/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { menuNavigation } from "../../routes/menuNavigation";

export const NavBar = () => {
  return (
    <div className="navFlex">
      <Link to="/">
        <div className="title">Fachapets</div>
      </Link>
      <div className="ul">
        <ul>
          {menuNavigation.map(({ id, to, text }) => (
            <Link key={id} to={to}>
              <li className="li">
                <button>{text}</button>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  );
};
