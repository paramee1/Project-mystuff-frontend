import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  .top {
    color: #202d5a;
    height: 134px;
  }
`;

function CategoriesBar() {
  return (
    <Bar>
      <div className="top">
        <br />
        <h1>ALL PRODUCTS</h1>
        <br />
        <hr />
      </div>
    </Bar>
  );
}

export default CategoriesBar;
