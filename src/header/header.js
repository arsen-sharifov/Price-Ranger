import "./styles/header.scss";
import TopHeader from "./top-header/top-header";
import React from "react";
import { useState, useEffect } from "react";
import { filterItemsByGoodsName } from "../utils/utils";
import { getItemData } from "../reducer";
import { Link } from "react-router-dom";

function Header({ setFilteredData, itemList, setSearchActive }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (e.target.value) {
      setSearchActive(true);
    }
    if (!e.target.value) {
      setSearchActive(false);
    }
    setInputValue(value);
    setFilteredData(filterItemsByGoodsName(itemList, value));
  };

  return (
    <div className="header">
      <TopHeader />
      <div className="header__wrapper">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Пошук товару за назвою"
        />
        <Link to="/">
          <h2>Головна</h2>
        </Link>
      </div>
    </div>
  );
}

export default Header;
