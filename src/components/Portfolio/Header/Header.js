import React from "react";
import { Container } from "react-bootstrap";
import homeIcon from "../../../assets/images/icons/home.svg";
import Clock from "../../Clock/Clock";

function Header() {
  let myCurrentDate = new Date(),
    day = myCurrentDate.toLocaleString("default", {weekday: "short"}),
    date = myCurrentDate.getDate(),
    month = myCurrentDate.toLocaleString("default", { month: "short" }),
    year = myCurrentDate.getFullYear(),
    fullYear = day + " " + date + " " + month + " " + year;
  return (
    <div className="header">
      <Container>
        <div className="header__content">
          <div className="menu">
            <a href="/" className="menu__link">
              <img width="16" height="24" src={homeIcon} alt="" /> <p>Desktop</p>
            </a>
          </div>
          <div className="time">
            <p>{fullYear}</p>
            <Clock />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
