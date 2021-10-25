import React from "react";
import styled from "styled-components";

const Container = styled.div`
  .section {
    display: block;
    margin: 0 auto;
    padding: 0 50px;
    max-width: 2300;
  }
`;

function Section({ children }) {
  return (
    <Container>
      <div className="section">{children}</div>
    </Container>
  );
}

export default Section;
