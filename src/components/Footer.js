import React from "react";
import styled from "styled-components";
const FooterComponent = styled.div`
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #d4cdc5;
  }

  .row {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .row-r {
    display: flex;
  }

  /* .row-bot {
    display: flex;
    justify-content: center;
} */

  .footer-info {
    padding-left: 20px;
  }

  h4 {
    text-transform: uppercase;
  }

  .footer-info ul {
    list-style-type: none;
  }

  .footer-info ul li a {
    text-decoration: none;
    color: #666;
  }

  .row-l {
    width: 20%;
  }

  .footer-findus ul {
    display: flex;
    list-style-type: none;
  }

  .footer-findus ul li a {
    text-decoration: none;
    padding-right: 10px;
  }

  i {
    font-size: 30px;
    color: #222;
  }

  .footer-sub {
    padding-top: 10px;
  }

  .email-box {
    width: 100%;
    display: flex;
  }

  .email-input {
    width: 100%;
    height: 30px;
    padding: 0 12px;
    outline: 0;
    border: 1px solid #222;
  }

  .sub {
    text-transform: uppercase;
    padding: 0 10px 0 10px;
    border: 1px solid #222;
    background-color: #222;
    color: #fff;
  }
`;

function Footer() {
  return (
    <FooterComponent>
      <footer className="footer">
        <div className="row">
          <div className="row-r">
            <div className="footer-info">
              <h4>information</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
              </ul>
            </div>
            <div className="footer-info">
              <h4>help&service</h4>
              <ul>
                <li>
                  <a href="#">How to order</a>
                </li>
                <li>
                  <a href="#">How to track</a>
                </li>
              </ul>
            </div>
            <div className="footer-info">
              <h4>customer care</h4>
              <ul>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Payment method</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-l">
            <div className="footer-findus">
              <h4>find us on</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-sub">
              <h4>sign up for news</h4>
              <div className="email-box">
                <input type="text" className="email-input" />
                <button className="sub">subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-bot">
          <h3>© mystuff 2021</h3>
        </div>
      </footer>
    </FooterComponent>
  );
}

export default Footer;
