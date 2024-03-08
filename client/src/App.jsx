import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";
import { useProducts } from "./hooks/useProducts";

export const App = () => {
  const { products, loading, error, getAll } = useProducts();

  return (
    <Router>
      <div className="main">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                products={products}
                loading={loading}
                error={error}
                getAll={getAll}
              />
            }
          />
          <Route path="/items" element={<ProductListContainer />} />
          <Route path="/items/:id" element={<ProductDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};
