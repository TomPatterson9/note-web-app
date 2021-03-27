import styled from "styled-components";
import "../styles/index.css";

function Login({ parentCallback, visibilityConfig }) {
  const onTrigger = (event) => {
    parentCallback(true);
    event.preventDefault();
  };

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
    visibility: ${visibilityConfig};
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

  return (
    <div>
      <LoginCard>
        <Title>Welcome Back</Title>
        <InputField type="text" placeholder="Email" />
        <br />
        <br />
        <InputField type="password" placeholder="Password" />
        <LoginButton onClick={onTrigger}>Login</LoginButton>
      </LoginCard>
    </div>
  );
}
export default Login;
