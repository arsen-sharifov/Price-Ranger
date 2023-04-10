import React from "react";

import lightThemeIcon from "../../images/icons/light-theme-icon.png";

import "./styles/top-header.scss";

function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header__wrapper">
        <img src={lightThemeIcon} />
      </div>
    </div>
  );
}

export default TopHeader;
