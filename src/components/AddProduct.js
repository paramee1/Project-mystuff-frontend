import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";
import axios from "../config/axios";
import { isEmpty } from "validator";
import Notification from "./Notification";

const Profile = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    padding: 10px;
  }

  .select {
    width: 40%;
    display: flex;

    p {
      margin-right: 20px;
    }

    a {
      margin-left: 10px;
      text-decoration: none;
      color: #202d5a;
    }
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
    // border: 1px solid #202d5a;
    font-size: 18px;
  }

  button:disabled {
    background-color: #dddddd;
    border: 1px solid #999999;
    color: #666666;
  }

  .resultImg {
    min-height: 100%;
    max-height: auto;
    width: 100%;
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    align-item: center;
    justify-content: left;
  }

  img {
    height: 150px;
    padding: 0.75rem;
  }
`;

function AddProduct() {
  const { url } = useRouteMatch();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [url1, setUrl1] = useState([]);
  const [categories, setCategories] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState("");
  const [color, setColor] = useState("");
  const [selectFiles, setSelectFiles] = useState([]);

  useEffect(() => {
    axios.get("/product/categories").then(res => setCategories(res.data.categories));
  }, []);

  const handleFiles = event => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files).map(file => URL.createObjectURL(file));
      setSelectFiles(cur => cur.concat(filesArray));
      Array.from(event.target.files).map(file => URL.revokeObjectURL(file));
    }
    setUrl1(cur => [...cur, ...event.target.files]);
  };

  console.log(url1);

  const handleSubmitProduct = async event => {
    event.preventDefault();
    try {
      if (isEmpty(categoryId)) {
        setError("Category is require");
        setColor("error");
        return;
      }
      if (isEmpty(title)) {
        setError("Product name is require");
        setColor("error");
        return;
      }

      if (url1.length > 6) {
        return alert("Only 6 images accepted.");
      }

      const formData = new FormData();
      setDisabled(true);
      formData.append("title", title);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("categoryId", categoryId);
      url1.forEach(file => {
        formData.append("cloudinput", file);
      });
      await axios.post("/product", formData);
      setError("Product has been created");
      setColor("success");
      setTitle("");
      setDesc("");
      setPrice("");
      setQuantity("");
      setUrl1([]);
      setSelectFiles([]);
      setDisabled(false);
    } catch (err) {
      console.log(err);
    }
  };

  // console.log(url1);

  return (
    <Profile>
      <div className="main">
        <p className="-box">ADD PRODUCT</p>
        {error && <Notification color={color} error={error} />}
        <form onSubmit={handleSubmitProduct}>
          <div className="select">
            <p className="p-">category:</p>
            <select className="form-select" value={categoryId} onChange={event => setCategoryId(event.target.value)}>
              <option value="">select</option>
              {categories.map(item => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            <Link to={`${url}/addcategory`}>Add</Link>
          </div>
          <p className="p-">product name:</p>
          <input type="text" className="input-" value={title} onChange={event => setTitle(event.target.value)} />
          <p className="p-">description:</p>
          <input type="text" className="input-" value={desc} onChange={event => setDesc(event.target.value)} />
          <p className="p-">price:</p>
          <input type="text" className="input-" value={price} onChange={event => setPrice(event.target.value)} />
          <p className="p-">quantity:</p>
          <input type="text" className="input-" value={quantity} onChange={event => setQuantity(event.target.value)} />
          <div className="mb-4">
            <p className="p-">url:</p>
            <input type="file" className="form-control" onChange={handleFiles} multiple />
          </div>
          <div className="result">
            {selectFiles.map(item => (
              <img src={item} alt="" key={item} />
            ))}
          </div>
          <button type="submit" className="btn-" disabled={disabled}>
            SAVE
          </button>
        </form>
      </div>
    </Profile>
  );
}

export default AddProduct;
