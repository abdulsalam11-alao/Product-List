import React from "react";
import { Button } from "../Button";
import { CheckBtn } from "../CheckBtn";

export const Cart = ({ totalQuantity, cart, OrderTotal }) => {
  // console.log(quantities);

  return (
    <div className="CartPage">
      <h2 className="YourCart">Your Cart({totalQuantity}) </h2>
      {totalQuantity > 0 ? (
        <>
          {cart.map((cart) =>
            totalQuantity > 0 ? (
              <CartProductList
                cart={cart}
                key={cart.id}
                OrderTotal={OrderTotal}
              />
            ) : (
              ""
            )
          )}
          {/* <CartProductList />
          <CartProductList />
          <CartProductList /> */}
          <div className="Order">
            <p>Order Total</p>
            <span>${OrderTotal}</span>
          </div>
          <div className="Carbon">
            <img src="/Images/images/icon-carbon-neutral.svg" alt="img" />
            <p>
              This is a<span> carbon-neutral</span> delivery
            </p>
          </div>
          <CheckBtn text="Confirm Order" />
        </>
      ) : (
        <div className="emptycart">
          <div>
            <img
              src="/Images/images/illustration-empty-cart.svg"
              alt="illustration-empty-cart"
            />
            <p>Your added Items will appear here</p>
          </div>
        </div>
      )}
    </div>
  );
};
function CartProductList({ cart, OrderTotal }) {
  const removeIcon = "/Images/images/icon-remove-item.svg";
  // const EachTotaPrice = quantities[cart.id] * cart.price.toFixed(2);
  // console.log(cart);
  return (
    <div className="CartProductList">
      <div>
        <p className="CartProductList-Product">{cart.name}</p>
        <div>
          <span className="q">{cart.quantity}x</span>
          <span className="a">@{cart.price.toFixed(2)}</span>
          <span className="t">${OrderTotal}</span>
        </div>
      </div>
      <Button image={removeIcon} />
    </div>
  );
}
