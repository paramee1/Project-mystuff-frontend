import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";
import axios from "../config/axios";
import { UserContext } from "../context/userContext";

const Checkout = styled.div`
  width: 70%;
  border: 1px solid black;

  .main {
    height: 40%;
    padding: 10px;
  }

  .select {
    width: 50%;
    padding: 5px;
  }

  .output {
    width: 50%;
    height: 36px;
    padding: 3px;
    font-size: 24px;
    outline: 0;
    border: 1px solid #ccc;
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

function OrderCheckOut() {
  const { user } = useContext(UserContext);
  const [optionsPayment, setOptionsPayment] = useState([]);
  const [optionsAddress, setOptionsAddress] = useState([]);
  const [addressId, setAddressId] = useState(0);

  const history = useHistory();

  useEffect(() => {
    const arr = [];
    const arr2 = [];

    axios.get("/user/payment").then(res =>
      res.data.accounts.map(item => {
        arr.push({ label: `${item.accountNo} ${item.type}`, value: item.id });
      })
    );
    axios.get("/user/address").then(res =>
      res.data.address.map(item => {
        arr2.push({ label: item.address, value: item.id });
      })
    );
    setOptionsPayment(arr);
    setOptionsAddress(arr2);
  }, []);

  const handleSubmitOrder = async event => {
    event.preventDefault();
    try {
      if (addressId === 0) {
        return alert("please select your address");
      }
      const res = await axios.post("/cart/checkout", { userAddressId: addressId });
      console.log(res.data.order.id);
      history.push(`/confirm/${res.data.order.id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Checkout>
      <div className="main">
        <h2>PAYMENT METHODS</h2>
        <br />
        <form onSubmit={handleSubmitOrder}>
          <label>Your Payment Account:</label>
          <div className="select">
            <Select options={optionsPayment}></Select>
          </div>
          <label>Your Address:</label>
          <div className="select">
            <Select options={optionsAddress} onChange={({ value }) => setAddressId(value)}></Select>
          </div>
          <button type="submit" className="btn-">
            PLACE OREDER
          </button>
        </form>
      </div>
    </Checkout>
  );
}

export default OrderCheckOut;
