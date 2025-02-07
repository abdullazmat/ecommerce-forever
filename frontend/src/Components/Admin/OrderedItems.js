import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import { assets } from "../../assets/admin_assets/assets";

function OrderedItems() {
  const jobApplications = [
    {
      _id: "1",
      image: assets.p_img2_1,
      name: "Kid Tapered Slim Fit Trouser",
      category: "Kids",
      price: 500,
    },
    {
      _id: "2",
      image: assets.p_img2_2,
      name: "Kid Tapered Slim Fit Trouser",
      category: "Kids",
      price: 500,
    },
  ];
  return (
    <>
      <AdminHeader />
      <div className="container d-flex">
        {/* Sidebar */}
        <div
          className="d-flex flex-column flex-shrink-0 col-2 col-md-2 col-lg-3 flex-wrap"
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

        {/* Main Content */}
        <div className="d-flex col-10 col-md-10 col-lg-9 flex-wrap">
          <div className="container-fluid p-4">
            <h4 className="text-start ">Order List</h4>
            {/* Each order/item row */}
            <div className="row align-items-start border border-2 border-gray-200 px-1 py-3 p-md-1 my-3 my-md-4 text-gray-700">
              {/* Parcel Icon – hidden on XS and SM */}
              <div className="d-none d-lg-flex col-12 col-md-1 col-lg-1 justify-content-center">
                <img
                  src={assets.parcel_icon}
                  className="img-fluid"
                  alt="product"
                  style={{ maxWidth: "50px" }}
                />
              </div>

              {/* Product Details */}
              <div className="col-12 col-md-5 col-lg-4">
                <p className="mb-2 mb-md-1">
                  Men Slim Fit Relaxed Denim Jacket x 3 XL <span>M</span>
                </p>
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Customer:</span> {"John Doe"}
                </p>
                <p className=" mb-2 mb-md-1">
                  <span className="fw-medium">Street: </span>
                  {"Qtr No 27G/253 Gadwal "}
                </p>
                <p className=" mb-2 mb-md-1">
                  <span className="fw-medium">Address: </span>
                  {"Wah Cantt Pakistan 47010 "}
                </p>
              </div>

              {/* Order Summary */}
              <div className="col-12 col-md-3 col-lg-3 d-flex flex-column">
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Items:</span> {3}
                </p>
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Method:</span> {"COD"}
                </p>
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Payment:</span> {"Pending"}
                </p>
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Date:</span> {"2/6/2025"}
                </p>
                <p className="mb-2 mb-md-1">
                  <span className="fw-medium">Phone:</span> {"03175184327"}
                </p>
              </div>

              {/* Price */}
              <div className="col-12 col-md-1 col-lg-1 mt-2 d-flex align-items-center justify-content-start">
                <p className="fw-bold mb-0">$48</p>
              </div>

              {/* Order Status Dropdown */}
              <div className="col-9 col-sm-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-center mt-2">
                <select className="form-select " style={{ fontSize: "0.8rem" }}>
                  <option value="Order Placed">Placed for Order</option>
                  <option value="Packing">Packing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            </div>
            {/* You can map over jobApplications here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderedItems;
