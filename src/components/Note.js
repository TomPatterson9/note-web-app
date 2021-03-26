import styled from "styled-components";
import '../styles/index.css';

function Note() {
  const Text = styled.textarea`
    background-color: #28112b;
    width: 95vw;
    color: white;
    height: 90vh;
    margin: 20px;
    resize: none;
    border-style: none;
    border-color: Transparent;
    overflow: auto;
    border:0px;
    font-family: 'Roboto', sans-serif;
  `;

  return (
    <>
      <Text ></Text>
    </>
  );
}
export default Note;
