import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import ProductListContainer from "./containers/ProductListContainer";
import ProductDetailContainer from "./containers/ProductDetailContainer";

export const App = () => {
  return (
    <Router>
      <div className="main">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/items" element={<ProductListContainer />} />
          <Route path="/items/:id" element={<ProductDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};
