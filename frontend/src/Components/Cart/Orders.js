import React from "react";
import OrderItems from "./OrderItems";

function Orders() {
  const orderarr = [1, 2, 3, 4];
  return (
    <div className="container">
      <div className="p-5">
        <h2>
          <span style={{ color: "#6b7280" }}>MY</span> ORDERS
        </h2>
      </div>
      {orderarr.map((item) => {
        return <OrderItems key={item} />;
      })}
    </div>
  );
}

export default Orders;
