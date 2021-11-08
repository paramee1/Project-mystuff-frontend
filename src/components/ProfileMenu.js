import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { removeToken } from "../service/localStorage";
import { UserContext } from "../context/userContext";

const Profile = styled.div`
  width: 18%;
  height: 20%;
  padding: 10px;
  border: 1px solid black;

  h4 {
    margin-bottom: 10px;
    margin-left: 10px;
  }

  h4 a {
    text-decoration: none;
    color: #202d5a;
  }
`;

function ProfileMenu() {
  const { url } = useRouteMatch();
  const { user, setUser } = useContext(UserContext);

  const history = useHistory();
  const handleClickLogout = event => {
    event.preventDefault();
    removeToken();
    setUser("");
    history.push("/login");
  };

  return (
    <Profile>
      {user.role === "user" ? (
        <>
          <h4>
            <Link to={`${url}`} className="profile">
              YOUR ORDER
            </Link>
          </h4>
          <h4>
            <Link to={`${url}/address`} className="address">
              ADDRESS
            </Link>
          </h4>
          <h4>
            <Link to={`${url}/addpayment`} className="addpayment">
              ADD PAYMENT
            </Link>
          </h4>
        </>
      ) : (
        <></>
      )}
      {user.role === "admin" ? (
        <h4>
          <Link to={`${url}/addproduct`} className="add">
            ADD PRODUCT
          </Link>
        </h4>
      ) : (
        <></>
      )}
      {user.role === "admin" ? (
        <h4>
          <Link to={`${url}/customerorder`} className="customerorder">
            CUSTOMER ORDER
          </Link>
        </h4>
      ) : (
        <></>
      )}
      <h4>
        <a href="/" className="signout" onClick={handleClickLogout}>
          SIGN OUT
        </a>
      </h4>
    </Profile>
  );
}

export default ProfileMenu;
