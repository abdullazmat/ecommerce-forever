import React from "react";
import { assets } from "../../../src/assets/frontend_assets/assets";

function HeroSection() {
  return (
    <div className="container p-0 border">
      <div className="row align-items-center g-0">
        {/* Left Column */}
        <div className="col-lg-6 text-center p-4">
          <div className="mb-3">
            <p
              style={{
                color: "#414141",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontSize: "14px",
              }}
            >
              OUR BESTSELLERS
            </p>
          </div>
          <h1
            style={{
              fontSize: "3rem",
              fontFamily: "Prata, serif",
              color: "#414141",
              lineHeight: "1.2",
            }}
          >
            Latest Arrivals
          </h1>
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-dark text-white"
              style={{ borderRadius: "0" }}
            >
              Shop Now
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="col-lg-6 text-center p-0">
          <img
            src={assets.hero_img}
            alt="Latest Arrivals"
            className="img-fluid"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
