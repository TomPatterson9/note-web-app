import styled from "styled-components";

const SideBar = styled.div`
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
  padding-top: 40px;
  background-color: #220c10;
  
`;
const Items = styled.li`
  color: white;
  font-size: 20px;
  list-style-type: none;
  margin-bottom: 20px;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
`;

function Sidebar() {
  return (
    <SideBar>
      <ul>
        <Items>
          <Link href="">Note One</Link>
        </Items>

        <Items>
          <Link href="">Note Two</Link>
        </Items>

        <Items>
          <Link href="">Note Three</Link>
        </Items>
      </ul>
    </SideBar>
  );
}

export default Sidebar;
