import Home from "./components/Home/Home";
import ProductsPage from "./components/ProductsPage/ProductsPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

 // <div>
    //   {/* <Login /> */}
    // <Cart />
    // {/* <Register /> */}
    //  <ProductsPage />
    // {/* <ProductPage />  */}
    // {/* <Home/> */}
    // </div>

export default App;
