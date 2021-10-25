import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";
import { useParams } from "react-router-dom";

const Content = styled.div`
  .content {
    display: flex;
    width: 70%;
    margin: 0 auto;
    height: 100vh;
    // border: 1px solid red;
  }

  .content-img {
    display: flex;
    width: 65%;
    // border: 1px solid red;
  }

  .image-small {
    display: flex;
    flex-direction: column;
    width: 15%;
    //   border: 1px solid red;
  }

  .img-s {
    padding: 0 10px 10px 0;
  }

  .image-large {
    width: 85%;
  }

  .content-info {
    display: flex;
    flex-direction: column;
    width: 35%;
    padding: 20px;
    // border: 1px solid red;
  }

  .content-info h2 {
    margin-bottom: 40px;
  }

  p {
    margin-bottom: 20px;
  }

  .line {
    height: 20px;
    border-bottom: 1px solid black;
  }

  .btn-login {
    margin: 0 auto;
    margin-top: 30px;
    margin-left: 25%;
    width: 50%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 12px;
  }
  button:hover {
    background-color: #dddddd;
    border: 1px solid #999999;
    color: #666666;
  }
`;

function Item({ item, url }) {
  const { allProduct, setCartItem, cartItem } = useContext(UserContext);
  const { url1, url2, url3, url4, url5, url6 } = url;
  const { productId } = useParams();

  const handleAddCart = async id => {
    const check = cartItem.every(item => {
      return item.id !== id;
    });
    if (check) {
      const data = allProduct.filter(product => {
        return product.id === id;
      });
      const newData = [...data];
      setCartItem(cur => [...cur, ...newData]);
      await axios.post(`/cart/${productId}`, { quantity: 1, price: item.price });
    } else {
      alert("product has been added");
    }
  };

  return (
    <Content>
      <div className="content">
        <div className="content-img">
          <div className="image-small">
            {url2 && (
              <div className="img-s">
                <img src={url2} alt="item1" width="100%" />
              </div>
            )}
            {url3 && (
              <div className="img-s">
                <img src={url3} alt="item1" width="100%" />
              </div>
            )}
            {url4 && (
              <div className="img-s">
                <img src={url4} alt="item1" width="100%" />
              </div>
            )}
            {url5 && (
              <div className="img-s">
                <img src={url5} alt="item1" width="100%" />
              </div>
            )}
            {url6 && (
              <div className="img-s">
                <img src={url6} alt="item1" width="100%" />
              </div>
            )}
          </div>
          <div className="image-large">
            <img src={url1} alt="item1" width="100%" />
          </div>
        </div>
        <div className="content-info">
          <div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <div className="line"></div>
          </div>
          <div className="click">
            <button className="btn-login" onClick={() => handleAddCart(item.id)}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Item;
