import styled from "styled-components";
import "../styles/index.css";
import PropTypes from "prop-types";
import React, { useState } from "react";
function Login({ setToken }) {
  const LoginCard = styled.div`
    width: 30vw;
    height: 50vh;
    position: absolute;
    left: 35vw;
    top: 30vh;
    display: flex;
    background-color: #220c10;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 270px;
    min-height: 60px;
    border: 5px;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-family: "Roboto", sans-serif;
  `;
  const InputField = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 4px;
    margin: 10px;
    background-color: #4a3236;
    color: white;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    text-indent: 15px;
    border-color: transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:focus {
      outline: none;
    }
  `;

  const LoginButton = styled.button`
    width: 250px;
    height: 40px;
    border-radius: 4px;
    margin: 10px;
    text-align: center;
    font-size: 20px;
    letter-spacing: 2px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  `;

  const Title = styled.h3`
    font-size: 26px;
    color: white;
  `;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };
  return (
    <div>
      <LoginCard>
        <Title>Welcome Back</Title>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <InputField
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton>Login</LoginButton>
        </form>
      </LoginCard>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default Login;
