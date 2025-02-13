import React from "react";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { ADMIN_API_END_POINT } from "../../Utils/constant";
import { setAdmin } from "../../Redux/adminSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`${ADMIN_API_END_POINT}/logout`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (data.success) {
        dispatch(setAdmin(null));
        navigate("/admin-panel");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <header className="d-flex   py-3  border-bottom">
        <div className="col-6">
          <a
            href="/admin-panel"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          >
            <img src={assets.logo} alt="logo" style={{ width: "100px" }} />
          </a>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <button
            onClick={handleLogout}
            className="nav-link  px-3 btn bg-dark text-white w-auto"
            aria-current="page"
          >
            Log Out
          </button>
        </div>
      </header>
    </div>
  );
}

export default AdminHeader;
