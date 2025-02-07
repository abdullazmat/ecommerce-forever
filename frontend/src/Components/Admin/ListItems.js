import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import { assets } from "../../assets/frontend_assets/assets";

function ListItems() {
  const jobApplications = [
    {
      _id: "1",
      image: assets.p_img2_1,
      name: "Kid Tapered Slim Fit Trouser",
      category: "Kids",
      price: 500,
    },
    {
      _id: "1",
      image: assets.p_img2_2,
      name: "Kid Tapered Slim Fit Trouser",
      category: "Kids",
      price: 500,
    },
  ];
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
          <div className="container-fluid">
            <h4 className="text-start mt-3">Products List</h4>
            <div className="table-responsive">
              <table className="table mt-4 table-bordered">
                <thead className="text-center">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobApplications && jobApplications.length > 0 ? (
                    jobApplications.map((application, index) => (
                      <tr key={index}>
                        <td className="text-center align-middle col-1">
                          <img
                            src={application?.image}
                            style={{ width: "70px" }}
                            alt="product"
                            className="img-fluid"
                          />
                        </td>
                        <td className="text-start text-center align-middle col-4">
                          {application?.name}
                        </td>
                        <td className="text-center text-center align-middle col-1">
                          {application?.category}
                        </td>
                        <td className="text-center text-center align-middle col-1">
                          {application?.price}
                        </td>
                        <td className="text-center align-middle col-1 ">
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="text-danger"
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center text-danger">
                        No Applicants
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItems;
