import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "../config/axios";

const ProductItemCard = styled.div`
  .card-item {
    height: 515px;
    width: 320px;
    // border: 1px solid red;
  }

  .product-item_wrapper {
    display: flex;
  }

  .product-item_info {
    a {
      text-decoration: none;
    }
  }

  .item-price {
    display: flex;
    justify-content: space-between;
    padding: 8px 0px 0px;
  }
`;

function Card({ items }) {
  const [url, setUrl] = useState([]);

  useEffect(() => {
    axios.get(`/images/${items.id}`).then(res => setUrl(res.data.image));
  }, []);

  return (
    <ProductItemCard>
      <div className="card-item">
        <div className="product-item_wrapper">
          <div>
            {url && (
              <Link to={`/product/${items.id}`}>
                <img className="card" src={url.url1} alt="item" height="415px" width="320px" />
              </Link>
            )}
          </div>
        </div>
        <div className="product-item_info">
          <div className="item-info">
            <Link to={`/product/${items.id}`}>{items.title}</Link>
          </div>

          <div className="item-price">
            <div>{items.price}</div>
            <a href="#">
              <img
                src="https://image.flaticon.com/icons/png/512/126/126471.png"
                alt="wishlist"
                width="16px"
                height="16px"
              />
            </a>
          </div>
        </div>
      </div>
    </ProductItemCard>
  );
}

export default Card;
