import React, { useContext, useState } from "react";
import styled from "styled-components";
import { UserContext } from "../context/userContext";
import axios from "../config/axios";
import Notification from "./Notification";
import jwtDecode from "jwt-decode";
import { setToken } from "../service/localStorage";
import { useHistory } from "react-router-dom";

const Form = styled.div`
  width: 25%;

  .input-login {
    width: 100%;
    height: 36px;
    padding: 0 12px;
    font-size: 18px;
    outline: 0;
    border: 1px solid #ccc;
  }

  .login-box {
    text-align: center;
    text-transform: uppercase;
    color: #202d5a;
    font-size: 24px;
  }
  .btn-login {
    margin: 0 auto;
    margin-top: 30px;
    margin-left: 25%;
    width: 50%;
    height: 36px;
    color: #fafafa;
    background-color: #202d5a;
    border: 1px solid #202d5a;
    font-size: 18px;
  }
  .p-login {
    margin-top: 20px;
    color: #888;
  }
`;

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSubmitLogin = async event => {
    event.preventDefault();
    try {
      const res = await axios.post("/user/login", { username, password });
      setToken(res.data.token);
      setUser(jwtDecode(res.data.token));
      console.log(res);
      history.push("/profile");
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Invalid username or password");
      }
      console.log(err);
    }
  };

  return (
    <Form>
      <p className="login-box">login</p>
      {error && <Notification color={"error"} error={error} />}
      <form onSubmit={handleSubmitLogin}>
        <p className="p-login">username:</p>
        <input
          type="text"
          className="input-login"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <p className="p-login">password:</p>
        <input
          type="password"
          className="input-login"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit" className="btn-login">
          LOGIN
        </button>
      </form>
    </Form>
  );
}

export default LoginForm;
