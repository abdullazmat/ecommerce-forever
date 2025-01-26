import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../Redux/authSlice.js";
import NotFound from "../Components/shared/notFound.js";

function LogIn() {
  // Use States
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "",
  });

  // Redux States
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user, loading: userLoading } = useSelector((state) => state.auth);

  // Functions
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        setTimeout(() => {
          setError(null);
        }, 3000);
        return;
      } else {
        setLoading(false);
        dispatch(setUser(data.user));
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  useEffect(() => {
    // Redirect logged-in users away from the login page
    if (user && !userLoading) {
      navigate("/");
    }
  }, [user, userLoading, navigate]);

  // Wait for the user state to initialize before showing the form or error
  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (user) {
    return null; // Avoid rendering if user is already logged in
  }

  // UI
  return (
    <div className="container p-5 mt-5 mt-md-0">
      <h2
        className=" container mt-5 mb-4 p-3 fw-bold d-flex justify-content-center"
        style={{ color: "#1f2937", fontFamily: "Prata, serif" }}
      >
        Log In
      </h2>
      <form
        className="container p-3 d-flex flex-column justify-content-center  col-12 col-sm-9 col-md-6"
        onSubmit={handleSubmit}
      >
        {/* Form Fields */}
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
            Create Account
          </Link>
        </div>

        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-dark w-75 w-sm-50 w-md-25 mt-4"
            style={{ borderRadius: "0" }}
          >
            {loading ? "Loading ..." : "Log In"}
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

export default LogIn;
