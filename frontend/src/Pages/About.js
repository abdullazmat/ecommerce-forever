import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeForm from "../Components/user/SubscribeForm";

function About() {
  return (
    <div className="container">
      <div className="p-4 mt-3 d-flex justify-content-center">
        <h2 style={{ textTransform: "uppercase" }}>
          <span style={{ color: "#6b7280" }}>About</span> Us
        </h2>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-0 g-md-5  ">
        <div className="col-lg-8 ">
          <div className="p-2 p-md-5 ">
            <p className="lead">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className="lead">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>

            <p className="lead fw-bold">Our Mission</p>
            <p className="lead">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
        <div className=" col-lg-4 d-flex justify-content-center">
          <img
            src={assets.about_img}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="400"
            height="400"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-4 mt-3 d-flex justify-content-center  justify-content-md-start ">
        <h3 style={{ textTransform: "uppercase" }}>
          <span style={{ color: "#6b7280" }}>Why</span> Choose Us?
        </h3>
      </div>

      <div className="row  py-3 row-cols-1 row-cols-lg-3 container d-flex justify-content-center">
        <div className="feature col p-5 border">
          <h5>Quality Assurance</h5>
          <p className="mt-3">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="feature col  p-5 border">
          <h5>Convenience</h5>
          <p className="mt-3">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="feature col  p-5 border">
          <h5>Customer Service</h5>
          <p className="mt-3">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
      <SubscribeForm />
    </div>
  );
}

export default About;
