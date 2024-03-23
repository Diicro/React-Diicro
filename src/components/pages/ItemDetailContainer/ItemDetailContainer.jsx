import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { datab } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { getProductToCart, getCantidadCounter } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  let inicialCount = getCantidadCounter(id);

  useEffect(() => {
    let collectionDetail = collection(datab, "products");
    let docDetail = doc(collectionDetail, id);
    getDoc(docDetail)
      .then((res) => {
        setItem({ ...res.data(), id: res.id });
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  const addCart = (cantidades) => {
    if (item.stock > 0) {
      let infoAlCarrito = { ...item, cantidad: cantidades };
      getProductToCart(infoAlCarrito);
    } else {
      Swal.fire({
        toast: true,
        timer: 2800,
        position: "bottom",
        title: "Producto sin stock",
        text: "Estamos trabajando para tener mas unidades disponibles",
        showConfirmButton: false,
        confirmButtonText: "Ok",
      });
    }
  };

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
          addCart={addCart}
          inicialCount={inicialCount}
        />
      )}
    </>
  );
};
