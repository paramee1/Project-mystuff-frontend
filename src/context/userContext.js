import { createContext, useEffect, useState } from "react";
import { user as initialUser } from "../service/localStorage";
import axios from "../config/axios";

const UserContext = createContext();
function UserContextPervider({ children }) {
  const [user, setUser] = useState(initialUser);
  const [allProduct, setAllProduct] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [price, setPrice] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get("/product").then(res => setAllProduct(res.data.products));
  }, []);

  return (
    <UserContext.Provider
      value={{ user, setUser, allProduct, cartItem, setCartItem, price, setPrice, total, setTotal }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextPervider };
