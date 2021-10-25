import React, { useState } from "react";
import styled from "styled-components";
import Notification from "./Notification";
import axios from "../config/axios";
import { isEmpty, isEmail } from "validator";

const Form = styled.div`
  width: 25%;
  margin-left: 8%;

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

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

  const handlerSubmitRegister = async event => {
    event.preventDefault();
    try {
      if (isEmpty(username) || isEmpty(password) || isEmpty(email)) {
        setMessage("Username or password is required");
        setColor("error");
        return;
      }

      if (!isEmail(email)) {
        setMessage("Email invalid");
        setColor("error");
        return;
      }

      if (password !== confirmPassword) {
        setMessage("password and confirm password did not match");
        setColor("error");
        return;
      }

      await axios.post("/user/register", {
        username,
        password,
        confirmPassword,
        email,
        firstName,
        lastName,
      });
      await axios.post("/cart", { username });

      setColor("success");
      setMessage("Your account has been created");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setEmail("");
      setFirstName("");
      setLastName("");
    } catch (err) {
      console.log(err.response);
      if (err.response && err.response.status === 400) {
        setMessage(err.response.data.message);
        setColor("error");
      }
    }
  };

  return (
    <Form>
      <p className="login-box">create an account</p>
      {message && <Notification color={color} error={message} />}
      <form onSubmit={handlerSubmitRegister}>
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
        <p className="p-login">confirm password:</p>
        <input
          type="password"
          className="input-login"
          value={confirmPassword}
          onChange={event => setConfirmPassword(event.target.value)}
        />
        <p className="p-login">email:</p>
        <input type="text" className="input-login" value={email} onChange={event => setEmail(event.target.value)} />
        <p className="p-login">first name:</p>
        <input
          type="text"
          className="input-login"
          value={firstName}
          onChange={event => setFirstName(event.target.value)}
        />
        <p className="p-login">last name:</p>
        <input
          type="text"
          className="input-login"
          value={lastName}
          onChange={event => setLastName(event.target.value)}
        />
        <button type="submit" className="btn-login">
          REGISTER
        </button>
      </form>
    </Form>
  );
}

export default RegisterForm;
