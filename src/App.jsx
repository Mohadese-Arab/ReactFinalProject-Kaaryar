import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home"
import Cart from "./pages/cart";
import Product from "./pages/product";
import Footer from "./components/footer";
import { useState } from "react";

import data from "./data.json"

function App() {
  const [shopCount, setShopCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Header shopCount={shopCount} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart data={data} setShopCount={setShopCount} />} />
            <Route path="/product/:id" element={<Product setShopCount={setShopCount} />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
