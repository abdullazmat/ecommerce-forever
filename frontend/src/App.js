import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/user/Header.js";
import Footer from "./Components/user/Footer.js";
import Home from "./Pages/Home.js";
import SignUp from "./Pages/SignUp.js";
import LogIn from "./Pages/LogIn.js";
import NotFound from "./Components/shared/notFound.js";
import ForgetPassword from "./Components/shared/ForgetPassword.js";
import UpdatePassword from "./Components/shared/UpdatePassword.js";
import Collections from "./Pages/Collections.js";
import PrivateRoute from "./Components/user/PrivateRoute.js";
import About from "./Pages/About.js";
import Contact from "./Pages/Contact.js";
import Cart from "./Pages/Cart.js";
import PlaceOrder from "./Components/Cart/PlaceOrder.js";
import Orders from "./Components/Cart/Orders.js";
import AdminPanel from "./Pages/AdminPanel.js";
import AddItems from "./Components/Admin/AddItems.js";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/admin-panel" ||
    location.pathname === "/admin-panel/add";

  return (
    <div className="app-container d-flex flex-column min-vh-100">
      {!hideHeaderFooter && <Header />}
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/reset-password/:token" element={<UpdatePassword />} />
          <Route path="/collections" element={<Collections />} />
          <Route element={<PrivateRoute />}>
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/admin-panel/add" element={<AddItems />} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
