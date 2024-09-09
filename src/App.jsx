import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home/Home"
import Cart from "./pages/cart/Cart";
import Product from "./pages/product/Product";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
