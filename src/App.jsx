import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/layout/NavBar";
import ItemsListContainer from "./components/pages/ItemListContainer/ItemsListContainer";
import { ItemDetailContainer } from "./components/pages/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemsListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/category/:category" element={<ItemsListContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
