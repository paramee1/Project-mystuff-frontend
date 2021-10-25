import React, { useEffect, useState } from "react";
import CommentBox from "../components/CommentBox";
import Item from "../components/Item";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";
import axios from "../config/axios";
import { useParams } from "react-router-dom";

function ShoppingItem() {
  const [item, setItem] = useState([]);
  const [url, setUrl] = useState([]);

  const { productId } = useParams();
  useEffect(() => {
    axios.get(`product/${productId}`).then(res => setItem(res.data.product));
    axios.get(`/images/${productId}`).then(res => setUrl(res.data.image));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Section>
      <Sidebar />
      <Item item={item} url={url} />
      <CommentBox />
    </Section>
  );
}

export default ShoppingItem;
