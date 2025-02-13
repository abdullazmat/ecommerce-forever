import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { assets } from "../../assets/admin_assets/assets";
import axios from "axios";
import { setAddProducs } from "../../Redux/productSlice";
import { useDispatch } from "react-redux";
import { PRODUCT_API_END_POINT } from "../../Utils/constant";
import Toast from "../user/Toast";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import { useSelector } from "react-redux";

function AddItems() {
  const location = useLocation();
  const disapatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { admin } = useSelector((state) => state.admin);
  console.log(admin);

  useGetAllProducts();

  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    images: [],
    size: [],
    bestSeller: false,
  });

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedIndex, setSelectedIndex] = useState([]);
  const handleSizeClick = (index) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const [files, setFiles] = useState([null, null, null, null]); // Store images in an array
  const fileRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Use an array of refs

  // Handle Normal Change
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  // Handling category change
  const handleCategory = (category) => {
    setProductData({ ...productData, category });
  };

  // Handling sub-category change
  const handleSubCategory = (subCategory) => {
    setProductData({ ...productData, subCategory });
  };

  // Handling size Form Data selection/deselection
  const handleSize = (size) => {
    setProductData((prevData) => {
      const newSize = prevData.size.includes(size)
        ? prevData.size.filter((s) => s !== size)
        : [...prevData.size, size];

      return { ...prevData, size: newSize };
    });
  };
  // Handling image file change
  const handleFileChange = (index, event) => {
    const file = event.target.files[0];

    if (file) {
      // Update files state (for displaying images)
      const updatedFiles = [...files];
      updatedFiles[index] = URL.createObjectURL(file); // Show preview
      setFiles(updatedFiles);

      // Update productData.images
      const updatedImages = [...productData.images];
      updatedImages[index] = file;
      setProductData({ ...productData, images: updatedImages });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      // if (admin?.email === "admin@gmail.com") {
      //   setError("You are not authorized to add products");
      //   setTimeout(() => {
      //     setError(null);
      //   }, 3000);
      //   setTimeout(() => {
      //     setLoading(false);
      //   }, 2000);
      //   return;
      // }

      if (productData.size.length === 0) {
        setError("Select Size");
        setTimeout(() => {
          setError(null);
        }, 3000);
        setTimeout(() => {
          setLoading(false);
        }, 2000);

        return;
      }

      if (productData.images.length === 0) {
        setError("Select Image");
        setTimeout(() => {
          setError(null);
        }, 3000);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        return;
      }

      const formData = new FormData();
      formData.append("productName", productData.productName);
      formData.append("description", productData.description);
      formData.append("category", productData.category);
      formData.append("subCategory", productData.subCategory);
      formData.append("price", productData.price);
      formData.append("size", JSON.stringify(productData.size));
      formData.append("bestSeller", productData.bestSeller);
      productData.images.forEach((image) => {
        if (image) {
          formData.append("images", image);
        }
      });

      const response = await axios.post(
        `${PRODUCT_API_END_POINT}/add`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      disapatch(setAddProducs(response.data));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
      setProductData({
        productName: "",
        description: "",
        category: "Men",
        subCategory: "Topwear",
        price: "",
        images: [],
        size: [],
        bestSeller: false,
      });
      setSelectedIndex([]);
      setFiles([null, null, null, null]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.response?.data?.message || "Something went wrong");
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <AdminHeader />
      {success && <Toast message="Product added successfully" />}
      {error && <Toast message={error} />}
      <div className="container  d-flex">
        <div
          className="d-flex flex-column flex-shrink-0  col-2 col-md-2 col-lg-3 flex-wrap"
          style={{ borderRight: "1px solid #e1e1e1", minHeight: "100vh" }}
        >
          <ul className="nav nav-pills flex-column mt-4 mb-auto">
            <li
              className="nav-item p-2 p-md-0 mb-5 mb-md-3 border d-flex align-items-center justify-content-start"
              style={{
                backgroundColor:
                  location.pathname === "/admin-panel/add"
                    ? "#FFEBF5"
                    : "#FFFFFF",
              }}
            >
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="fa-lg ms-0 ms-md-3"
              />
              <Link
                to={"/admin-panel/add"}
                className="nav-link text-black d-none d-md-inline"
                aria-current="page"
              >
                Add Items
              </Link>
            </li>
            <li
              className="nav-item p-2 p-md-0 mb-5 mb-md-3 border d-flex align-items-center justify-content-start"
              style={{
                backgroundColor:
                  location.pathname === "/admin-panel/list"
                    ? "#FFEBF5"
                    : "#FFFFFF",
              }}
            >
              <FontAwesomeIcon icon={faList} className="fa-lg ms-0 ms-md-3" />
              <Link
                to={"/admin-panel/list"}
                className="nav-link text-black d-none d-md-inline"
                aria-current="page"
              >
                List Items
              </Link>
            </li>
            <li
              className="nav-item p-2 p-md-0 mb-5 mb-md-3 border d-flex align-items-center justify-content-start"
              style={{
                backgroundColor:
                  location.pathname === "/admin-panel/orders"
                    ? "#FFEBF5"
                    : "#FFFFFF",
              }}
            >
              <FontAwesomeIcon
                icon={faBagShopping}
                className="fa-lg ms-0 ms-md-3"
              />
              <Link
                to={"/admin-panel/orders"}
                className="nav-link text-black d-none d-md-inline"
                aria-current="page"
              >
                Order List
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex col-10 col-md-10 col-lg-9 flex-wrap">
          <div className="mt-3 mt-md-0 p-1 p-md-4 ms-4 ms-md-5 col-12">
            <form onSubmit={handleSubmit}>
              <div>
                <p style={{ color: "#4b5563", fontSize: "20px" }}>
                  Upload Image
                </p>
              </div>
              <div className="d-flex flex-wrap gap-3">
                {files.map((file, index) => (
                  <div key={index} className="col-2 col-md-1">
                    <input
                      type="file"
                      className="form-control"
                      hidden
                      accept="image/*"
                      ref={fileRefs[index]}
                      onChange={(e) => handleFileChange(index, e)}
                    />
                    <img
                      className="img-fluid"
                      src={file || assets.upload_area}
                      onClick={() => fileRefs[index].current.click()}
                      style={{
                        cursor: "pointer",
                      }}
                      alt={`Upload ${index}`}
                    />
                  </div>
                ))}
              </div>
              <div className="col-12 mt-3">
                <p style={{ color: "#4b5563", fontSize: "20px" }}>
                  Product Name
                </p>
              </div>
              <div className="mt-3 col-11 col-lg-6">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Type Here"
                  name="productName"
                  value={productData.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 mt-3">
                <p style={{ color: "#4b5563", fontSize: "20px" }}>
                  Product Description
                </p>
              </div>
              <div className="mt-3 col-11 col-lg-6">
                <textarea
                  type="text"
                  required
                  className="form-control"
                  placeholder="Type Here"
                  name="description"
                  value={productData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-wrap col-11  mt-4 ">
                <div className="d-flex flex-column flex-wrap col-10  col-lg-3 justify-content-start">
                  <div>
                    <p>Product Category</p>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle col-12 col-sm-8 col-md-9  text-start"
                      style={{ border: "2px solid black" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {productData.category || "Men"}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleCategory("Men")}
                        >
                          Men
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleCategory("Women")}
                        >
                          Women
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleCategory("Kids")}
                        >
                          Kids
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-column flex-wrap col-10  col-lg-3 ms-0 ms-lg-2  mt-3 mt-lg-0  justify- content-start">
                  <div>
                    <p>Sub - Category</p>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle col-12 col-sm-8 col-md-9   text-start"
                      style={{ border: "2px solid black" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {productData.subCategory || "Topwear"}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleSubCategory("Topwear")}
                        >
                          Topwear
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={() => handleSubCategory("Bottomwear")}
                        >
                          Bottomwear
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="# "
                          onClick={() => handleSubCategory("Winterwear")}
                        >
                          Winterwear
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="d-flex flex-wrap flex-column col-11   col-lg-3 ms-0 ms-lg-2 mt-3 mt-lg-0 justify-content-start ">
                  <p className="w-100 text-start">Product Price</p>
                  <input
                    type="text"
                    required
                    className="form-control"
                    placeholder="25"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-11 col-md-6 col-lg-5 col-xl-4 mt-3 ">
                <div>
                  <p style={{ color: "#4b5563", fontSize: "20px" }}>
                    Product Sizes
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  {sizes.map((size, index) => (
                    <p
                      key={index}
                      className="px-3 py-1"
                      style={{
                        backgroundColor: selectedIndex.includes(index)
                          ? "#F9CFE3"
                          : "#E2E8F0",
                        opacity: "0.6",
                        color: "black",
                        borderRadius: "0",
                        cursor: "pointer",
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
              </div>
              <div className="form-check mt-2 ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={productData.bestSeller}
                  name="bestSeller"
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      bestSeller: e.target.checked,
                    })
                  }
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Add to BestSellers
                </label>
              </div>
              <div className="mt-4 mb-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-dark text-white px-4 py-2 "
                  style={{ borderRadius: "0" }}
                >
                  {loading ? "Loading..." : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddItems;
