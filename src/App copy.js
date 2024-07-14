import React, { useEffect, useState } from "react";
// import { Main } from "./Components/Main/Main";
import data from "./data.json";
import { Cart } from "./Components/Cart/Cart";
import { Main } from "./Components/Main./Main";
import Checkout from "./Components/CheckoutPage/Checkout";

export const App = () => {
  const [Products] = useState([...data]);
  const [quantities, setQuantities] = useState({});
  const [totalQuantity, setTotalQuantity] = useState(0);
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
  };

  const updateTotalQuantity = (quantities) => {
    const total = Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
    setTotalQuantity(total);
  };
  const handleAddToCart = (product) => {
    setCart((prevCart) => [
      ...prevCart,

      { ...product, quantity: quantities[product.id] },
    ]);
    console.log(quantities[product.id]);
  };
  // const handleAddToCart = (product) => {
  //   // Use quantities directly from the current state
  //   const quantityToAdd = quantities[product.id];

  //   setCart((prevCart) => [
  //     ...prevCart,
  //     { ...product, quantity: quantityToAdd },
  //   ]);
  // };

  return (
    <div className="App">
      <Main
        Products={Products}
        OnIncreaseQunatity={handleIncreaseQuantity}
        OnDecreaseQunatity={handleDecreaseQuantity}
        onAddToCart={handleAddToCart}
        quantities={quantities}
      />
      <Cart totalQuantity={totalQuantity} cart={cart} quantities={quantities} />
      <Checkout cart={cart} quantities={quantities} />
    </div>
  );
};
