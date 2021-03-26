import styled from "styled-components";

function Login() {
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
    min-width:270px;
    min-height:60px;
  `;
  const InputField = styled.input`
    width: 250px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    margin: 10px;
  `;

  const LoginButton = styled.button`
    width: 250px;
    height: 40px;
    border-radius: 4px;
    text-align: center;
    margin: 10px; 
  `;

  return (
    <div>
      <LoginCard>
        <InputField type="text" placeholder="Email" />
        <br />
        <br />
        <InputField type="password" placeholder="Password" />
        <LoginButton>Login</LoginButton>
      </LoginCard>
    </div>
  );
}
export default Login;
