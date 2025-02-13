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
import ListItems from "./Components/Admin/ListItems.js";
import OrderedItems from "./Components/Admin/OrderedItems.js";
import ProductPage from "./Pages/ProductPage.js";
import ScrollToTop from "./Components/shared/ScrollToTop.js";
import AdminRoute from "./Components/Admin/AdminRoute.js";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/admin-panel" ||
    location.pathname === "/admin-panel/add" ||
    location.pathname === "/admin-panel/list" ||
    location.pathname === "/admin-panel/orders";

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
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/admin-panel" element={<AdminPanel />} />

          <Route element={<PrivateRoute />}>
            <Route path="/place-order" element={<PlaceOrder />} />
            <Route path="/orders" element={<Orders />} />
          </Route>

          <Route element={<AdminRoute />}>
            <Route path="/admin-panel/add" element={<AddItems />} />
            <Route path="/admin-panel/list" element={<ListItems />} />
            <Route path="/admin-panel/orders" element={<OrderedItems />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}

export default App;
