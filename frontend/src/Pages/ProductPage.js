import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import RelatedCollections from "../Components/user/RelatedCollections";
import Toast from "../Components/user/Toast";
import Reviews from "../Components/user/Reviews";
import { useParams } from "react-router-dom";
import useGetProductData from "../Hooks/useGetProductData";
import { useSelector } from "react-redux";
import axios from "axios";
import { CART_API_END_POINT } from "../Utils/constant.js";
import useGetAllCartItems from "../Hooks/useGetCartItems.js";
import { useDispatch } from "react-redux";
import { setAllCartItems } from "../Redux/cartSlice.js";

function ProductPage() {
  const { cart } = useSelector((state) => state.cart);
  useGetAllCartItems(cart?.length);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formloading, setFormLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  useGetProductData({ id, setLoading });

  const { productData } = useSelector((state) => state.product);
  const { allCartItems } = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState({
    productName: productData?.productName,
    size: [],
    price: productData?.price,
    images: productData?.images[0]?.url,
    quantity: 1,
    productId: productData?._id,
  });

  // Add Color to sizes selected
  const [selectedIndex, setSelectedIndex] = useState([]);
  const handleSizeClick = (index) => {
    setSelectedIndex([index]); // Only one selected index at a time
  };

  // Handling size Form Data selection/deselection
  const handleSize = (size) => {
    setCartData((prevData) => ({
      ...prevData,
      size: [size],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (cartData?.size.length === 0) {
        setError("Select Size");
        setTimeout(() => {
          setError(null);
        }, 3000);
        setTimeout(() => {
          setFormLoading(false);
        }, 2000);

        return;
      }

      setFormLoading(true);

      const formData = new FormData();
      formData.append("productName", productData.productName);
      formData.append("price", productData.price);
      formData.append("size", JSON.stringify(cartData.size));
      formData.append("images", productData.images[0].url);
      formData.append("quantity", 1);
      formData.append("productId", productData._id);

      const response = await axios.post(`${CART_API_END_POINT}/add`, formData, {
        headers: { "Content-Type": "application/json" },
      });
      const updatedCart = allCartItems?.push(response?.data?.cart);
      dispatch(setAllCartItems(updatedCart));

      setCartData({
        productName: "",
        price: "",
        images: [],
        size: [],
        quantity: 1,
        productId: "",
      });
      setSelectedIndex([]);
      setFormLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Something went wrong");
      console.log(error);
      setFormLoading(false);
    }
  };

  const [imageIndex, setImageIndex] = useState(0);

  const [activeTab, setActiveTab] = useState("description");

  const reviews = [1, 2, 3];

  if (loading) {
    return <div></div>;
  }

  return (
    <div className="container mt-0 mt-md-3 d-flex flex-wrap justify-content-between py-2 py-sm-0 py-md-0 py-lg-2 px-4 px-sm-0 px-md-0 px-lg-5">
      {error && <Toast message={error} />}
      <div className="  col-12 col-sm-1 col-md-2 col-lg-1 order-2 order-sm-1 mt-3 mt-sm-0 ">
        <div className="d-flex flex-row flex-sm-column col-7 col-md-9 col-lg-12   align-items-center ">
          {productData?.images.map((image, index) => (
            <img
              key={index}
              src={image?.url}
              onClick={() => setImageIndex(index)}
              className="col-3 col-sm-4 ms-3 ms-sm-0 col-sm-12 mt-sm-3"
              alt="product"
              style={{ objectFit: "cover", cursor: "pointer" }}
            />
          ))}
        </div>
      </div>
      <div className=" col-12 col-sm-4 col-md-4 col-lg-5   me-0 me-md-5 mt-4 mt-sm-0   order-1 order-sm-1">
        <img
          src={productData?.images[imageIndex]?.url}
          className="col-12"
          alt="product"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="col-12 col-sm-6 col-md-5 col-lg-5 mt-4 mt-sm-0 order-3">
        <form onSubmit={handleSubmit}>
          <div className="py-2 col-12">
            <h3>{productData?.productName}</h3>
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
            <h3 className="fw-bold">${productData?.price}</h3>
          </div>
          <div className="py-2 col-12 col-lg-9">
            <p className="p-0 m-0">{productData?.description}</p>
          </div>
          <div className="py-2 col-12">
            <p className="fw-bold p-0 m-0">Select Size</p>
          </div>
          <div className="col-12 py-2 d-flex flex-wrap gap-2">
            {productData?.size.map((size, index) => (
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
                  minWidth: "50px", // Ensures a consistent size
                  textAlign: "center",
                }}
                onClick={() => {
                  handleSizeClick(index);
                  handleSize(size);
                }}
              >
                {size}
              </p>
            ))}
          </div>

          <div className="py-4 col-12">
            <button
              className="btn btn-dark text-white px-4 py-2"
              style={{ borderRadius: "0" }}
              type="submit"
            >
              {formloading ? "Loading..." : "Add to Cart"}
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
        </form>
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

      <div className="order-5 col-12">
        <RelatedCollections productData={productData} />
      </div>
    </div>
  );
}

export default ProductPage;
