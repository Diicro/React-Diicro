import { CounterCartContainer } from "../../common/counter/CounterCartContainer";
import "./ItemDetailContainer.css";
export const ItemDetail = ({
  img,
  description,
  title,
  price,
  stock,
  addCart,
  inicialCount,
}) => {
  return (
    <div className="center">
      <div className="flexbox">
        <div>
          <img src={img} />
        </div>
        <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <h3>
            <span>Precio:$</span> {price}
          </h3>
          <h3 className="stock">
            <span>Unidades : </span>
            {stock}
          </h3>

          <CounterCartContainer
            stock={stock}
            addCart={addCart}
            inicialCount={inicialCount}
          />
        </div>
      </div>
    </div>
  );
};
