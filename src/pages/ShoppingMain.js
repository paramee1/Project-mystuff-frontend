import React, { useContext } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import CategoriesBar from "../components/CategoriesBar";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import { UserContext } from "../context/userContext";

const Container = styled.div`
  .bot {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

function ShoppingMain() {
  const { allProduct } = useContext(UserContext);

  return (
    <Container>
      <Section>
        <Sidebar />
        <CategoriesBar />
        <div className="bot">
          {allProduct.map(items => (
            <Card key={items.id} items={items} />
          ))}
        </div>
      </Section>
    </Container>
  );
}

export default ShoppingMain;
