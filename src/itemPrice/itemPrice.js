import "./styles/itemPrice.scss";
import React from "react";
const ItemPrice = ({ item }) => {
  return (
    <div className="item-price">
      <h2>{item.shop_name}</h2>
      <h2>{item.item_name}</h2>
      <h2>{item.price} грн</h2>
    </div>
  );
};

export default ItemPrice;
