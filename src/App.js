import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import ProductRoot from "./pages/ProductRoot";
import ProductDetails from "./components/ProductDetails";
import ViewCart from "./pages/ViewCart";
import Checkout from "./pages/Checkout";
import Login from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import About from "./pages/About";
import AdminDashBoard from "./components/admindashboard";
import ForgotPassword from "./pages/ForgotPassword";
import AdminAddProduct from "./components/AdminAddProduct";
import AdminLayout from "./components/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<ProductRoot />} />
          <Route path="product/:productId" element={<ProductDetails />} />
          <Route path="viewcart" element={<ViewCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="forgotpassword" element={<ForgotPassword />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashBoard />} />
          <Route path="adminaddproduct" element={<AdminAddProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
