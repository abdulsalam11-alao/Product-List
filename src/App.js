import React, { useEffect, useState } from "react";
import data from "./data.json";
import { Cart } from "./Components/Cart/Cart";
import { Main } from "./Components/Main./Main";
import Checkout from "./Components/CheckoutPage/Checkout";

export const App = () => {
  const [Products] = useState([...data]);
  const [quantities, setQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
  // const [EachTotaPrice, setEachTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  // Initialize quantities for each product
  useEffect(() => {
    const initialQuantities = {};
    Products.forEach((product) => {
      initialQuantities[product.id] = 0;
    });
    setQuantities(initialQuantities);
    updateTotalQuantity(initialQuantities);
  }, [Products]);

  const handleIncreaseQuantity = (product, id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: prevQuantities[id] + 1,
      };
      updateTotalQuantity(newQuantities);
      return newQuantities;
    });
    handleAddToCart(product);
    // handleEachTotalPrice(product);
  };

  const handleDecreaseQuantity = (product, id) => {
    setQuantities((prevQuantities) => {
      const newQuantities = {
        ...prevQuantities,
        [id]: prevQuantities[id] === 1 ? 1 : prevQuantities[id] - 1,
      };

      updateTotalQuantity(newQuantities);
      return newQuantities;
    });
    handleAddToCart(product);
    // handleEachTotalPrice(product);
  };

  const updateTotalQuantity = (quantities) => {
    const total = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    setTotalQuantity(total);
  };
  // const handleEachTotalPrice = (product) => {
  //   console.log(product.quantity);
  //   // console.log(product.price, product.quantity);
  //   const total = +product.price.toFixed(2) * +product.quantity;
  //   console.log(total);
  //   setEachTotalPrice(total.toFixed(2));
  // };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        // If product already exists in the cart, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity = quantities[product.id] + 1;
        return updatedCart;
      } else {
        // If product does not exist in the cart, add it
        return [...prevCart, { ...product, quantity: quantities[product.id] }];
      }
    });
  };
  const calculateOrderTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="App">
      <Main
        Products={Products}
        OnIncreaseQunatity={handleIncreaseQuantity}
        OnDecreaseQunatity={handleDecreaseQuantity}
        onAddToCart={handleAddToCart}
        quantities={quantities}
      />
      <Cart
        totalQuantity={totalQuantity}
        cart={cart}
        quantities={quantities}
        OrderTotal={() => calculateOrderTotal()}
      />
      <Checkout cart={cart} quantities={quantities} />
    </div>
  );
};
