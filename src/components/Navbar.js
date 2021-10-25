import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Header = styled.div`
  .logo {
    font-size: 36px;
    letter-spacing: 10px;
    color: #202d5a;
  }

  a {
    text-decoration: none;
  }

  .nav1 {
    display: flex;
    position: relative;
    justify-content: space-between;
    /* padding: 0 10%; */
  }

  .nav1 > div {
    height: 70px;
  }

  .part1 {
    width: 801.25px;
  }
  .part3 {
    width: 801.25px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .part2 {
    width: 320.48px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav_links {
    padding-right: 50px;
    list-style-type: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0px 5px;
  }

  /* ==========================part2======================== */
  .nav2 {
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 5px 3px -3px #888888;
    padding-right: 50px;
    padding-left: 50px;
    z-index: auto;
  }

  .nav_main {
    list-style-type: none;
    display: flex;
  }

  .nav_main li a {
    text-decoration: none;
    text-transform: uppercase;
    color: #202d5a;
  }

  .nav_main li {
    padding-left: 30px;
  }

  .part5 {
    display: flex;
    position: relative;
    width: 250px;
    padding-left: 15px;
    height: 36px;
    vertical-align: top;
    white-space: nowrap;
    align-items: center;
  }

  .search {
    width: 100%;
    height: 100%;
    font-size: 18px;
    padding: 0 12px;
    border: 1px solid #cbc4c4;
  }

  .search-button {
    padding: 2px;
    padding-right: 5px;
    background-color: #cbc4c4;
    border: 1.5px solid #cbc4c4;
  }
`;
function Navbar() {
  const { user } = useContext(UserContext);

  return (
    <Header>
      <header>
        <nav className="nav1">
          <div className="part1"></div>
          <div className="part2">
            <Link to="/">
              <p className="logo">mystuff</p>
            </Link>
          </div>
          <div className="part3">
            <ul className="nav_links">
              <li>
                {user ? (
                  <Link to="/profile">
                    <img
                      src="https://image.flaticon.com/icons/png/512/126/126486.png"
                      alt="profile"
                      width="16px"
                      height="16px"
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <img
                      src="https://image.flaticon.com/icons/png/512/126/126486.png"
                      alt="profile"
                      width="16px"
                      height="16px"
                    />
                  </Link>
                )}
              </li>
              <li>
                <Link to="/cart">
                  <img
                    src="https://image.flaticon.com/icons/png/512/126/126510.png"
                    alt="cart"
                    width="16px"
                    height="16px"
                  />
                </Link>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://image.flaticon.com/icons/png/512/126/126471.png"
                    alt="wishlist"
                    width="16px"
                    height="16px"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="https://image.flaticon.com/icons/png/512/126/126516.png"
                    alt="service"
                    width="16px"
                    height="16px"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="nav2">
          <div className="part4">
            <ul className="nav_main">
              <li>
                <Link to="/product">new</Link>
              </li>
              <li>
                <a href="#">men</a>
              </li>
              <li>
                <a href="#">women</a>
              </li>
              <li>
                <a href="#">sport</a>
              </li>
              <li>
                <a href="#">accesory</a>
              </li>
              <li>
                <a href="#">sale</a>
              </li>
            </ul>
          </div>
          <div className="part5">
            <input type="text" className="search" />
            <button className="search-button">
              <img src="https://image.flaticon.com/icons/png/512/126/126474.png" alt="" width="24px" height="24px" />
            </button>
          </div>
        </nav>
      </header>
    </Header>
  );
}

export default Navbar;
