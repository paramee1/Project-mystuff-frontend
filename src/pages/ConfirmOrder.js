import React from "react";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";
import Confirm from "../components/Confirm";

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

function ConfirmOrder() {
  return (
    <OrderItem>
      <Section>
        <Sidebar />
        <div className="container">
          <Confirm />
        </div>
      </Section>
    </OrderItem>
  );
}

export default ConfirmOrder;
