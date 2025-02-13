import React from "react";
import { useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import { ADMIN_API_END_POINT } from "../Utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../Redux/adminSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AddItems from "../Components/Admin/AddItems.js";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const [formData, setFormData] = useState({
    email: "admin@gmail.com" || "",
    password: "admin" || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${ADMIN_API_END_POINT}/login`,
        formData
      );
      if (data.error) {
        setError(data.error);
        setLoading(false);
      } else {
        setSuccess(true);
        dispatch(setAdmin(data.admin));
        setTimeout(() => {
          setSuccess(false);
          setLoading(false);
          navigate("/admin-panel/add");
        }, 10);
      }
    } catch (error) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="container p-2 p-md-5 mt-4 mt-md-0 d-flex align-items-center vh-100">
      <form
        className="container p-3 d-flex flex-column justify-content-center border col-12 col-sm-9 col-md-6 col-lg-4"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
        <div className="mb-3">
          <h4 className="mb-4 fw-bold">Admin Panel</h4>
          <label htmlFor="email" className="form-label fw-medium">
            Email
          </label>
          <input
            type="email"
            className="form-control "
            id="email"
            name="email"
            value={formData.email}
            aria-describedby="emailHelp"
            required
            placeholder="abc@gmail.com"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label fw-medium">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            id="password"
            name="password"
            value={formData.password}
            required
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          {loading ? "Loading ..." : "Log In"}
        </button>

        {/* Error and Success Messages */}
        {error && (
          <div
            className="toast-container position-fixed"
            style={{ bottom: "50px", right: "10px" }}
          >
            <div
              id="liveToast"
              className="toast show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-body text-danger">{error}</div>
            </div>
          </div>
        )}
        {success && (
          <div
            className="toast-container position-fixed bottom-0 end-0 p-3"
            style={{ bottom: "50px", right: "10px" }}
          >
            <div
              id="liveToast"
              className="toast show"
              role="alert"
              aria-live="assertive"
              aria-atomic="true"
            >
              <div className="toast-body text-success fw-bold">
                Logged In Successfully
              </div>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default AdminPanel;
