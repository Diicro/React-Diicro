import { CheckoutContainer } from "../components/pages/Checkout/CheckoutContainer";
import { ItemDetailContainer } from "../components/pages/ItemDetailContainer/ItemDetailContainer";
import ItemsListContainer from "../components/pages/ItemListContainer/ItemsListContainer";
import { CartContainer } from "../components/pages/cart/CartContainer";

export const routes = [
  { id: "home", path: "/", Element: ItemsListContainer },
  {
    id: "category",
    path: "/category/:category",
    Element: ItemsListContainer,
  },
  { id: "detail", path: "/item/:id", Element: ItemDetailContainer },
  { id: "cart", path: "/cart", Element: CartContainer },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },
];
