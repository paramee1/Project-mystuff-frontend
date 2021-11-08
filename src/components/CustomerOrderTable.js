import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "../config/axios";

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

function CustomerOrderTable() {
  const [orderLists, setOrderLists] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios
      .get("/cart/order")
      .then(res => setOrderLists(res.data.order))
      .catch(err => console.dir(err));
  }, []);

  console.log(orderLists[0]?.status);
  const handleOnClicktoList = orderId => {
    history.push(`/profile/customerorder/${orderId}`);
  };

  const handleDelete = () => {};
  return (
    <Profile>
      <div className="main">
        <table style={{ width: "100%" }}>
          <tr>
            <th style={{ padding: "20px" }}>Customer Name</th>
            <th style={{ padding: "20px" }}>Address</th>
            <th style={{ padding: "20px" }}>Status</th>
            {/* <th style={{ padding: "20px" }}>Delete</th> */}
          </tr>
          {orderLists.map((item, index) => (
            <tr key={index}>
              <td style={{ padding: "10px" }}>{`${item.User.firstName} ${item.User.lastName}`}</td>
              <td style={{ padding: "10px" }}>{item.UserAddress.address}</td>
              <td style={{ padding: "10px" }}>
                {item.status ? (
                  <button
                    onClick={() => handleOnClicktoList(item.id)}
                    style={{ width: "100%", backgroundColor: "#08F140" }}
                  >
                    Finished
                  </button>
                ) : item.isCancel ? (
                  <button
                    onClick={() => handleOnClicktoList(item.id)}
                    style={{ width: "100%", backgroundColor: "red" }}
                  >
                    Cancel
                  </button>
                ) : (
                  <button
                    onClick={() => handleOnClicktoList(item.id)}
                    style={{ width: "100%", backgroundColor: "#80E1E7" }}
                  >
                    Wait
                  </button>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Profile>
  );
}

export default CustomerOrderTable;
