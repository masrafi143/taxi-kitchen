import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./cards/orderCard";
import { toast } from "react-toastify";
import CookingCard from "./cards/CookingCars";

const OrderContainers = ({ orderPromise }) => {
  const data = use(orderPromise);
  console.log(data);

  const [orders, setOrders] = useState(data);
  const [cookingItems, setCookingItems] = useState([]);
  const [readyItems, setReadyItems] = useState([]);

  const handleOrders = (order) => {
    const isExist = cookingItems.find((item) => item.id == order.id);
    if (isExist) {
      toast.error("Order is already cooking.");
      return;
    }
    const newCookingItems = [...cookingItems, order];
    setCookingItems(newCookingItems);
    console.log(newCookingItems);
  };

  return (
    <div>
      <States
        orderTotal={orders.length}
        cookingTotal={cookingItems.length}
        readyTotal={readyItems.length}
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 w-11/12 mx-auto py-10 gap-5">
        <div className="lg:col-span-7">
          <h2 className="text-4xl font-bold">Current Orders</h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                handleOrders={handleOrders}
                order={order}
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div>
            <h2 className="text-4xl font-bold">Cooking Now</h2>
            <div className="shadow p-8 space-y-5">
              {cookingItems.map((order) => (
                <CookingCard key={order.id} order={order} />
              ))}
            </div>
            <h2 className="text-4xl font-bold">Order Ready</h2>
            <div className="shadow p-8 space-y-5">{}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderContainers;
