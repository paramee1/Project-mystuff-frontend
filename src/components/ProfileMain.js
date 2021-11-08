import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import { UserContext } from "../context/userContext";
import AddressOption from "./AddressOption";
import CancelButton from "./CancelButton";

const Profile = styled.div`
  width: 60%;
  border: 1px solid black;

  .main {
    height: 40%;
    padding: 10px;
  }

  p {
    margin: 15px;
  }

  table,
  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
  }
`;

function ProfileMain() {
  const { user } = useContext(UserContext);
  const [address, setAddress] = useState([]);
  const [curAddress, setCurAddress] = useState([]);
  // const [toggle, setToggle] = useState(false);
  // useEffect(() => {
  //   axios.get("/user/address").then(res => setAddress(res.data.address));
  // }, []);
  const [orderStatus, setOrderStatus] = useState([]);
  useEffect(() => {
    axios
      .get("/cart/orderUser")
      .then(res => setOrderStatus(res.data.order))
      .catch(err => console.dir(err));
  }, []);

  console.log(orderStatus);

  const datestamp = timestamp => {
    const d = new Date(timestamp);
    const date = d.toDateString();
    return date;
  };

  const handleCancelOrder = async orderid => {
    try {
      await axios.put(`/cart/cancelOrder/${orderid}`);
      alert("Your Order has cancelled");
      window.location.reload();
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <Profile>
      <div className="main">
        <h3>HELLO, ... User</h3>
        <br />
        {user.role === "user" ? (
          <table style={{ width: "100%" }}>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Status</th>
            </tr>
            {orderStatus.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "10px" }}>{datestamp(item.createdAt)}</td>
                <td style={{ padding: "10px" }}>{`${item.User.firstName} ${item.User.lastName}`}</td>

                <td style={{ padding: "10px" }}>
                  <div style={{ display: "flex" }}>
                    {item.isCancel ? null : item.status ? (
                      <button style={{ width: "100%", backgroundColor: "#08F140" }}>Finished</button>
                    ) : (
                      <button style={{ width: "100%", backgroundColor: "#80E1E7" }}>Wait</button>
                    )}

                    {item.isCancel ? <button style={{ width: "100%", backgroundColor: "red" }}>Cancel</button> : null}

                    {item.isCancel ? null : (
                      <button
                        onClick={() => handleCancelOrder(item.id)}
                        style={{ width: "100%", backgroundColor: "red", marginLeft: "10px" }}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <></>
        )}
      </div>
    </Profile>
  );
}

export default ProfileMain;
