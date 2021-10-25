import React from "react";
import Select from "react-select";
import styled from "styled-components";

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
`;

function OrderBar() {
  return (
    <Checkout>
      <div className="main">
        <h2>PAYMENT METHODS</h2>
        <br />
        <label>Your Payment Account:</label>
        <div className="select">
          <Select></Select>
        </div>
        <label>Your Address</label>
        <div className="select">
          <Select></Select>
        </div>
      </div>
    </Checkout>
  );
}

export default OrderBar;
