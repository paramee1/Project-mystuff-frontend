import React from "react";
import styled from "styled-components";
import img from "../images/pexels-ylanite-koppens-934069.jpeg";

const Section = styled.div`
  .main-1 {
    width: 100%;
    height: 100vh;
    background: url(${img}) no-repeat;
    background-size: cover;
  }

  .container-1 {
    position: relative;
    top: 270px;
    right: 450px;
  }

  h2 {
    color: #202d5a;
    font-size: 36px;
    text-align: center;
  }
`;

function MainIndex() {
  return (
    <Section>
      <section className="main-1">
        <div className="container-1">
          <h2 className="text-landing">
            "The secret of great style is to <br /> feel good in what you wear.
          </h2>
        </div>
      </section>
    </Section>
  );
}

export default MainIndex;
