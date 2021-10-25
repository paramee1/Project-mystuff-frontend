import React from "react";
import styled from "styled-components";

const Box = styled.div`
.comment-box {
    width: 65%;
    height: 50vh;
    margin 100px auto;
    
  }

  .comment-box-1 {
    display: flex;
    align-items: center;
    height: 30%;
    background-color: #c4c4c4;
  }

  .comment-box-1 h2 {
      margin-left: 20px;
  }

  .comment-text {
    border-bottom: 1px dashed black;
  }

  p {
    margin-bottom: 20px;
  }

  .line {
    height: 20px;
      border-bottom: 1px solid black;
  }
`;

function CommentBox() {
  return (
    <Box>
      <div className="comment-box">
        <div className="comment-box-1">
          <h2>RATING & REVIEWS</h2>
        </div>
        <div className="line"></div>
        <div className="comment-box-2">
          <div className="comment-text">
            <p>Username:</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="comment-text">
            <p>Username:</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className="comment-text">
            <p>Username:</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default CommentBox;
