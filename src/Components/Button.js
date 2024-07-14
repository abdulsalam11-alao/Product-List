import React from "react";

export const Button = ({ image, onclick }) => {
  return (
    <div className="reusedButton" onClick={onclick}>
      <img src={image} alt="icon-remove-item" />
    </div>
  );
};
