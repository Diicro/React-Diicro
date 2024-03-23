import { Link, Route, Routes } from "react-router-dom";
import { routes } from "./Routes";
import { Layout } from "../components/layout/Layout";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route
        path="*"
        element={
          <div className="centerInfo">
            <h2>Upps!!Por aqui no hay nada...</h2>
            <Link to="/">
              <button>Volver al home</button>
            </Link>
          </div>
        }
      />
    </Routes>
  );
};
