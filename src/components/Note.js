import styled from "styled-components";



function Note() {
    const Text = styled.textarea`
        background-color:#28112B;
        border:none;
        width:100%;
        color:white;
        margin:20px;

    `
    
  return (
    <>
      <Text id="area" rows="10" cols="50"></Text>
    </>
  );
}
export default Note;
