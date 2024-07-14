import React from "react";
import { CheckBtn } from "../CheckBtn";

export default function Checkout({ cart, quantities }) {
  return (
    <div className="CheckoutPage">
      <img
        src="/Images/images/icon-order-confirmed.svg"
        alt="icon-order-confirmed"
      />
      <h2>Order Confirmed</h2>
      <p>We hope you enjoy your food!</p>
      {cart.map((pro) => (
        <CheckoutList pro={pro} key={pro.id} quantities={quantities} />
      ))}

      <div className="Order">
        <p>Order Total</p>
        <span>$40.50</span>
      </div>
      <CheckBtn text="Start New Order" />
    </div>
  );
}
function CheckoutList({ pro, quantities }) {
  const EachTotaPrice = quantities[pro.id] * pro.price.toFixed(2);
  console.log(pro);

  return (
    <div className="CheckoutList">
      <div className="CheckoutList-card">
        <img src={pro.image.thumbnail} alt={pro.image.thumbnail} />
        <div className="CheckoutList-text">
          <p>{pro.name}</p>
          <span className="CheckoutQuantity">{pro.quantity}x</span>
          <span className="checkoutPrice">@ ${pro.price.toFixed(2)}</span>
        </div>
      </div>
      <div>
        <p className="CheckoutTotalPrice">${EachTotaPrice.toFixed(2)}</p>
      </div>
    </div>
  );
}
