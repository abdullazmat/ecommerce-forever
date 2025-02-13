import React from "react";
import OrderItems from "./OrderItems";
import { useSelector } from "react-redux";
import useGetUserOrders from "../../Hooks/useGetUserOrders";
import useGetAllCartItems from "../../Hooks/useGetCartItems";

function Orders() {
  useGetUserOrders();
  useGetAllCartItems();
  const { userOrders } = useSelector((state) => state.order);

  return (
    <div className="container">
      <div className="p-5">
        <h2>
          <span style={{ color: "#6b7280" }}>MY</span> ORDERS
        </h2>
      </div>
      {userOrders && userOrders.length > 0 ? (
        userOrders.flatMap((order) =>
          order.productinfo.map((product) => (
            <OrderItems
              key={product._id}
              product={product}
              paymethod={order.paymethod}
              createdAt={order.createdAt.split("T")[0]}
              status={order.status}
            />
          ))
        )
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-3 mb-5">
          <h3 className="text-danger">No Orders Placed</h3>
        </div>
      )}
    </div>
  );
}

export default Orders;
