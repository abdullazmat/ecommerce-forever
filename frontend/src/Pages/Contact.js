import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeForm from "../Components/user/SubscribeForm";

function Contact() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="p-4 mt-3 d-flex justify-content-center">
        <h2 style={{ textTransform: "uppercase" }}>
          <span style={{ color: "#6b7280" }}>Contact</span> Us
        </h2>
      </div>

      {/* Content Row */}
      <div className="row pb-0 pe-lg-0 d-flex justify-content-center align-items-center rounded-3">
        {/* Image Column */}
        <div className="col-lg-6 col-md-8 col-sm-10 p-lg-5 p-3 d-flex justify-content-center justify-content-lg-end p-0 overflow-hidden">
          <img
            className="rounded-lg-3 img-fluid" // Added 'img-fluid' for responsiveness
            src={assets.contact_img}
            alt="Contact Us"
            style={{ maxWidth: "100%", height: "auto" }} // Ensure image is responsive
          />
        </div>

        {/* Text Column */}
        <div className="col-lg-6 col-md-8 col-sm-10 text-center text-lg-start p-lg-5 p-3">
          <h5 style={{ color: "#4b5563" }}>Our Store</h5>
          <p className="lead p-0 m-0">54709 Willms Station</p>
          <p className="p-0 m-0">Suite 350, Washington, USA</p>
          <p className="p-0 mt-3 mb-0">Tel: (415) 555-0132</p>
          <p className="p-0 m-0">Email: admin@forever.com</p>

          <h5 style={{ color: "#4b5563" }} className="mt-5 ">
            Careers at Forever
          </h5>
          <p className="mt-3">Learn more about our teams and job openings.</p>
          <button
            className="btn px-4 py-2 mt-3 btn-outline-dark"
            style={{ borderRadius: "0" }}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Subscribe Form */}
      <SubscribeForm />
    </div>
  );
}

export default Contact;
