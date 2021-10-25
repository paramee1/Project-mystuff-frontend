import React, { useEffect, useState } from "react";
import axios from "../config/axios";

function AddressOption({ address }) {
  const [addressId, setAddressId] = useState("");

  //   const options = [];
  //   if (address) {
  //     address.map(item => {
  //       const { id, address } = item;
  //       const newObj = { value: id, label: address };
  //       options.push(newObj);
  //     });
  //   }

  return <div></div>;
}

export default AddressOption;
