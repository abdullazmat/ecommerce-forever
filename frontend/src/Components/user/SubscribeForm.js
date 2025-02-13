import React from "react";
import axios from "axios";
import { useState } from "react";
import { SUBS_API_END_POINT } from "../../Utils/constant";
import Toast from "../user/Toast";

function SubscribeForm() {
  const [subEmail, setSubEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setSubEmail(e.target.value);
  };

  const addtoSubscribe = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${SUBS_API_END_POINT}/subscribe`, {
        email: subEmail,
      });
      setSuccess(true);
      setSubEmail("");
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return (
    <div>
      {success && <Toast message="Subscribed Successfully" type="success" />}
      {error && <Toast message={error} type="error" />}
      <div className="container mt-5 mb-5">
        <div className="d-flex align-items-center justify-content-center flex-column">
          <div>
            <h2 style={{ color: "#212529", fontFamily: "Outfit" }}>
              Subscribe now & get 20% off
            </h2>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <p className="p-3 text-center ">
              Subscribe to our newsletter to get the latest updates
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <form>
              <div className="d-flex">
                <div className="mb-3 w-100">
                  <input
                    type="email"
                    className="form-control input-custom"
                    id="email"
                    value={subEmail}
                    onChange={handleChange}
                    aria-describedby="subEmail"
                    name="email"
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={addtoSubscribe}
                    className="btn btn-dark text-white"
                    style={{ borderRadius: "0" }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeForm;
