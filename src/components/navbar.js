import img from "../images/yoshi.png";
import styled from "styled-components";

function Navbar() {


  const Image = styled.img`
    width: 32px;
    height: 32px;
    margin-left: 10px;
    margin-right:10px;
  `;
  const Nav = styled.div`
    height: 5vh;
    width: 100%;
    background-color: #220c10;
    display: flex;
    align-items: center;
    color: white;
  `;

  return (
    <Nav>
      <Image alt="Profile Picture" src={img}></Image>
      <h3>Welcome back</h3>
    </Nav>
  );
}

export default Navbar;
