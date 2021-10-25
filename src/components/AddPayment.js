import React, { useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import Notification from "./Notification";
import { isEmpty } from "validator";
import Select from "react-select";

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

function AddPayment() {
  const [accountNo, setAccountNo] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handleSubmitForm = async event => {
    event.preventDefault();
    try {
      await axios.post("/user/payment", {
        accountNo,
        type,
      });
      setColor("success");
      setMessage("Your Payment metod has been created");
      setAccountNo("");
      setType("");
    } catch (err) {
      console.log(err);
    }
  };

  const options = [
    { label: "SCB", value: "scbbank" },
    { label: "KBANK", value: "kbank" },
    { label: "BANGKOK BANK", value: "bangkokbank" },
  ];

  return (
    <Profile>
      <div className="main">
        <p className="-box">Add Payment</p>
        {message && <Notification color={color} error={message} />}
        <form onSubmit={handleSubmitForm}>
          <p className="p-">Account Number:</p>
          <input
            type="text"
            className="input-"
            value={accountNo}
            onChange={event => setAccountNo(event.target.value)}
          />
          <p className="p-">Bank:</p>
          {/* <input type="text" className="input-" value={type} onChange={event => setType(event.target.value)} /> */}
          <Select options={options} onChange={({ value }) => setType(value)}></Select>
          <button type="submit" className="btn-">
            SAVE
          </button>
        </form>
      </div>
    </Profile>
  );
}

export default AddPayment;
