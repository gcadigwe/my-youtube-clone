import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallSharpIcon from "@material-ui/icons/VideoCallSharp";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

function Header() {
  const [value, setValue] = useState("");
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1200px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__input">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${value}`}>
          <SearchIcon className="header__inputButton" />
        </Link>
      </div>
      <div className="header__right">
        <VideoCallSharpIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon className="header__icon" />
        <Avatar src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.673xw:1.00xh;0.167xw,0&resize=640:*" />
      </div>
    </div>
  );
}

export default Header;
