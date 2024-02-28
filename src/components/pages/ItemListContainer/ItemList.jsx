import { Card } from "../../common/CardProducts/Card";
import "./ItemListContainer.css";

export const ItemList = ({ items }) => {
  return (
    <div className="Listcontainer">
      {items.map(({ id, price, title, img, stock }) => {
        return (
          <Card
            key={id}
            img={img}
            title={title}
            stock={stock}
            price={price}
            id={id}
          />
        );
      })}
    </div>
  );
};
