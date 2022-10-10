import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cart from './pages/cart/Cart';
import HomePage from "./pages/home/HomePage";
import SingleProduct from "./pages/product/SingleProduct";
import Login from './pages/user/Login';
import Register from './pages/user/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="gridContainer">
          <header className=" dFlex center">
            <Navbar />
          </header>
          <main>
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <footer className="dFlex center">All right reserved</footer>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
