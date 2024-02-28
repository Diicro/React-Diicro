import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMocks";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const peticion = new Promise((resolve, reject) => {
      if (products.length > 0) {
        resolve(products);
      } else {
        reject("No hay productos,estamos trabajando en eso");
      }
    });

    peticion.then((resp) => {
      if (category) {
        const filter = resp.filter((product) => product.category === category);
        setItems(filter);
      } else {
        setItems(resp);
      }
    });
  }, [category]);

  return (
    <>
      {items.length < 1 ? (
        <div className="Mantenimiento">
          Por el momento esta sección esta en mantenimiento,puedes mirar todos
          nuestro otros productos...
          <br />
          Error 404
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemsListContainer;
