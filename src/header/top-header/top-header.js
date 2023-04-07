import "./styles/top-header.scss";
import React from "react";
import { Image } from "antd";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header__wrapper">
        <Image
          width={46}
          src={require("../../images/icons/light-theme-icon.png")}
          alt="example"
        />
      </div>
    </div>
  );
}

export default TopHeader;
