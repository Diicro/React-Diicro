import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../../productsMocks";
import { ItemDetail } from "./ItemDetail";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((resp) => {
        setItem(resp);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
      });
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="loading">
          <img src="../../public/loading.gif" />
        </div>
      ) : (
        <ItemDetail
          description={item.description}
          stock={item.stock}
          img={item.img}
          price={item.price}
          title={item.title}
        />
      )}
    </>
  );
};
