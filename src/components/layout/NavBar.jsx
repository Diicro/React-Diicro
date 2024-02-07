import { CartWidget } from "../common/CartWidget"
import './NavBar.css' 

export const NavBar = () => {
  return (
    <div className="navFlex">
        <div>Fachapets</div>
            <div className="ul">
                <ul>
                    <li className="li">Ropa Perros</li>
                    <li className="li">Ropa Gatos</li>
                    <li className="li">Accesorios</li>
                </ul>
            </div>
        <CartWidget/>
    </div>
    
  )
}
