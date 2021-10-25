import React from "react";
import styled from "styled-components";

const Message = styled.div`
  /* THE BASE */
  .bar {
    padding: 10px;
    margin: 10px;
    color: #333;
    background: #fafafa;
    border: 1px solid #ccc;
  }

  /* THE VARIATIONS */
  .info {
    color: #204a8e;
    background: #c9ddff;
    border: 1px solid #4c699b;
  }
  .success {
    color: #2b7515;
    background: #ecffd6;
    border: 1px solid #617c42;
  }
  .warn {
    color: #756e15;
    background: #fffbd1;
    border: 1px solid #87803e;
  }
  .error {
    color: #ba3939;
    background: #ffe0e0;
    border: 1px solid #a33a3a;
  }
`;

function Notification(props) {
  return (
    <Message>
      <div class={`bar ${props.color}`}>{props.error}</div>
    </Message>
  );
}

export default Notification;
