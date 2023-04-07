import React from "react";
import { useState, useEffect } from "react";

import ItemPrice from "../itemPrice/itemPrice";
import { getItemData } from "../reducer";
import { filterDataByItem } from "../utils/utils";
import "./styles/about.scss";

const About = ({ item }) => {
  const itemToShow =
    Object.keys(item).length !== 0
      ? item
      : JSON.parse(localStorage.getItem("selectedItem"));
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getItemData(
        "https://serhiiradiuk.pythonanywhere.com/api/item/"
      );
      const shopData = await getItemData(
        "https://serhiiradiuk.pythonanywhere.com/api/shop/"
      );
      const filteredData = filterDataByItem(item.id, data, shopData);

      setFilteredData(filteredData || []);
    }
    fetchData();
  }, []);

  return (
    <div className="About">
      <div className="item-wrapper">
        <img
          src={itemToShow.goods_image}
          alt="error"
          className="item-wrapper__img"
        />
        <div className="item-wrapper__information">
          <h2>{itemToShow.goods_name}</h2>
          <p>{itemToShow.description}</p>
        </div>
      </div>
      {filteredData.map((item, index) => (
        <ItemPrice key={index} item={item} />
      ))}
    </div>
  );
};

export default About;
