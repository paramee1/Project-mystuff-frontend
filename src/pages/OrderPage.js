import React from "react";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import OrderCheckOut from "../components/OrderCheckOut";

const OrderItem = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    align-items: center;
    width: 90%;
    margin: 0 auto 130px;
  }
`;
function OrderPage() {
  return (
    <OrderItem>
      <Section>
        <Sidebar />
        <div className="container">
          <OrderCheckOut />
        </div>
      </Section>
    </OrderItem>
  );
}

export default OrderPage;
