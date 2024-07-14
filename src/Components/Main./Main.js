import React, { useState } from "react";
import { Button } from "../Button";
// import image from "../Images/images/image-baklava-desktop.jpg";
// import Cart from '';

// Main Component
export const Main = ({
  Products,
  quantities,
  OnDecreaseQunatity,
  OnIncreaseQunatity,
  onAddToCart,
}) => {
  return (
    <div className="dd">
      <h1>Desserts</h1>
      <div className="main">
        {Products.map((Product) => (
          <ProductCard
            Product={Product}
            key={Product.id}
            OnIncreaseQunatity={() => OnIncreaseQunatity(Product, Product.id)}
            OnDecreaseQunatity={() => OnDecreaseQunatity(Product, Product.id)}
            quantity={quantities[Product.id]}
            onAddToCart={() => onAddToCart(Product)}
          />
        ))}
      </div>
    </div>
  );
};

// ProductCard Component
// function ProductCard({
//   Product,
//   OnIncreaseQunatity,
//   OnDecreaseQunatity,
//   quantity,
// }) {
//   const [AddToCart, setAddToCart] = useState(false);

//   const handleAddToCart = () => {
//     setAddToCart(!AddToCart);
//   };

//   return (
//     <div className="ProductCard">
//       <div className="ProductImageDiv">
//         <img
//           src={Product.image.desktop} // Fallback image
//           srcSet={`${Product.image.mobile} 600w, ${Product.image.tablet} 1200w, ${Product.image.desktop} 1600w`}
//           sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1600px"
//           alt={Product.name}
//           className="ProductImage"
//         />
//         {!AddToCart ? (
//           <AddtoCart OnAddtOCart={handleAddToCart} />
//         ) : (
//           <QuantitySET
//             OnIncreaseQunatity={OnIncreaseQunatity}
//             OnDecreaseQunatity={OnDecreaseQunatity}
//             quantity={quantity}
//           />
//         )}
//       </div>
//       <div className="ProductDesc">
//         <p className="productSmallText">{Product.category}</p>
//         <p className="ProductName">{Product.name}</p>
//         <p className="amount">${Product.price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

// ProductCard Component
function ProductCard({
  Product,
  OnIncreaseQunatity,
  OnDecreaseQunatity,
  quantity,
  onAddToCart,
}) {
  const [AddToCart, setAddToCart] = useState(false);

  // const handleAddToCart = () => {
  //   setAddToCart(!AddToCart);
  // };
  const handleAddToCart = () => {
    setAddToCart(!AddToCart);
    // if (!AddToCart) {
    onAddToCart();
    // }
  };

  return (
    <div className="ProductCard">
      <div className="ProductImageDiv">
        <img
          src={Product.image.desktop}
          srcSet={`${Product.image.mobile} 600w, ${Product.image.tablet} 1200w, ${Product.image.desktop} 1600w`}
          sizes="(max-width: 600px) 600px, (max-width: 1200px) 1200px, 1600px"
          alt={Product.name}
          className="ProductImage"
        />
        {!AddToCart ? (
          <AddtoCart OnAddtOCart={handleAddToCart} />
        ) : (
          <QuantitySET
            OnIncreaseQunatity={OnIncreaseQunatity}
            OnDecreaseQunatity={OnDecreaseQunatity}
            quantity={quantity}
          />
        )}
      </div>
      <div className="ProductDesc">
        <p className="productSmallText">{Product.category}</p>
        <p className="ProductName">{Product.name}</p>
        <p className="amount">${Product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

function AddtoCart({ OnAddtOCart }) {
  return (
    <div className="buttonCart">
      <img src="/Images/images/icon-add-to-cart.svg" alt="icon-add-to-cart" />
      <button onClick={OnAddtOCart}>Add to Cart</button>
    </div>
  );
}

function QuantitySET({ OnIncreaseQunatity, OnDecreaseQunatity, quantity }) {
  const increaseIcon = "/Images/images/icon-increment-quantity.svg";
  const DecreaseIcon = "/Images/images/icon-decrement-quantity.svg";
  return (
    <div className="buttonCart quantityset">
      <Button image={DecreaseIcon} onclick={OnDecreaseQunatity} />
      <p>{quantity}</p>
      <Button image={increaseIcon} onclick={OnIncreaseQunatity} />
    </div>
  );
}
