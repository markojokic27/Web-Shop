import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom'
import Shop from "./pages/Shop/Shop";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import NotFound from "./pages/NotFound/NotFound";
function Medusa() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products/:productId" element={<Product/>} />
        <Route path="*" element={<NotFound/>} />       
      </Routes>
    </>
  );
}

export default Medusa;