import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { datab } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemsListContainer = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    let productsCollection = collection(datab, "products");

    let filter;

    if (category) {
      let productsCollectionFilter = query(
        productsCollection,
        where("category", "==", category)
      );
      filter = productsCollectionFilter;
    } else {
      filter = productsCollection;
    }

    getDocs(filter)
      .then((res) => {
        let arrayProductsCollection = res.docs.map((elemento) => {
          return { ...elemento.data(), id: elemento.id };
        });

        setItems(arrayProductsCollection);
      })
      .finally(() => setIsLoading(false));
  }, [category]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src="https://res.cloudinary.com/drye76tii/image/upload/v1711201512/loading_je5o9z.gif" />
      </div>
    );
  }
  return (
    <>
      {items < 1 ? (
        <div className="centerInfo">
          Por el momento esta sección esta en mantenimiento,puedes mirar todos
          nuestros otros productos...
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
