import { useState } from "react";
import { Countercart } from "./Countercart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const CounterCartContainer = ({ stock, addCart, inicialCount = 1 }) => {
  const [counter, setCounter] = useState(inicialCount);

  const addCount = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    } else {
      toast.warn("Stock maximo", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const deleteCount = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <Countercart
        addCount={addCount}
        deleteCount={deleteCount}
        counter={counter}
        addCart={addCart}
      />
    </div>
  );
};
