import "./CounterCart.css";
export const Countercart = ({ addCount, deleteCount, counter, addCart }) => {
  return (
    <div className="counterFlex">
      <div>
        <button className="counter" onClick={addCount}>
          +
        </button>
        <div>{counter}</div>
        <button className="counter" onClick={deleteCount}>
          -
        </button>
      </div>
      <div>
        <button className="btnCard" onClick={() => addCart(counter)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
