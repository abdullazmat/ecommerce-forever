import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RelatedCollectionS from "../Components/user/RelatedCollections";
import Toast from "../Components/user/Toast";
import Reviews from "../Components/user/Reviews";

function ProductPage() {
  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedIndex, setSelectedIndex] = useState([]);
  const handleSizeClick = (index) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const [activeTab, setActiveTab] = useState("description");

  const images = [1, 2, 3, 4];
  const reviews = [1, 2, 3];

  return (
    <div className="container mt-0 mt-md-3 d-flex flex-wrap justify-content-between py-2 py-sm-0 py-md-0 py-lg-2 px-4 px-sm-0 px-md-0 px-lg-5">
      <div className="  col-12 col-sm-1 col-md-2 col-lg-1 order-2 order-sm-1 mt-3 mt-sm-0 ">
        <div className="d-flex flex-row flex-sm-column col-7   align-items-center ">
          {images.map((image, index) => (
            <img
              src={assets.p_img1}
              className="col-3 col-sm-4 ms-3 ms-sm-0 col-sm-12 mt-sm-3"
              alt="product"
              style={{ objectFit: "cover" }}
            />
          ))}
        </div>
      </div>
      <div className=" col-12 col-sm-4 col-md-4 col-lg-5   me-0 me-md-5 mt-4 mt-sm-0   order-1 order-sm-1">
        <img
          src={assets.p_img1}
          className="col-12"
          alt="product"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-12 col-sm-6 col-md-5 col-lg-5 mt-4 mt-sm-0 order-3">
        <div className="py-2 col-12">
          <h3>Men Round Neck Pure Cotton T-shirt</h3>
        </div>
        <div className="py-2 col-12">
          <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
          <FontAwesomeIcon icon={faStar} style={{ color: "#FF532E" }} />
          <FontAwesomeIcon icon={faStarHalf} style={{ color: "#FF532E" }} />
          <span className="fw-bold"> (12)</span>
        </div>
        <div className="py-2 col-12">
          <h3 className="fw-bold">$50</h3>
        </div>
        <div className="py-2 col-12 col-lg-9">
          <p className="p-0 m-0">
            A lightweight, usually knitted, pullover shirt, close-fitting and
            with a round neckline and short sleeves, worn as an undershirt or
            outer
            <br />
            garment.
          </p>
        </div>
        <div className="py-2 col-12">
          <p className="fw-bold p-0 m-0">Select Size</p>
        </div>
        <div className=" col-9 col-sm-12 col-md-12 col-lg-9 py-2 d-flex justify-content-between">
          {sizes.map((size, index) => (
            <p
              key={index}
              className="px-3 py-1 m-0"
              style={{
                backgroundColor: selectedIndex.includes(index)
                  ? "#FF532E"
                  : "#E2E8F0",
                opacity: "0.6",
                color: "black",
                borderRadius: "0",
                cursor: "pointer",
              }}
              onClick={() => handleSizeClick(index)}
            >
              {size}
            </p>
          ))}
        </div>
        <div className="py-4 col-12">
          <button
            className="btn btn-dark text-white px-4 py-2"
            style={{ borderRadius: "0" }}
          >
            Add to Cart
          </button>
        </div>
        <hr />
        <div className="d-flex flex-column py-2">
          <div className="col-12">
            <p className="fw-light p-0 m-0">100% Original product.</p>
          </div>
          <div className="col-12">
            <p className="fw-light p-0 m-0">
              Cash on delivery is available on this product.
            </p>
          </div>
          <div className=" col-12">
            <p className="fw-light p-0 m-0">
              Easy return and exchange policy within 7 days.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 order-4 col-12">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "description" ? "fw-bold active" : "fw-medium"
              } text-black`}
              id="description-tab"
              data-bs-toggle="tab"
              data-bs-target="#description"
              type="button"
              role="tab"
              aria-controls="description"
              aria-selected={activeTab === "description"}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link ${
                activeTab === "reviews" ? "fw-bold active" : "fw-medium"
              } text-black`}
              id="reviews-tab"
              data-bs-toggle="tab"
              data-bs-target="#reviews"
              type="button"
              role="tab"
              aria-controls="reviews"
              aria-selected={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (12)
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active p-3 p-sm-4 border"
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
          </div>
          <div
            className="tab-pane fade p-3 p-sm-4 border col-12"
            id="reviews"
            role="tabpanel"
            aria-labelledby="reviews-tab"
          >
            {reviews.map((review, index) => (
              <div className="border mt-3 p-3">
                <div className="d-flex  col-md-4 col-lg-3">
                  <p className="fw-medium">
                    <span className="fw-bold">Posted By : </span>abdullah{" "}
                  </p>
                </div>
                <div className="d-flex justify-content-between align-items-center col-12 col-sm-6 col-md-4 col-lg-3">
                  <div className="d-flex">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FF532E" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FF532E" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FF532E" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#FF532E" }}
                    />
                    <FontAwesomeIcon
                      icon={faStarHalf}
                      style={{ color: "#FF532E" }}
                    />
                  </div>
                  <div> 12-Feb-2025</div>
                </div>
                <div className=" col-12 col-md-9 mt-3">
                  <p className="p-0 m-0">
                    Awesome Product Awesome Experience Everything just Awesome
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="order-5">
        <RelatedCollectionS />
      </div>
      {/* <div class="col-12 col-lg-6 mb-4">
        <Toast />
      </div> */}
    </div>
  );
}

export default ProductPage;
