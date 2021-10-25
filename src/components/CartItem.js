import React from "react";
import styled from "styled-components";

const Item = styled.div`
  .cardItem {
    display: flex;
    width: 100%;
    height: 30vh;
    margin-bottom: 30px;
    margin-top: 30px;
    border: 1px solid black;
  }

  .img {
    width: 35%;
    background-color: #888888;
  }

  .itemName {
    width: 65%;
    padding: 20px;
  }

  .info {
    height: 80%;
  }

  .price {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  h2 {
    margin-bottom: 15px;
  }

  i {
    font-size: 30px;
    margin-right: 10px;
  }

  .cancel {
    background-color: #ffffff;
    border-style: none;
  }
`;

function CartItem({ item, removeProduct }) {
  return (
    <Item>
      <div className="cardItem">
        <div className="img">
          <img src={item.Images[0].url1} alt="item1" width="100%" height="100%" />
        </div>
        <div className="itemName">
          <div className="info">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <div className="price">
            <p>Quantity 1</p>
            <p>{item.price}</p>
          </div>
        </div>
        <div>
          <button className="cancel" onClick={() => removeProduct(item.id)}>
            <i class="fal fa-times"></i>
          </button>
        </div>
      </div>
    </Item>
  );
}

export default CartItem;
