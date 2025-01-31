import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/user/Header.js";
import Home from "./Pages/Home.js";
import SignUp from "./Pages/SignUp.js";
import LogIn from "./Pages/LogIn.js";
import Footer from "./Components/user/Footer.js";
import NotFound from "./Components/shared/notFound.js";
import ForgetPassword from "./Components/shared/ForgetPassword.js";
import UpdatePassword from "./Components/shared/UpdatePassword.js";
import Collections from "./Pages/Collections.js";
import PrivateRoute from "./Components/user/PrivateRoute.js";
import About from "./Pages/About.js";

function App() {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <div className="app-container d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />}></Route>
            <Route path="/forget-password" element={<ForgetPassword />}></Route>
            <Route
              path="/reset-password/:token"
              element={<UpdatePassword />}
            ></Route>
            <Route path="/collections" element={<Collections />}></Route>

            <Route element={<PrivateRoute />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
