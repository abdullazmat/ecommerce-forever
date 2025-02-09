import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlus,
  faList,
  faBagShopping,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { PRODUCT_API_END_POINT } from "../../Utils/constant";
import { setAllProducts } from "../../Redux/productSlice";
import useGetAllProducts from "../../Hooks/useGetAllProducts";
import Toast from "../user/Toast";

function ListItems() {
  const { allProducts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loadingProducts, setLoadingProducts] = useState({});

  useGetAllProducts();

  const deleteProduct = async (id) => {
    setLoadingProducts((prev) => ({ ...prev, [id]: true })); // Set loading for the product being deleted
    try {
      await axios.delete(`${PRODUCT_API_END_POINT}/delete/${id}`);
      const updatedProducts = allProducts.filter(
        (product) => product._id !== id
      );
      dispatch(setAllProducts(updatedProducts));
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingProducts((prev) => ({ ...prev, [id]: false })); // Reset loading once deletion is done
    }
  };

  return (
    <>
      <AdminHeader />
      {success && <Toast message="Product deleted successfully" />}
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
                  {allProducts && allProducts.length > 0 ? (
                    allProducts.map((product) => (
                      <tr
                        key={product._id}
                        style={{
                          opacity: loadingProducts[product._id] ? "0.5" : "1",
                          backgroundColor: loadingProducts[product._id]
                            ? "#f0f0f0"
                            : "transparent",
                        }}
                      >
                        <td className="text-center align-middle col-1">
                          <img
                            src={product?.images[0]?.url}
                            style={{ width: "70px" }}
                            alt="product"
                            className="img-fluid"
                          />
                        </td>
                        <td className="text-start text-center align-middle col-4">
                          {product?.productName}
                        </td>
                        <td className="text-center text-center align-middle col-1">
                          {product?.category}
                        </td>
                        <td className="text-center text-center align-middle col-1">
                          {product?.price}
                        </td>
                        <td className="text-center align-middle col-1 ">
                          <FontAwesomeIcon
                            icon={faXmark}
                            className="text-danger"
                            style={{ cursor: "pointer" }}
                            onClick={() => deleteProduct(product._id)}
                          />
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center text-danger">
                        No Products Listed
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
