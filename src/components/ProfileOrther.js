import React from "react";
import styled from "styled-components";

const Profile = styled.div`
  width: 20%;
  height: 40%;
  border: 1px solid black;

  .service {
    padding: 10px;
  }

  h4 {
    margin-bottom: 10px;
    margin-left: 10px;
  }

  i {
    padding-top: 50px;
    font-size: 48px;
  }

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .message {
    text-decoration: none;
    color: #202d5a;
  }
`;

function ProfileOter() {
  return (
    <Profile>
      <div className="service">
        <h4>
          <a href="/" className="message">
            CUSTOMER SERVICE
          </a>
        </h4>
        <div className="box">
          <a href="/" className="message">
            <i class="fal fa-inbox"></i>
          </a>
        </div>
      </div>
    </Profile>
  );
}

export default ProfileOter;
