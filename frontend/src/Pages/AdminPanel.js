import React from "react";
import { useState } from "react";
import AdminHeader from "../Components/Admin/AdminHeader";
import { ADMIN_API_END_POINT } from "../Utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setAdmin } from "../Redux/adminSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import Toast from "../Components/user/Toast";

function AdminPanel() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");

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
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      } else {
        setSuccess(true);
        dispatch(setAdmin(data.admin));
        setTimeout(() => {
          setSuccess(false);
          setLoading(false);
          navigate("/admin-panel/add");
        }, 5);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data.message);
      } else {
        setError(error.message || "Something went wrong");
      }

      setTimeout(() => {
        setError("");
      }, 5000);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container p-2 p-md-5 mt-4 mt-md-0  align-items-center vh-100">
        {error && <Toast message={error} />}
        {success && <Toast message="Login Successful" />}
        <div className="px-0 py-5 px-md-5 py-md-5 d-flex align-items-center">
          <FontAwesomeIcon
            icon={faArrowAltCircleLeft}
            className="fs-1"
            onClick={() => navigate("/")}
          />
          <button
            onClick={() => navigate("/")}
            className="btn btn-dark text-white ms-3"
          >
            Back To Home
          </button>
        </div>
        <form
          className="container mt-5 p-3 d-flex flex-column justify-content-center border col-12 col-sm-9 col-md-6 col-lg-4"
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
        </form>
      </div>
    </>
  );
}

export default AdminPanel;
