import React from "react";
import styled from "styled-components";

const Side = styled.div`
  .mid {
    display: flex;
    align-items: center;
    padding: 30px 0;
    height: 40px;
  }
  .mid a {
    text-decoration: none;
    color: #202d5a;
  }
`;

function Sidebar() {
  return (
    <Side>
      <div className="mid">
        <a href="#">Back</a>
      </div>
    </Side>
  );
}

export default Sidebar;
