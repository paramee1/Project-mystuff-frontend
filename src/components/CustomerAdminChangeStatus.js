import React from "react";

function CustomerAdminChangeStatus({ totalAmount, amountTotal }) {
  amountTotal();
  console.log(totalAmount);
  return (
    <tr>
      <td style={{ padding: "10px" }}>Total</td>
      <td style={{ padding: "10px" }}>{totalAmount} THB</td>
    </tr>
  );
}

export default CustomerAdminChangeStatus;
