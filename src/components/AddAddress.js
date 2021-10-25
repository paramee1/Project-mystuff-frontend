import React, { useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import Notification from "./Notification";
import { isEmpty } from "validator";

const Profile = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    padding: 10px;
  }

  .input- {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    font-size: 18px;
    outline: 0;
    border: 1px solid #ccc;
  }

  .-box {
    text-transform: uppercase;
    color: #202d5a;
    font-size: 24px;
  }

  .btn- {
    margin: 0 auto;
    margin-top: 30px;
    margin-left: 25%;
    width: 50%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 18px;
  }
`;

function AddAddress() {
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleSubmitAddress = async event => {
    event.preventDefault();
    try {
      if (isEmpty(address)) {
        setMessage("Address is required");
        setColor("error");
        return;
      }
      if (isEmpty(city)) {
        setMessage("City is required");
        setColor("error");
        return;
      }
      if (isEmpty(postalCode)) {
        setMessage("post/zip is required");
        setColor("error");
        return;
      }

      await axios.post("/user/address/create", {
        address,
        city,
        postalCode,
      });
      setColor("success");
      setMessage("Your address has been created");
      setAddress("");
      setCity("");
      setPostalCode("");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setMessage(err.response.data.message);
        setColor("error");
      }
    }
  };

  return (
    <Profile>
      <div className="main">
        <p className="-box">SHIPPING ADDRESS</p>
        {message && <Notification color={color} error={message} />}
        <form onSubmit={handleSubmitAddress}>
          <p className="p-">address:</p>
          <input type="text" className="input-" value={address} onChange={event => setAddress(event.target.value)} />
          <p className="p-">city:</p>
          <input type="text" className="input-" value={city} onChange={event => setCity(event.target.value)} />
          <p className="p-">post/zip code:</p>
          <input
            type="text"
            className="input-"
            value={postalCode}
            onChange={event => setPostalCode(event.target.value)}
          />
          <button type="submit" className="btn-">
            SAVE
          </button>
        </form>
      </div>
    </Profile>
  );
}

export default AddAddress;
