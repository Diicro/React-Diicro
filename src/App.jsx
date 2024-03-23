import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { CartContextProvider } from "./context/CartContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
