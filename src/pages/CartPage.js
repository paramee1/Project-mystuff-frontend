import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";

const Cart = styled.div`
  .container {
    width: 70%;
    margin: 0 auto 16vh;
  }

  .wrap {
    display: flex;
    justify-content: space-between;
  }

  .row-l {
    width: 60%;
  }

  .row-r {
    width: 35%;
  }
  //////////////////////////////////////////////////////////////
`;

function CartPage() {
  const { cartItem, setCartItem, setTotal, total } = useContext(UserContext);
  const [repage, setRepage] = useState(true);

  useEffect(() => {
    axios.get("/cart").then(res => setCartItem(res.data.item));
  }, []);

  const arr = [];
  cartItem.map(item => {
    for (const key in item) {
      if (key === "Product") {
        const a = item[key];
        arr.push(a);
      }
    }
  });

  console.log(cartItem);

  const removeProduct = async id => {
    cartItem.forEach((item, index) => {
      if (item.productId === id) {
        cartItem.splice(index, 1);
      }
    });
    await axios.delete(`/cart/${id}`);
    setCartItem(cartItem);
    setRepage(cur => !cur);
  };

  const amountTotal = () => {
    const res = cartItem.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(res);
  };

  return (
    <Cart>
      <Section>
        <Sidebar />
        <div className="container">
          <h1>YOUR CART</h1>
          <br />
          <div className="wrap">
            <div className="row-l">
              {arr.length === 0 ? (
                <h2>Cart Empty</h2>
              ) : (
                arr.map(item => <CartItem key={item.id} item={item} removeProduct={removeProduct} />)
              )}
            </div>
            <div className="row-r">
              <OrderSummary amountTotal={amountTotal} total={total} cart={arr} />
            </div>
          </div>
        </div>
      </Section>
    </Cart>
  );
}

export default CartPage;
