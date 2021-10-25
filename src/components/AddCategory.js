import React, { useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import { useHistory } from "react-router-dom";

const Profile = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    padding: 10px;
  }

  .input- {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    font-size: 18px;
    outline: 0;
    border: 1px solid #ccc;
  }

  .-box {
    text-transform: uppercase;
    color: #202d5a;
    font-size: 24px;
  }

  .btn- {
    margin: 0 auto;
    margin-top: 30px;
    margin-left: 25%;
    width: 50%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 18px;
  }
`;

function AddCategory() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const history = useHistory();

  const handleSubmitCategory = async event => {
    event.preventDefault();
    try {
      await axios.post("/product/createcategory", {
        name,
        desc,
      });
      setName("");
      setDesc("");
      history.push("/profile/addproduct");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Profile>
      <div className="main">
        <p className="-box">ADD CATRGORY</p>
        <form onSubmit={handleSubmitCategory}>
          <p className="p-">category name:</p>
          <input type="text" className="input-" value={name} onChange={event => setName(event.target.value)} />
          <p className="p-">description:</p>
          <input type="text" className="input-" value={desc} onChange={event => setDesc(event.target.value)} />
          <button type="submit" className="btn-">
            SAVE
          </button>
        </form>
      </div>
    </Profile>
  );
}

export default AddCategory;
