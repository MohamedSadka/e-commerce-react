import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import HomePage from "./pages/HomePage";
import AuthProvider from "./context/AuthContext";
import RequiredAuth from "./context/RequiredAuth";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import { CartProvider } from "./context/CartContext";
import { AddedProductsProvider } from "./context/AddedProductsContext";
import { WishListProvider } from "./context/WishListContext";
import Checkout from "./pages/Checkout";
import AllProducts from "./pages/AllProducts";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className="app p-4">
      <WishListProvider>
        <CartProvider>
          <AddedProductsProvider>
            <AuthProvider>
              <Router>
                <div style={{ minHeight: "100vh" }}>
                  <Header />
                  <Routes>
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/update-profile" element={<UpdateProfile />} />
                    <Route
                      path="/"
                      element={
                        <RequiredAuth>
                          <HomePage />
                        </RequiredAuth>
                      }
                    />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/wishlist" element={<WishList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/all-products" element={<AllProducts />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                  </Routes>
                </div>
              </Router>
            </AuthProvider>
          </AddedProductsProvider>
        </CartProvider>
      </WishListProvider>
      <Footer />
    </div>
  );
}

export default App;
