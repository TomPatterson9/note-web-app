import styled from "styled-components";

function Login(){

    const LoginCard = styled.div `

        width:50vw;
        height:40vh;
        position:absolute; 
    
    `
    const InputField = styled.input ` 

        width:10vw;
        height: 4vh;
        border-radius:4px;
        margin:5px;
        text-align:center; 
    
    `

    return (
        <div>
            <LoginCard>
              <InputField type="text" placeholder="Email" />
              <br />
              <InputField type="password" placeholder="Password" />
            </LoginCard>
        </div>
    );
}
export default Login;