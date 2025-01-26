import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../Utils/constant";
import { setLoading, setUser } from "../Redux/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../Components/shared/notFound.js";

function SignUp() {
  // Use States
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: "",
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { user } = useSelector((state) => state.auth);

  // Redux States
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  // Functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formDataObject = new FormData(); //formdata object
    // formDataObject.append("fullname", formData.fullName);
    // formDataObject.append("email", formData.email);
    // formDataObject.append("phoneNumber", formData.phoneNumber);
    // formDataObject.append("password", formData.password);
    // formDataObject.append("role", formData.role);
    // if (formData.file) {
    //   formDataObject.append("file", formData.file);
    // }
    // console.log(formDataObject);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/signup`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (!res.data.success) {
        dispatch(setLoading(false));
        setError(res.data.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      } else {
        dispatch(setUser(res.data.user));
        dispatch(setLoading(false));
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      dispatch(setLoading(false));
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong");
      }
      setTimeout(() => {
        setError(null);
      }, 3000);
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (user) {
    return <NotFound message />;
  }

  return (
    <div className="container p-5 mt-5 mt-md-0">
      <h2
        className=" container mt-5 mb-4 p-3 fw-bold d-flex justify-content-center"
        style={{ color: "#1f2937", fontFamily: "Prata, serif" }}
      >
        Sign Up
      </h2>
      <form
        className="container p-3 d-flex flex-column justify-content-center  col-12 col-sm-9 col-md-6"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control "
            id="name"
            name="name"
            aria-describedby="emailHelp"
            required
            placeholder="Name"
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control "
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
            placeholder="Email"
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control input-custom "
            id="password"
            name="password"
            required
            placeholder="Password"
            onChange={handleChange}
            style={{ border: "1px solid black" }}
          />
        </div>

        <div className="mt-3 d-flex flex-column flex-sm-row justify-content-between align-items-center">
          <Link
            to="/forget-password"
            className="text-danger mb-2 mb-sm-0"
            style={{ textDecoration: "none" }}
          >
            Forgot Password?
          </Link>
          <Link
            to="/signup"
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            Log In
          </Link>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-dark w-75 w-sm-50 w-md-25 mt-4"
            style={{ borderRadius: "0" }}
          >
            {loading ? "Loading ..." : "Sign Up"}
          </button>
        </div>
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
        {success && user && (
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

export default SignUp;
