import React, { useEffect, useState } from "react";
import "./header.css";
import NetflixLogo from "../Assets/images/64px-Netflix_2015_logo.svg.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [show, setShow] = useState(false); //show- false @z strt n latr it flips to true

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 50);
    }; //scrow sedereg pagu mn yahl pixl endhone bemayet hederun blak or transparent yadergwal
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //-22 When show is true we add the CSS class nav_black, which makes the navbar solid black.//When show is false that class is absent, so the navbar stays transparent.
  return (
    <div className={`header_outer_container ${show ? "nav_black" : ""}`}>
      <div className="header_container">
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
          <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon fontSize="small" />
            </li>
            <li>
              <NotificationsNoneIcon fontSize="small" />
            </li>
            <li>
              <AccountBoxIcon fontSize="small" />
            </li>
            <li>
              <ArrowDropDownIcon fontSize="small" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
