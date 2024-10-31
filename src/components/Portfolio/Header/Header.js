import React from "react";
import { Container } from "react-bootstrap";
import homeIcon from "../../../assets/images/icons/home.svg";
import Clock from "../../Clock/Clock";
import { useLocation } from "react-router-dom";

function Header() {
  let myCurrentDate = new Date(),
    day = myCurrentDate.toLocaleString("default", { weekday: "short" }),
    date = myCurrentDate.getDate(),
    month = myCurrentDate.toLocaleString("default", { month: "short" }),
    fullYear = day + " " + date + " " + month;

  const location = useLocation();

  const HeaderContent = () => {
    return (
      <>
        {location.pathname === "/photography" ? (
          <header>
            <Container>
              <a href="/photography">
                <p>Luke Charles Photography</p>
              </a>
            </Container>
          </header>
        ) : (
          <div className="header">
            <Container>
              <div className="header__content">
                <div className="menu">
                  <a href="/" className="menu__link">
                    <img width="16" height="24" src={homeIcon} alt="" />{" "}
                    <p>Luke Charles</p>
                  </a>
                </div>
                <div className="time">
                  <p>{fullYear}</p>
                  <Clock />
                </div>
              </div>
            </Container>
          </div>
        )}
      </>
    );
  };

  return <HeaderContent />;
}

export default Header;
