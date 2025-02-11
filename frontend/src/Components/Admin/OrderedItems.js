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
import { useSelector } from "react-redux";
import useGetAllOrders from "../../Hooks/useGetAllOrders";

function OrderedItems() {
  useGetAllOrders();
  const { allOrders } = useSelector((state) => state.order);
  console.log("allOrders", allOrders);

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
            {allOrders.map((order) => (
              <div
                key={order?._id}
                className="row align-items-start border border-2 border-gray-200 px-1 py-3 p-md-1 my-3 my-md-4 text-gray-700"
              >
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
                  {order?.productinfo?.map((product) => (
                    <p className="mb-2 mb-md-1">
                      {product?.name} x {product?.quantity} {product?.size}
                    </p>
                  ))}

                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Customer:</span> {order?.fName}{" "}
                    {""}
                    {order?.lName}
                  </p>
                  <p className=" mb-2 mb-md-1">
                    <span className="fw-medium">Street: </span>
                    {order?.street}
                  </p>
                  <p className=" mb-2 mb-md-1">
                    <span className="fw-medium">Address: </span>
                    {order?.city}, {order?.state}, {order?.country} ,
                    {order?.zipcode}
                  </p>
                </div>

                {/* Order Summary */}
                <div className="col-12 col-md-3 col-lg-3 d-flex flex-column">
                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Items:</span>{" "}
                    {order?.productinfo?.length}
                  </p>
                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Method:</span>{" "}
                    {order?.paymethod.toUpperCase()}
                  </p>
                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Payment:</span>{" "}
                    {order?.payment || "Pending"}
                  </p>
                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Date:</span>{" "}
                    {order?.createdAt.split("T")[0]}
                  </p>
                  <p className="mb-2 mb-md-1">
                    <span className="fw-medium">Phone:</span> {order?.phone}
                  </p>
                </div>

                {/* Price */}
                <div className="col-12 col-md-1 col-lg-1 mt-2 d-flex align-items-center justify-content-start">
                  <p className="fw-bold mb-0">${order?.total}</p>
                </div>

                {/* Order Status Dropdown */}
                <div className="col-9 col-sm-6 col-md-3 col-lg-3 d-flex align-items-center justify-content-center mt-2">
                  <select
                    className="form-select "
                    style={{ fontSize: "0.8rem" }}
                  >
                    <option value="Order Placed">Placed for Order</option>
                    <option value="Packing">Packing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out for delivery">Out for delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </div>
              </div>
            ))}

            {/* You can map over jobApplications here if needed */}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderedItems;
