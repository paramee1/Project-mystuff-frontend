import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "../config/axios";
import CustomerAdminChangeStatus from "./CustomerAdminChangeStatus";

const Profile = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    padding: 10px;
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
`;

function CustomerOrderItem() {
  const [itemLists, setItemLists] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [order, setOrder] = useState([]);
  const { orderId } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`/cart/orderItem/${orderId}`)
      .then(res => setItemLists(res.data.order))
      .catch(err => console.dir(err));
    axios
      .get(`/cart/order/${orderId}`)
      .then(res => setOrder(res.data.order))
      .catch(err => console.dir(err));
  }, []);

  console.log(order);

  const amountTotal = () => {
    const res = itemLists.reduce((acc, item) => {
      return acc + +item.total;
    }, 0);
    setTotalAmount(res);
  };

  const handleChangeStatus = async id => {
    try {
      await axios.put(`/cart/orderupdate/${id}`);
      alert("Approve");
      history.push("/profile/customerorder");
    } catch (err) {
      console.dir(err);
    }
  };

  const handleDeleteOrder = async orderId => {
    try {
      await axios.delete(`/cart/order/${orderId}`);
      alert("Order Deleted");
      history.push("/profile/customerorder");
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <Profile>
      <div className="main">
        <table style={{ width: "80%", margin: "0 auto" }}>
          <tr>
            <th style={{ padding: "20px" }}>Item</th>
            <th style={{ width: "20%" }}>total</th>
          </tr>
          {itemLists.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{`${index + 1}. ${item.Product.title}`}</td>
              <td style={{ padding: "10px" }}>{item.total}</td>
            </tr>
          ))}
          <CustomerAdminChangeStatus amountTotal={amountTotal} totalAmount={totalAmount} />
          <tr>
            <th style={{ border: "none", padding: "10px" }}>
              <button
                disabled={order.status || order.isCancel ? true : false}
                onClick={() => handleChangeStatus(orderId)}
                style={{ width: "30%" }}
              >
                Approve
              </button>
              <button onClick={() => handleDeleteOrder(order.id)} style={{ width: "30%", marginLeft: "20px" }}>
                Delete
              </button>
            </th>
            {order.status ? (
              <th style={{ border: "none", padding: "10px", color: "green" }}>Finished</th>
            ) : order.isCancel ? (
              <th style={{ border: "none", padding: "10px", color: "red" }}>Cancel</th>
            ) : (
              <th style={{ border: "none", padding: "10px", color: "red" }}>Wait</th>
            )}
          </tr>
        </table>
      </div>
    </Profile>
  );
}

export default CustomerOrderItem;
