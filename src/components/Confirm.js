import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Select from "react-select";
import styled from "styled-components";
import axios from "../config/axios";
import { UserContext } from "../context/userContext";
import Confirmlists from "./Confirmlists";

const ConfirmOrder = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    height: 40%;
    padding: 10px;
  }

  .btn- {
    margin: 0 auto;
    margin-top: 30px;
    width: 25%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 18px;
  }
  .row {
    display: flex;
    justify-content: space-between;
    padding: 5px 50px;
  }

  .bot {
    width: 100%;
    display: flex;
  }

  .cancel {
    background-color: #d4423f;
  }
`;

function Confirm() {
  const { cartItem, total } = useContext(UserContext);
  const history = useHistory();
  const { orderId } = useParams();

  const arr = [];
  cartItem.map(item => {
    for (const key in item) {
      if (key === "Product") {
        const a = item[key];
        arr.push(a);
      }
    }
  });

  const handleConfirm = () => {
    try {
      arr.map(item => {
        axios.post("/cart/confirm", { productId: item.id, total: item.price, orderId }).then(res => console.log(res));
        axios.delete(`/cart/${item.id}`).then(res => console.log(res));
      });
      alert("Your order has created");
      history.push("/profile");
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancle = () => {
    try {
      axios.delete(`/cart/checkout`).then(res => console.log(res));
      alert("Canceled");
      history.push("/cart");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ConfirmOrder>
      <div className="main">
        <h2>CONFIRM ORDER</h2>
        <br />
        <div>
          {/* <h3>Item</h3>
          <h3>100</h3> */}
          {arr.map(item => (
            <Confirmlists key={item.id} item={item} />
          ))}
        </div>
        <br />
        <hr />
        <br />
        <div className="row">
          <div>
            <h2>TOTAL:</h2>
          </div>
          <div>
            <h2>{total}</h2>
          </div>
        </div>
        <div className="bot">
          <button type="button" className="cancel btn-" onClick={handleCancle}>
            CANCEL
          </button>
          <button type="button" className="btn-" onClick={handleConfirm}>
            CONFIRM
          </button>
        </div>
      </div>
    </ConfirmOrder>
  );
}

export default Confirm;
