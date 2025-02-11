import React from "react";
import OrderItems from "./OrderItems";
import { useSelector } from "react-redux";
import useGetAllOrders from "../../Hooks/useGetAllOrders";

function Orders() {
  useGetAllOrders();
  const { allOrders } = useSelector((state) => state.order);

  return (
    <div className="container">
      <div className="p-5">
        <h2>
          <span style={{ color: "#6b7280" }}>MY</span> ORDERS
        </h2>
      </div>
      {allOrders?.flatMap((order) =>
        order.productinfo?.map((product) => (
          <OrderItems
            key={product._id}
            product={product}
            paymethod={order.paymethod}
            createdAt={order.createdAt.split("T")[0]}
            status={order.status}
          />
        ))
      )}
    </div>
  );
}

export default Orders;
