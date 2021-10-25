import React from "react";

function Confirmlists({ item }) {
  return (
    <div className="row">
      <h3>{item.title}</h3>
      <h3>{item.price}</h3>
    </div>
  );
}

export default Confirmlists;
