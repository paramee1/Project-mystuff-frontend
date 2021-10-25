import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Order = styled.div`
  .CardSum {
    width: 100%;
    margin-bottom: 30px;
    border: 1px solid black;
    padding: 20px;
  }

  h3 {
    margin-bottom: 15px;
  }

  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 40%;
  }

  .row-bot {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .col-1 {
    flex: 1;
  }

  .col-2 {
    flex: 2;
    font-size: 15px;
  }

  .text-right {
    text-align: right;
  }

  .text-bold {
    font-weight: bold;
  }

  .btn-login {
    margin: 0 auto;
    margin-top: 10px;
    margin-left: 10%;
    width: 80%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 12px;
  }

  h6 {
    width: 60%;
  }
`;

function OrderSummary({ total, amountTotal, cart }) {
  amountTotal();
  console.log(cart);
  return (
    <Order>
      <div className="CardSum">
        <h3>ORDER SUMMARY</h3>
        <div className="row">
          {cart.map(item => (
            <>
              <h6>{item.title}</h6>
              <div className="col-2 text-right">{item.price}</div>
            </>
          ))}
        </div>
        <div className="row-bot text-bold">
          <div className="col-2">Total</div>
          <div className="col-1 text-right">$ {total}</div>
        </div>
        <div className="click">
          <Link to="/checkout">
            <button className="btn-login">CHECKOUT</button>
          </Link>
        </div>
      </div>
    </Order>
  );
}

export default OrderSummary;
