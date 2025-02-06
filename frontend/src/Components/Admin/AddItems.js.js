import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import { assets } from "../../assets/admin_assets/assets";

function AddItems() {
  const location = useLocation();
  const { admin } = useSelector((state) => state.admin);

  const sizes = ["S", "M", "L", "XL", "XXL"];
  const [selectedIndex, setSelectedIndex] = useState([]);
  const handleSizeClick = (index) => {
    setSelectedIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const [files, setFiles] = useState([null, null, null, null]); // Store images in an array
  const fileRefs = [useRef(null), useRef(null), useRef(null), useRef(null)]; // Use an array of refs

  const handleFileChange = (index, event) => {
    const newFiles = [...files];
    newFiles[index] = event.target.files[0]
      ? URL.createObjectURL(event.target.files[0])
      : null;
    setFiles(newFiles);
  };

  return (
    <>
      <AdminHeader />
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
            <form>
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
                  className="form-control"
                  placeholder="Type Here"
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
                  className="form-control"
                  placeholder="Type Here"
                />
              </div>
              <div className="d-flex flex-wrap col-11  mt-4 ">
                <div className="d-flex flex-column flex-wrap col-10  col-lg-3 justify-content-start">
                  <div>
                    <p>Product Category</p>
                  </div>
                  <div className="dropdown">
                    <button
                      className="btn dropdown-toggle  text-start"
                      style={{ border: "2px solid black" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Men
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Men
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Women
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
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
                      className="btn dropdown-toggle w-100 text-start"
                      style={{ border: "2px solid black" }}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Topwear
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item" href="#">
                          Topwear
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Bottomwear
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
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
                    className="form-control"
                    placeholder="25"
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
                      onClick={() => handleSizeClick(index)}
                    >
                      {size}
                    </p>
                  ))}
                </div>
              </div>
              <div class="form-check mt-2 ">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Add to BestSellers
                </label>
              </div>
              <div className="mt-4 mb-4">
                <button
                  type="submit"
                  className="btn btn-dark text-white px-4 py-2 "
                  style={{ borderRadius: "0" }}
                >
                  ADD
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
