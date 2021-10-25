import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "../config/axios";
import AddressOption from "./AddressOption";

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
`;

function ProfileMain() {
  const [address, setAddress] = useState([]);
  const [curAddress, setCurAddress] = useState([]);
  useEffect(() => {
    axios.get("/user/address").then(res => setAddress(res.data.address));
  }, []);

  return (
    <Profile>
      <div className="main">
        <h3>HELLO, ... User</h3>
        <br />
        {/* <AddressOption address={address} setCurAddress={setCurAddress} /> */}
        <p>Your Address</p>
        <p>Address: {curAddress?.address ? curAddress.address : "-"} </p>
        <p>City: {curAddress?.city ? curAddress.city : "-"}</p>
        <p>Pstal Code: {curAddress?.postalCode ? curAddress.postalCode : "-"}</p>
        <p></p>
      </div>
    </Profile>
  );
}

export default ProfileMain;
