import "./styles/header.scss";
import TopHeader from "./top-header/top-header";
import React from "react";
import { useState, useEffect } from "react";
import { filterItemsByGoodsName } from "../utils/utils";
import { getItemData } from "../reducer";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "antd";
import user from "../images/icons/user.png";
function Header({ setFilteredData, itemList, setSearchActive }) {
  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Телефони
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          Холодильники
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          Інше
        </a>
      ),
    },
  ];

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
        <Link to="/">
          <h1 className="logo">PRICE RANGER</h1>
        </Link>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="    Пошук товару"
        />
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <Button>Категорії</Button>
        </Dropdown>
        <p className="lang">укр | eng</p>
        <div className="userAccount">
          <img src={user} />
          <p>Увійти</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
